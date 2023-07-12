
<?php
use App\Http\Controllers\PrnNominationController;
use Illuminate\Support\Facades\Route;

/**
 * 
 * POST request from Google Sheet
 * 
 * @param Request $request
 * @api POST
 * @apiSampleRequest /api/prn-nominations/store_candidate_data
 * @controller PrnNominationController::storeCandidateData
 * 
 */
Route::POST('/prn-nominations/store_candidate_data', [PrnNominationController::class, 'storeCandidateData'])
                ->middleware('apiKey')
                ->name('prn_nominations.store_candidate_data');



/**
 * 
 * GET request from ReactJS Frontend
 * 
 * @param Int $id
 * @api GET
 * @apiSampleRequest /api/prn-nominations/{id}/show-candidate-data
 * @controller PrnNominationController::showCandidateData
 * 
 */

Route::GET('/prn-nominations/{id}/show-candidate-data', [PrnNominationController::class, 'showCandidateData'])
->middleware('apiKey')
->name('prn_nominations.show-candidate-data');