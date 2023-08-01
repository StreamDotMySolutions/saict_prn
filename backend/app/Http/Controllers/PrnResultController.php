<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PrnResultController extends Controller
{

    public function getStateName($sheetName){
        // $sheets = [
        //     'KEDAH N.01 - N.36',
        //     'PULAU PINANG N.01 - N.40',
        //     'KELANTAN N.01 - N.45',
        //     'TERENGGANU N.01 - N.32',
        //     'SELANGOR N.01 - N.56',
        //     'N.SEMBILAN N.01 - N.36'
        // ];

  
        $states = [
            'KEDAH',
            'PULAU PINANG',
            'KELANTAN',
            'TERENGGANU',
            'SELANGOR',
            'NEGERI SEMBILAN'
        ];

        foreach($states as $state){
   
            if(str_contains($sheetName, $state)){
                return $state;
            }
        }

    }

    public function storeRegionData(Request $request){

        $sheet_name = $request->input('sheet_name');
        $state_name = $this->getStateName($sheet_name);
       
        foreach($request->data as $data){
            $this->storePrnRegionDetail($state_name,$data);
            $this->storePrnNominationResult($state_name,$data);
        }
    }

    /**
     * Store data into PrnRegionDetail
     * 
     */
    public function storePrnRegionDetail($stateName, $data){

        //\Log::info($data);
        foreach($data as $region){
            // \Log::info($stateName);
            // \Log::info($region);

            // conver 1 to N01
            $region_code = 'N' . sprintf("%02d",  $region['region_code'] ); 
            
            // get region->id
            $r = \App\Models\PrnRegion::query()
                    ->where('state_name','=',$stateName)
                    ->where('code','=',$region_code)
                    ->first();

            \App\Models\PrnRegionDetail::updateOrCreate(
                [
                    'state_name'=> $stateName,
                    'region_code'=>  $region_code,
                
                ], // condition
                
                // $region
                [
                    'prn_region_id'=> $r ? $r->id : null ,
                    'state_name'=> $stateName,
                    'region_code'=> $region_code,
                    'region_name'=> $region['region_name'], 
                    'registered_voters'=> $region['registered_voters'], 
                    'votes'=> $region['votes'],   
                    'percentage' => $region['percentage'],
                    'majority' => $region['majority'],
                    'verifier1' => isset($region['verifier1']) ? true : false,
                    'verifier2' => isset($region['verifier2']) ? true : false,
                    'chief_verifier' => isset($region['chief_verifier']) ? true : false,
                ]
             );
        }

    }

    /**
     * Store data into PrnNominationResult
     * 
     */
    public function storePrnNominationResult($stateName, $data){

        // get PrnNomination->id
        $s = \App\Models\State::query()
        ->where('name','=',$stateName)
        ->first();

        $candidates = [];
        foreach($data as $key => $region){
            $candidates[$key] = $region['candidates'][0];
            
            // conver 1 to N01
            $regionCode = 'N' . sprintf("%02d",  $region['region_code'] ); 

            // get PrnRegion->id
            $r = \App\Models\PrnRegion::query()
                    ->where('state_name','=',$stateName)
                    ->where('code','=',$regionCode)
                    ->first();



            //\Log::info($region);

            // insert into PrnNominationResult
            foreach($region['candidates'] as $key => $candidate){

                // get PrnNomination->id
                $c = \App\Models\PrnNomination::query()
                    ->where('state_name','=',$stateName)
                    ->where('region_code','=',$regionCode)
                    ->where('candidate_entry','=', $candidate[0])
                    ->first();

                // get Party->id
                $p = \App\Models\PrnParty::query()
                    ->where('title','=',$candidate[4])
                    ->first();

                 // get Coalition->id
                $g = \App\Models\PrnCoalition::query()
                    ->where('title','=',$candidate[3])
                    ->first();

                //\Log::info($candidate);
                \App\Models\PrnNominationResult::updateOrCreate(

                    [
                        'state_name'=> $stateName,
                        'region_code'=> $regionCode,
                        'candidate_entry' => $candidate[0],
                    
                    ], // condition
                    
                    // $region
                    [
                        'prn_region_id' => $r ? $r->id : null ,
                        'prn_nomination_id' => $c ? $c->id : null ,
                        'prn_party_id' => $p ? $p->id : null ,
                        'prn_coalition_id' => $g ? $g->id : null ,
                        'state_id' => $s ? $s->id : null ,


                        'state_name'=> $stateName,
                        'region_code'=> $regionCode,
                        'region_name'=> $region['region_name'], 
                        'sheet_name'=> $region['sheet_name'], 
                        
                        'candidate_entry' => $candidate[0],
                        'candidate_name' => $candidate[1],
                        'party_coalition' => $candidate[3],
                        'party_name' => $candidate[4],

                        'official_count' =>  $candidate[5],
                        'unofficial_count' =>  $candidate[6],
                        
                    ]
                 );
            } 
        }


  
    }
}
