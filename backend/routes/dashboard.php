<?php
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

// Display data to ReactJS
Route::GET('/dashboard/prn15/parties', [DashboardController::class, 'getParties'])
        ->name('dashboard.parties');

// Dashboard data By Stte
// @url /api/dashboard/prn15/getDashboardData/kelantan
Route::GET('/dashboard/prn15/{stateName}/dashboard', [DashboardController::class, 'getDashboardData'])
->name('dashboard.parties');

