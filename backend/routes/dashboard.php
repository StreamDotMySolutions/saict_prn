<?php
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

// Display data to ReactJS
Route::GET('/dashboard/prn15/parties', [DashboardController::class, 'getParties'])
        ->name('dashboard.parties');

