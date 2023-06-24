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

class ProfileController extends Controller
{

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

        // validation passed
        // store in storage/app/avatars/ folder
        $path = Storage::disk('local')->putFile('avatars/' .  $request->user()->id, $request->file('file'));
        \Log::info($path);

        // return http header 200
        return Response::json([
            'message' => 'Profile updated ',
            'id' => Auth::user('auth:sanctum')->id,
        ],200);
    }
   
}
