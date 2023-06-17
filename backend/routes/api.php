<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/test' , function(Request $request){

    // validate incoming request
    $validator = Validator::make($request->all(), [
        'email' => 'required|email', // required | email format
        'password' => 'required', // required
    ]);


    // if validation fail, return status code 422
    // with error message
    if ($validator->fails()) {
        return response()->json(
            [
                'message' => 'Validation Error',
                'errors' => $validator->errors()
            ],
             422);
    }

    // Using Auth Facade
    // Auth:attempt will return TRUE if passed
    // comparing the passed array with User Model in DB
    if (Auth::attempt([
            'email' => $request->input('email'), 
            'password' => $request->input('password')
        ])) {
       
        // write to Log
        \Log::info('authentication passed');

        // create token in User Model
        $token = Auth::user()->createToken('API Token')->plainTextToken;

        // return with 200 header sucess
        // return message = "Authentication Success"
        // return in JSON
        return response()->json([
            'message' => 'Authentication Success',
            'token' => $token
        ],200);
    
    } else {
        \Log::info('authentication failed');

        // return with 401 header Authentication Fail
        // return message = "Authentication Failed"
        // return in JSON
        return response()->json([
            'message' => 'Authentication Failed',
        ],401);
    }
});


// demo for HTML select options
Route::get('/clients' , function(Request $request){

    // to test submitted form
    // from Reactjs
    \Log::info($request);

    // return clients array for dropdown list
    $clients = \App\Models\Client::all(['id','name']);

    // Return success message
    // header 200
    // message = success
    return response()->json([
        'message' => 'list of clients',
        'clients' => $clients
    ],200);
});

//protected route
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// to test authentication
Route::middleware('guest')->post('/login', function(Request $request){

    \Log::info($request);

    $email = $request->input('email');
    $password = $request->input('password');

    // Using Auth Facade
    // Auth:attempt will return TRUE if passed
    // comparing the passed array with User Model in DB
    if (Auth::attempt(['email' => $email, 'password' => $password])) {
       
        // write to Log
        \Log::info('authentication passed');

        // create token in User Model
        $token = Auth::user()->createToken('API Token')->plainTextToken;

        // return with 200 header sucess
        // return message = "Authentication Success"
        // return in JSON
        return response()->json([
            'message' => 'Authentication Success',
            'token' => $token
        ],200);
    
    } else {
        \Log::info('authentication failed');

        // return with 401 header Authentication Fail
        // return message = "Authentication Failed"
        // return in JSON
        return response()->json([
            'message' => 'Authentication Failed',
        ],401);
    }
});

// sanctum logout
Route::middleware('auth:sanctum')->get('/logout', function () {
    
    // revoke the token
    Auth::user()->tokens()->delete();

    return response()->json([
        'message' => 'Logged out',
    ],200);
})->name('logout');

// GET login is required by sanctum
Route::middleware('guest')->get('/login', function () {
    return response()->json([
        'message' => 'Sanctum Login',
    ],401);
})->name('login');


// to test protected resource
Route::middleware('auth:sanctum')->get('/protected', function () {
    return response()->json([
        'message' => 'This is protected page',
        'id' => Auth::user()->id,
        'name' => Auth::user()->name,
        'email' => Auth::user()->email,
    ],200);
});

Route::middleware('auth:sanctum')->post('/profile/store', function () {
    return response()->json([
        'message' => 'This is protected page',
        // 'id' => Auth::user()->id,
        // 'name' => Auth::user()->name,
        // 'email' => Auth::user()->email,
    ],200);
});


// profile
//require __DIR__.'/profile.php';

