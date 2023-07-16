<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PrnNomination;
use App\Http\Resources\PrnCandidateResource;
use App\Http\Resources\PrnNominationResource;

class PrnNominationController extends Controller
{

    /**
     * Model - PrnNominaton
     * Store Candidate data from
     * GSheet Pencalonan TABs
     * @param Request $request
     * @return JSON
     */
    public function storeCandidateData(Request $request)
    {        
        $data = $request->data;

        if(!is_null($data['party_coalition'])){
            $prn_coalition = \App\Models\PrnCoalition::select('id')->where('title',$data['party_coalition'])->first();
            // \Log::info($prn_coalition->id);
            //\Log::info($data['party_coalition']);
        }

        if(!is_null($data['party_name'])){
            $prn_party = \App\Models\PrnParty::select('id')->where('title', $data['party_name'])->first();
            //\Log::info($data['party_name']);
        }

        if(!is_null($data['region_code']) && !is_null($data['region_name'] && !is_null($request->state_name) )  ){
            $prn_region = \App\Models\PrnRegion::query()
                                            ->select('id')
                                            ->where('code',$data['region_code'])
                                            ->where('name',$data['region_name'])
                                            ->where('state_name',$request->state_name)
                                            ->first();
        }

        $prn_candidate = PrnNomination::updateOrCreate(
            [
                'candidate_entry'=> $data['entry'],
                'region_code' => $data['region_code'],
            
            ], // condition
            
            // data
            [
                'state_name' => $request->state_name,
                'region_code' => $data['region_code'],
                'region_name' => $data['region_name'],

                'sheet_name'=> $request->sheet_name,
                'gsheet_email'=> $request->email, 

                'candidate_title'=> $data['title'], 
                'candidate_name'=> $data['name'],
                'candidate_marital_status'=> $data['marital_status'],  
                'candidate_party_job'=> $data['party_job'],  
                'candidate_career'=> $data['career'],  
                'candidate_education'=> $data['education'], 
                
                'party_coalition'=> $data['party_coalition'],  
                'party_name'=> $data['party_name'],  

                'prn_coalition_id' => isset($prn_coalition) ? $prn_coalition->id : null ,
                'prn_party_id' => isset($prn_party) ? $prn_party->id : null ,
                'prn_region_id' => isset($prn_region) ? $prn_region->id : null ,
            ]
         );

        // flush cache
        \Cache::forget('candidates');
        \Cache::forget('regions');
    }

    /**
     * 
     * Show candidate data based on given ID
     *
     * @param Int $id  
     * @return JSON
     * @api GET 
     * @apiSampleRequest /api/prn-nominations/{id}/show-candidate-data
     * 
     */

     public function showCandidateData($id)
     {
        // check if data exist
        $candidate = PrnNomination::where('id','=',$id)->first();

        //\Log::info($candidate); 

        if(!$candidate){
            return \Response::json(
                        ['message' => 'does not exist'],
                        404
                    );
        }

        // return as JSON
        return PrnCandidateResource::make($candidate);
     }


    /**
     * 
     * Show request update from GSheet
     *
     * @return JSON
     * @api GET 
    * @apiSampleRequest /api/prn-nominations/latestRegions
     * 
     */

    public function latestRegions()
    {
        $regions = \Cache::rememberForever('regions', function () {
            return PrnNomination::query()
            ->orderBy('updated_at', 'DESC')
            ->limit(10)
            ->get()->unique('region_code');
        });

        return PrnNominationResource::collection($regions);
    }

    /**
     * 
     * Show request update from GSheet
     *
     * @return JSON
     * @api GET 
     * @apiSampleRequest /api/prn-nominations/latestCandidates
     * 
     */

     public function latestCandidates()
     {
        //\DB::enableQueryLog();

        $candidates = \Cache::rememberForever('candidates', function () {
            return PrnNomination::query()
                ->orderBy('updated_at', 'DESC')
                ->where('candidate_name','!=', null)
                ->limit(10)
                ->get();
        });

        // Your query here
        //$queries = \DB::getQueryLog();
        //Log::info($queries);
 
        return PrnNominationResource::collection($candidates);
     }

}
