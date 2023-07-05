<?php

use App\Http\Controllers\KedahController;
use App\Http\Controllers\KelantanController;
use App\Http\Controllers\N9Controller;
use App\Http\Controllers\PulauPinangController;
use App\Http\Controllers\SelangorController;
use App\Http\Controllers\TerengganuController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('mainpage.index');
});

Route::get('/selangor/keputusan-rasmi',[SelangorController::class, 'index2']);
Route::resource('/selangor',SelangorController::class);
Route::resource('/kedah',KedahController::class);
Route::resource('/pulau_pinang',PulauPinangController::class);
Route::resource('/n9',N9Controller::class);
Route::resource('/kelantan',KelantanController::class);
Route::resource('/terengganu',TerengganuController::class);
