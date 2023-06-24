<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::post('/users/index', [UsersController::class, 'index'])
                ->middleware('auth:sanctum')
                ->name('users.index');
