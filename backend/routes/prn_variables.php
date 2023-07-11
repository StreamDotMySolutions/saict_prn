
<?php
use App\Http\Controllers\PrnVariableController;
use Illuminate\Support\Facades\Route;

// data from Google Sheet as POST as API
Route::POST('/prn-variables/store_region_data', [PrnVariableController::class, 'storeRegionData'])
        ->middleware('apiKey')
        ->name('prn_variable.store_region_data');

// http://202.165.15.230:8001/api/prn-variables/states/selangor/get-region-data 
Route::GET('/prn-variables/states/{stateName}/get-region-data', [PrnVariableController::class, 'getRegionData'])
        ->name('prn_variable.get_region_data');

// http://202.165.15.230:8001/api/prn-variables/states/selangor/code/N01/get-candidate-data
Route::GET('/prn-variables/states/{stateName}/code/{regionCode}/get-candidate-data', [PrnVariableController::class, 'getCandidateData'])
->name('prn_variable.get_candidate_data');