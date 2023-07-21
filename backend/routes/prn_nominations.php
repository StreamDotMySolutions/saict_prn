
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
// Route::POST('/prn-nominations/store_candidate_data', [PrnNominationController::class, 'storeCandidateData'])
//                 ->middleware('apiKey')
//                 ->name('prn_nominations.store_candidate_data');

Route::POST('/prn-nominations/store-candidate-data', [PrnNominationController::class, 'storeCandidateData'])
        ->middleware('apiKey')
        ->name('prn_nominations.store_candidate_data');

Route::POST('/prn-nominations/store-candidate-url', [PrnNominationController::class, 'storeCandidateUrl'])
        ->middleware('apiKey')
        ->name('prn_nominations.store_candidate_url');

Route::POST('/prn-nominations/store-sheet-data', [PrnNominationController::class, 'storeSheetData'])
        ->middleware('apiKey')
        ->name('prn_nominations.store_sheet_data');



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
 * @apiSampleRequest /api/prn-nominations/latest/regions
 * @controller PrnNominationController::latestRegions
 * 
 */

 Route::GET('/prn-nominations/latest/regions', [PrnNominationController::class, 'latestRegions'])
 ->name('prn_nominations.latest_regions');

 /**
 * 
 * GET request from ReactJS Frontend
 * 
 * @api GET
 * @apiSampleRequest /api/prn-nominations/latest/candidates
 * @controller PrnNominationController::latestCandidates
 * 
 */

 Route::GET('/prn-nominations/latest/candidates', [PrnNominationController::class, 'latestCandidates'])
 ->name('prn_nominations.latest_candidates');