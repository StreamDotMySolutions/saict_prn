<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PrnRegion;
use App\Models\PrnNomination;
use App\Models\PrnCoalition;
use App\Models\PrnParty;
use App\Http\Resources\PrnRegionResource;
use App\Http\Resources\PrnCandidateResource;

class PrnVariableController extends Controller
{
    /**
     * Model - PrnRegion
     * store variables submitted from Google Sheet
     * @param Request $request
     * @return JSON 
     */
    public function storeRegionData(Request $request)
    {
        // create collection from submitted request
        $collection = collect($request->data);
        
        $collection->each(function ( $item,$key ) use ( $request ) {
            
            if( !is_null($item[0]) && !is_null($item[1]) ){

                // check of dataset exists on DB
                $check = PrnRegion::where([
                                [ 'state_name', $request->input('state_name') ],
                                [ 'code', $item[0] ],
                                [ 'name', $item[1] ],
                            ])
                            ->first();
                if(!$check){   
                    // create new dataset
                    $prn_region = new PrnRegion;
                    $prn_region->gsheet_email = $request->input('email');
                    $prn_region->sheet_name = $request->input('sheet_name');
                    $prn_region->state_name = $request->input('state_name');
                    $prn_region->code = $item[0];
                    $prn_region->name = $item[1];       
                    $prn_region->save();
                    //\Log::info('create');
                } else {
                    // update exsiting dataset
                    $check->gsheet_email = $request->input('email');
                    $check->sheet_name = $request->input('sheet_name');
                    $check->state_name = $request->input('state_name');
                    $check->code = $item[0];
                    $check->name = $item[1];   
                    $check->save();
                    //\Log::info('update');
                }

            }
        });
    }

    /**
     * Model - PrnCoalition
     * store variables submitted from Google Sheet
     * @param Request $request
     * @return JSON 
     */
    public function storeCoalitionData(Request $request)
    {
        foreach($request->data as $data){

            PrnCoalition::updateOrCreate(
                
                // check condition
                [
                    'title'=> $data[0],     
                ],
                
                // data
                [
                    'title'=> $data[0], 
                    'description'=> $data[1], 
                ]
            );
        }
        return \Response::json([
            'message' => 'Coalition data sync to portal is successful'
        ],200);
    }

    /**
     * Model - PrnParty
     * store variables submitted from Google Sheet
     * @param Request $request
     * @return JSON 
     */
    public function storePartyData(Request $request)
    {
        foreach($request->data as $data){

            PrnParty::updateOrCreate(
                
                // check condition
                [
                    'title'=> $data[0],     
                ],
                
                // data
                [
                    'title'=> $data[0], 
                    'description'=> $data[1], 
                ]
            );
        }
        return \Response::json([
            'message' => 'Party data sync to portal is successful'
        ],200);
    }

    /**
     * Model - PrnRegion
     * Return as Array 
     * Regions by State
     * @param String $stateName
     * @return JSON
     */
    public function getRegionData($stateName)
    {
        
        $stateName = strToUpper(str_replace('-',' ',$stateName));

        // fetch regions 
        $regions = PrnRegion::query()
                            ->select('code','name')
                            ->where(['state_name' => $stateName])
                            ->withCount('prn_nominations')
                            ->get();	

        $totalCandidates = $regions->sum('prn_nominations_count');

        return \Response::json([
            'candidates' => $totalCandidates ? $totalCandidates : 0,
            'regions' => $regions,
        ]);
    }

    /**
     * Model - PrnNomination
     * Return as Array 
     * Regions by State
     * @param String $stateName
     * @param String $regionCode
     * @return JSON
     */
    public function getCandidateData($stateName, $regionCode)
    {


        $stateName = strToUpper(str_replace('-',' ',$stateName));

        // fetch regions 
        $candidates = PrnNomination::query()
                            //->select('code','name')
                            ->where([
                                'state_name' => $stateName,
                                'region_code' => $regionCode])
                            ->whereNotNull('candidate_name')
                            ->get();
    
        return PrnCandidateResource::collection($candidates);
    }
}
