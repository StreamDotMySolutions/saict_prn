
<?php
use App\Http\Controllers\PrnVariableController;
use Illuminate\Support\Facades\Route;

// data from Google Sheet as POST as API
Route::POST('/prn-variables/store_region_data', [PrnVariableController::class, 'storeRegionData'])
                ->middleware('apiKey')
                ->name('prn_variable.store_region_data');