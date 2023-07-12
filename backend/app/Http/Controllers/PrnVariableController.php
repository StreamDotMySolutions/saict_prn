<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PrnRegion;
use App\Models\PrnNomination;
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
     * Model - PrnRegion
     * Return as Array 
     * Regions by State
     * @param String $stateName
     * @return JSON
     */
    public function getRegionData($stateName)
    {

        //str_replace("world","Peter","Hello world!");
        $stateName = strToUpper(str_replace('-',' ',$stateName));

        // fetch regions 
        $regions = PrnRegion::query()
                            ->select('code','name')
                            ->where(['state_name' => $stateName])
                            ->get();

        return PrnRegionResource::collection($regions);
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

        // \Log::info($stateName);
        // \Log::info($regionCode);
        //str_replace("world","Peter","Hello world!");
        $stateName = strToUpper(str_replace('-',' ',$stateName));

        // fetch regions 
        $candidates = PrnNomination::query()
                            //->select('code','name')
                            ->where([
                                'state_name' => $stateName,
                                'region_code' => $regionCode])
                            ->get();
        // \Log::info($candidates);
        return PrnCandidateResource::collection($candidates);
    }
}
