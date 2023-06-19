<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

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
   
}
