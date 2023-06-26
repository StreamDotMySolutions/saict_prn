<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreAvatarRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\ProfileResource;

class ProfileController extends Controller
{

    /**
     * show user data in Profile
     */
    public function show(Request $request)
    {
        return new ProfileResource($request->user());
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(Request $request)
    {

        // POST data from ReactJS
        $request_data = $request->only(['name','email']); 

        // if user change password
        if($request->filled('password')){
            $request_data['password'] = \Hash::make($request->input('password'));
        }

        User::where('id' ,  Auth::user('auth:sanctum')->id )->update($request_data);
        
        // update user profile
        return Response::json([
            'message' => 'Updating profile',
            'id' => Auth::user('auth:sanctum')->id,
            'name' => $request->input('name'),
            'email' =>  $request->input('email'),
        ],200);

    }

    /**
     * Store Submitted Avatar
     */
    public function storeAvatar(Request $request)
    {
        \Log::info($request);

        $rules = [
            'file' => ['required','mimes:jpeg,png,jpg,gif'],
        ];
    
        $customMessages = [
            'file.required' => 'The :attribute field is required.',
            'file.mimes' => 'Only WEBP,JPG and PNG is allowed'
        ];
    
        $validator = Validator::make($request->all(), $rules, $customMessages);


        // if validation fail, 
        // return http header 422
        if ($validator->fails()) {
            return Response::json([
                'message' => 'Validation failed',
                'errors' => $validator->messages()
            ],422);
        }

        // if validation passed
        // return http header 200
        return Response::json([
            'message' => 'Profile updated ',
            'id' => Auth::user('auth:sanctum')->id,
        ],200);
    }

    public function storeProfileAvatar(StoreAvatarRequest $request)
    {

        if($request->has('file')){
            // store in storage/app/public/avatars/ folder
            // http://localhost:8000/storage/avatars/1/DxaIElZ3nsKIeYlAAnl6Ddd83Oop89wuCgV3hW1Z.png
            $path = Storage::disk('avatars')->putFile( $request->user()->id, $request->file('file'));

            if($path){
                User::where('id' ,  Auth::user('auth:sanctum')->id )->update(['avatar' => basename($path) ]);
            }
     
        }

        //return new UserResource(User::findOrFail($id));
        // return new ProfileResource([
        //     'message' => 'Avatar updated ',
        //     'url' => env('APP_URL').'/storage/avatars/' . Auth::user('auth:sanctum')->id . '/' .  basename($path),
        // ]);

        // return http header 200
        return Response::json([
            'avatar' => env('APP_URL').'/storage/avatars/' . Auth::user('auth:sanctum')->id . '/' .  basename($path),
        ],200);
    }
   
}
