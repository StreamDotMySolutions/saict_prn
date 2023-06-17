<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('/sign-in', [AuthController::class, 'store'])
                ->middleware('guest')
                ->name('sign-in');