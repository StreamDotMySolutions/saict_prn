<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/profile/show', [ProfileController::class, 'show'])
                ->middleware('auth:sanctum')
                ->name('profile.show');


Route::post('/profile/store', [ProfileController::class, 'store'])
                ->middleware('auth:sanctum')
                ->name('profile.update');

                
Route::post('/profile/avatar/store', [ProfileController::class, 'storeProfileAvatar'])
                ->middleware('auth:sanctum')
                ->name('avatar.store');