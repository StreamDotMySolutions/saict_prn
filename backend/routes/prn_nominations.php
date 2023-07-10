
<?php
use App\Http\Controllers\PrnNominationController;
use Illuminate\Support\Facades\Route;

// data from Google Sheet as POST as API
Route::POST('/prn-nominations/store_candidate_data', [PrnNominationController::class, 'storeCandidateData'])
                ->middleware('apiKey')
                ->name('prn_nominations.store_candidate_data');