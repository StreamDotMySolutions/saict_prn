<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreAvatarRequest;
use App\Http\Requests\StoreProfileRequest;
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
     * update user profile
     */
    public function store(StoreProfileRequest $request)
    {
        // POST data from ReactJS
        $request_data = $request->only(['name','email']); 

        // if user change password, field is newpassword
        if($request->filled('newpassword')){
            $request_data['password'] = \Hash::make($request->input('newpassword'));
        }

        User::where('id' ,  Auth::user('auth:sanctum')->id )->update($request_data);

        return new ProfileResource($request->user());

    }

    /**
     * update user avatar
     */

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

        // return http header 200
        return Response::json([
            'avatar' => env('APP_URL').'/storage/avatars/' . Auth::user('auth:sanctum')->id . '/' .  basename($path),
        ],200);
    }
   
}
