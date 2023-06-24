<?php

use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

Route::get('/users/index', [UsersController::class, 'index'])
                ->middleware('auth:sanctum')
                ->name('users.index');
