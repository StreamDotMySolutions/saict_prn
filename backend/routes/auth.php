<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'store'])
                ->middleware('guest')
                ->name('login');

Route::get('/logout', [AuthController::class, 'delete'])
                ->middleware('auth:sanctum')
                ->name('logout');