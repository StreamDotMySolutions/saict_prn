<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PrnRegion;
use App\Models\PrnRegionDetail;
use App\Models\PrnNomination;
use App\Models\PrnCoalition;
use App\Models\PrnParty;
use App\Http\Resources\PrnRegionResource;
use App\Http\Resources\PrnCandidateResource;
use App\Http\Resources\PrnDetailResource;
use Illuminate\Support\Str;

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

        //\Log::info($request);
        // create collection from submitted request
        $collection = collect($request->data);
        
        $collection->each(function ( $item,$key ) use ( $request ) {
            
            if( !is_null($item[0]) && !is_null($item[1]) ){

                // get state id
                $state = \App\Models\State::where('name','=',  $request->input('state_name') )->first();
                


                // check of dataset exists on DB
                $check = PrnRegion::where([
                                [ 'state_name', $request->input('state_name') ],
                                [ 'code', $item[0] ],
        
                            ])
                            ->first();
                if(!$check){   
                    // create new dataset
                    $prn_region = new PrnRegion;
                    $prn_region->gsheet_email = $request->input('email');
                    $prn_region->sheet_name = $request->input('sheet_name');
                    $prn_region->state_name = $request->input('state_name');
                    $prn_region->state_id = $state->id ? $state->id : null; 
                    $prn_region->code = $item[0];
                    $prn_region->name = $item[1];       
                    $prn_region->save();
                    //\Log::info('create');
                } else {
                    // update exsiting dataset
                    $check->gsheet_email = $request->input('email');
                    $check->sheet_name = $request->input('sheet_name');
                    $check->state_name = $request->input('state_name');
                    $check->state_id = $state->id ? $state->id : null; 
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

        \Cache::flush();
        
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

        // List all Registered Party
        $parties = \App\Models\PrnParty::query()
                    ->select('title')
                    ->get()
                    ->map( function($party) use ($stateName) {
                        $party->total = $this->getContestingPartyByState($stateName,$party->title); 
                        return $party;
                    });
        //\Log::info($parties);            

        //\DB::enableQueryLog();
        // fetch regions 
        $regions = PrnRegion::query()
                    ->select('code','name')
                    ->where(['state_name' => $stateName])
                    ->withCount('prn_nominations')
                    ->orderBy('code', 'ASC')
                    ->get()	
                    ->map(function ($region) {
                        $region->slug = Str::slug($region->name);
                        return $region;
                    });


        $totalCandidates = $regions->sum('prn_nominations_count');

        return \Response::json([
            'state_name'=> $stateName,
            'candidates' => $totalCandidates ? $totalCandidates : 0,
            'regions' => $regions,
            'parties' => $parties,
        ]);
    }

    private function getContestingPartyByState($stateName,$partyName){
        return \App\Models\PrnNomination::query()
            ->select('prn_party_id','candidate_name','id')
            ->where('prn_party_id','!=', null)
            ->where('candidate_name','!=', null)
            ->where('region_name','!=', null)
            ->where('party_name','!=', null)
            ->whereHas('prn_region.state', function ($query) use ($stateName){
                return $query->where('name', '=', $stateName);
            })
            ->whereHas('prn_party', function ($query) use ($partyName){
                return $query->where('title', '=', $partyName);
            })
            ->count();
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

        // candidates by state and region 
        $candidates = PrnNomination::query()
                            //->select('code','name')
                            ->with('prn_nomination_result')
                            ->where([
                                'state_name' => $stateName,
                                'region_code' => $regionCode])
                            ->whereNotNull('candidate_name')
                            ->orderBy('candidate_entry', 'ASC')
                            ->get();
        //\Log::info($candidates);

        // get region detail
        $details = PrnRegionDetail::query()
                    ->where([
                        'state_name' => $stateName,
                        'region_code' => $regionCode])
                    ->first();

        $logs = \App\Models\PrnLog::query()
                    ->where('prn_region_detail_id','=' , $details->id)
                    ->orderBy('id','DESC')
                    ->limit(10)
                    ->get();
        
        return \Response::json([
            'candidates' => PrnCandidateResource::collection($candidates),
            'details' => PrnDetailResource::make($details),
            'logs' => $logs,
        ]);
    }
}
