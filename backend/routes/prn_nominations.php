
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
->name('prn_nominations.show-candidate-data');

/**
 * 
 * GET request from ReactJS Frontend
 * 
 * @api GET
 * @apiSampleRequest /api/prn-nominations/latesy
 * @controller PrnNominationController::latest
 * 
 */

 Route::GET('/prn-nominations/latest', [PrnNominationController::class, 'latest'])
 ->name('prn_nominations.latest');

 /**
 * 
 * GET request from ReactJS Frontend
 * 
 * @api GET
 * @apiSampleRequest /api/prn-nominations/lates
 * @controller PrnNominationController::latest
 * 
 */

 Route::GET('/prn-nominations/latest/candidates', [PrnNominationController::class, 'latestCandidates'])
 ->name('prn_nominations.latest_candidates');