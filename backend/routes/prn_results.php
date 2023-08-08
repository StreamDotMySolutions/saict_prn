<?php
use App\Http\Controllers\PrnResultController;
use Illuminate\Support\Facades\Route;

// data from Google Sheet as POST as API
Route::POST('/prn-results/store-region-data', [PrnResultController::class, 'storeRegionData'])
        ->middleware('apiKey')
        ->name('prn_result.store_region_data');

// data from Google Sheet as POST as API
Route::POST('/prn-results/store-triggered-data', [PrnResultController::class, 'storeTriggeredData'])
        ->middleware('apiKey')
        ->name('prn_result.store_triggered_data');

        // data from Google Sheet as POST as API
Route::POST('/prn-results/store-by-sheet', [PrnResultController::class, 'storeBySheet'])
->middleware('apiKey')
->name('prn_result.store_by_sheet');