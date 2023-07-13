<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::get('/token', function () { 
    return csrf_token();
});

Route::post('/protected', function () {
   return 'You can post data';
})->middleware(['responseInJson']);


// auth
//require __DIR__.'/auth.php';

// test GET
Route::get('/test_get', function () {
    return 'You can GET data';
 })->middleware(['responseInJson']);

 // test POST
Route::post('/test_post', function () {
    return 'You can POST data';
 })->middleware(['responseInJson']);

