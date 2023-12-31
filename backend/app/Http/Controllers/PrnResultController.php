<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;

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

            if(str_contains($sheetName, )){
                return $state;
            }
        }

    }

    public function storeRegionData(Request $request){

        //\Log::info($request);
        $sheet_name = $request->input('sheet_name');
        $state_name = $request->input('state_name');
        // $state_name = $this->getStateName($sheet_name);
       
        foreach($request->data as $data){
            $this->storePrnRegionDetail($state_name,$data);
            //$this->storePrnNominationResult($state_name,$data);
          
            foreach($data as $prn){
                
                $this->storeCandidateData($prn);
            }

            // loop to insert candidate from 1..10
            // foreach($data['candidates'] as $candidate){
                
            // }
        }
        \Cache::flush();

    }

    public function storeCandidateData($data){
        //\Log::info($data);

        foreach($data['candidates'] as $candidate){
            //\Log::info($candidate);

            $collection = collect($candidate);
            $collection->put('state_name', $data['state_name']);
            $collection->put('sheet_name', $data['sheet_name']);
            $collection->put('region_name', $data['region_name']);
            
            $rc = $data['region_code'];
            if( $data['sheet_name'] == "TERENGGANU P.36" ){
                $regionCode = 'P' . sprintf("%03d", $rc );
            } else {
                $regionCode = 'N' . sprintf("%02d", $rc );
            }

            $collection->put('region_code', $regionCode);

            // state id
            $state = \App\Models\State::query()
                ->where('name','=',$collection['state_name'])
                ->first();
            $collection->put('state_id', $state ? $state->id : null );

            // prn region id
            $region = \App\Models\PrnRegion::query()
                ->where('state_name','=',$collection['state_name'])
                ->where('code','=',$collection['region_code'])
                ->first();
            $collection->put('prn_region_id', $region? $region->id : null );
            
            // get PrnNomination->id
            $prnNomination = \App\Models\PrnNomination::query()
                ->where('state_name','=',$collection['state_name'])
                ->where('region_code','=',$collection['region_code'])
                ->where('candidate_entry','=', $collection['candidate_entry'])
                ->first();
            $collection->put('prn_nomination_id', $prnNomination? $prnNomination->id : null );

            // get Party->id
            $party = \App\Models\PrnParty::query()
                ->where('title','=',$collection['party_name'])
                ->first();
            $collection->put('prn_party_id', $party ? $party->id : null);

            // get Coalition->id
            $coalition = \App\Models\PrnCoalition::query()
                ->where('title','=',$collection['party_coalition'])
                ->first();
            $collection->put('prn_coalition_id', $coalition ?  $coalition->id  : null);

            //\Log::info($collection->all());
             //\Log::info($candidate);

             if( 
                    // conditions before insert
                    $collection['candidate_name'] != null &&
                    $collection['party_coalition'] != null && 
                    $collection['party_name'] != null &&
                    $collection['official_count'] != null

                ) {
                    \App\Models\PrnNominationResult::updateOrCreate(
                        [
                            'state_name'=> $collection['state_name'],
                            'region_code'=> $collection['region_code'],
                            'candidate_entry' => $collection['candidate_entry'],
                        ], // condition
                        
                        // candidate data
                        $collection->all()
                    );
                }
            
        }
    }

    /**
     * Store data into PrnRegionDetail
     * 
     */
    public function storePrnRegionDetail($stateName, $data){

        // \Log::info($stateName);
        // \Log::info($data);
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

            // verifier 1
            $verifier1 = false;
            if(isset($region['verifier1'])){
                if($region['verifier1'] == "VERIFIED") $verifier1 = true;
            } 

            // verifier 2
            $verifier2 = false;
            if(isset($region['verifier2'])){
                if($region['verifier2'] == "VERIFIED") $verifier2 = true;
            } 

            // verifier 1
            $chief_verifier = false;
            if(isset($region['chief_verifier'])){
                if($region['chief_verifier'] == "VERIFIED") $chief_verifier = true;
            } 


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
                    'registered_voters'=> is_int($region['registered_voters']) ? $region['registered_voters'] : 0 , 
                    'votes'=> $region['votes'],   
                    'percentage' => $region['percentage'],
                    'majority' => $region['majority'],
                    'verifier1' => $verifier1,
                    'verifier2' => $verifier2,
                    'chief_verifier' => $chief_verifier,
                ]
             );
        }

    }

    /**
     * Store data into PrnNominationResult
     * 
     */
    // public function storePrnNominationResult($stateName, $data){

    //     // get PrnNomination->id
    //     $s = \App\Models\State::query()
    //     ->where('name','=',$stateName)
    //     ->first();

    //     $candidates = [];
    //     foreach($data as $key => $region){
    //         $candidates[$key] = $region['candidates'][0];
            
    //         // conver 1 to N01
    //         $regionCode = 'N' . sprintf("%02d",  $region['region_code'] ); 

    //         // get PrnRegion->id
    //         $r = \App\Models\PrnRegion::query()
    //                 ->where('state_name','=',$stateName)
    //                 ->where('code','=',$regionCode)
    //                 ->first();



    //         //\Log::info($region);

    //         // insert into PrnNominationResult
    //         foreach($region['candidates'] as $key => $candidate){

    //             \Log::info($candidate);

    //             // get PrnNomination->id
    //             $c = \App\Models\PrnNomination::query()
    //                 ->where('state_name','=',$stateName)
    //                 ->where('region_code','=',$regionCode)
    //                 ->where('candidate_entry','=', $candidate[0])
    //                 ->first();

    //             // get Party->id
    //             $p = \App\Models\PrnParty::query()
    //                 ->where('title','=',$candidate[4])
    //                 ->first();

    //              // get Coalition->id
    //             $g = \App\Models\PrnCoalition::query()
    //                 ->where('title','=',$candidate[3])
    //                 ->first();

    //             //\Log::info($candidate);
    //             \App\Models\PrnNominationResult::updateOrCreate(

    //                 [
    //                     'state_name'=> $stateName,
    //                     'region_code'=> $regionCode,
    //                     'candidate_entry' => $candidate[0],
                    
    //                 ], // condition
                    
    //                 // $region
    //                 [
    //                     'prn_region_id' => $r ? $r->id : null ,
    //                     'prn_nomination_id' => $c ? $c->id : null ,
    //                     'prn_party_id' => $p ? $p->id : null ,
    //                     'prn_coalition_id' => $g ? $g->id : null ,
    //                     'state_id' => $s ? $s->id : null ,


    //                     'state_name'=> $stateName,
    //                     'region_code'=> $regionCode,
    //                     'region_name'=> $region['region_name'], 
    //                     'sheet_name'=> $region['sheet_name'], 
                        
    //                     'candidate_entry' => $candidate[0],
    //                     'candidate_name' => $candidate[1],
    //                     'party_coalition' => $candidate[3],
    //                     'party_name' => $candidate[4],

    //                     'official_count' =>  $candidate[5],
    //                     'unofficial_count' =>  $candidate[6],
                        
    //                 ]
    //              );
    //         } 
    //     }
    // }

    /**
     * Store triggered data 
     */

     public function storeTriggeredData(Request $request){
        //\Log::info($request);
       

        // make collection for candidates
        $collection = collect($request['data']);
        
        // store candidate result
        $this->storeCandidate($request,$collection);

        // store region result
        $this->storeDetail($request,$collection);

        // purge cache
        \Cache::flush();
     }

     /**
      * verify data before continue
      */
     function verify($request){
        //\Log::info($request);
        $status = $request['data'][11][4];
        $last_updated = $request['data'][15][5];
        $verifier1 = $request['data'][18][5];
        $verifier2 = $request['data'][19][5];
        $chief_verifier = $request['data'][20][5];
        //\Log::info($last_updated);

        //\Log::info('masuk');
        // Check if the status is 'VERIFIED'
        if ($status !== 'MENDAHULUI' && $status !== 'TIDAK RASMI' && $status !== 'RASMI'  ) {
            // If status is not 'VERIFIED', exit the function
            // \Log::info('tak lepas status');
            // \Log::info($status);
            return;
        }
    
        // get verifier 1
        // VERIFIED | null
        //$verifier1 = $request['data'][18][5];
        if ($status === 'MENDAHULUI') {
            // check if verifier1 == verified
            if($verifier1 !== 'VERIFIED') return;
        }

        // get verifier 2
        // VERIFIED | null
        // $verifier2 = $request['data'][19][5];
        if ($status === 'TIDAK RASMI') {
            // check if verifier1 == verified
            if($verifier1 !== 'VERIFIED') return;
            //if($verifier2 !== 'VERIFIED') return;
        }
        
        // get ketua verifier
         // VERIFIED | null
        //$chief_verifier = $request['data'][20][5];
        if ($status === 'RASMI') {
            // check if verifier1 == verified
            if($verifier1 !== 'VERIFIED') return;
            if($verifier2 !== 'VERIFIED') return;
            if($chief_verifier !== 'VERIFIED') return;
        }

        $data = [
            'status' => $status ? $status : null,
            'last_updated' => $last_updated ? $last_updated : null,
            'verifier1' => $verifier1 ? $verifier1 : null,
            'verifier2' => $verifier2 ? $verifier2 : null,
            'chief_verifier' => $chief_verifier ? $chief_verifier : null,
        ];

        return $data;
     }

     function storeCandidate($request, $collection){
        
        //\Log::info($request['data']);

        // get status array(11)
        // MENDAHULUI | TIDAK RASMI | RASMI
        // $status = $request['data'][11][4];
        // $verifier1 = $request['data'][18][5];
        // $verifier2 = $request['data'][19][5];
        // $chief_verifier = $request['data'][20][5];

        // //\Log::info('masuk');
        // // Check if the status is 'VERIFIED'
        // if ($status !== 'MENDAHULUI' && $status !== 'TIDAK RASMI' && $status !== 'RASMI'  ) {
        //     // If status is not 'VERIFIED', exit the function
        //     // \Log::info('tak lepas status');
        //     // \Log::info($status);
        //     return;
        // }
    
        // // get verifier 1
        // // VERIFIED | null
        // //$verifier1 = $request['data'][18][5];
        // if ($status === 'MENDAHULUI') {
        //     // check if verifier1 == verified
        //     if($verifier1 !== 'VERIFIED') return;
        // }

        // // get verifier 2
        // // VERIFIED | null
        // // $verifier2 = $request['data'][19][5];
        // if ($status === 'TIDAK RASMI') {
        //     // check if verifier1 == verified
        //     if($verifier1 !== 'VERIFIED') return;
        //     //if($verifier2 !== 'VERIFIED') return;
        // }
        
        // // get ketua verifier
        //  // VERIFIED | null
        // //$chief_verifier = $request['data'][20][5];
        // if ($status === 'RASMI') {
        //     // check if verifier1 == verified
        //     if($verifier1 !== 'VERIFIED') return;
        //     if($verifier2 !== 'VERIFIED') return;
        //     if($chief_verifier !== 'VERIFIED') return;
        // }

        //\Log::info('lepas');

        $verify = $this->verify($request);

        // Create a new array from key 1 to key 10
        $candidates = $collection->slice(1, 10)->all();
        unset($collection);
        foreach($candidates as $candidate){
            //$candidate_entry = $c[0];
            
           
            // Define your new keys as an array
            $newKeys = [
                'candidate_entry',  // New key for index 0
                'candidate_name',  // New key for index 1
                3,  // New key for index 2
                'party_coalition',  // New key for index 3
                'party_name',  // New key for index 4
                'official_count',  // New key for index 5
                'unofficial_count',  // New key for index 6
            ];

            // Convert the original array to a Laravel collection
            $newCollection = collect($candidate);
            
            //\Log::info($newCollection->all());

            $updatedArray = $newCollection->mapWithKeys(function ($value, $key) use ($newKeys) {
                return [$newKeys[$key] => $value];
            });
                
            // $collection = collect($candidate);

            // $c = $collection
            //         ->combine($newKeys)
            //         ->flip()
            //         ->reject(function ($value) {
            //             return is_null($value) || $value === '';
            //         })
            //         ->all();

            $c = collect($updatedArray);
            $c->put('state_name', $request['state_name']);  
            $c->put('sheet_name', $request['sheet_name']);     
              
            $rc = $request['data'][0][0];
            // $regionCode = 'N' . sprintf("%02d", $rc );
            // special case TERENGGANU P36
            if( $request['sheet_name'] == "TERENGGANU P.36" ){
                $regionCode = 'P' . sprintf("%03d", $rc );
            } else {
                $regionCode = 'N' . sprintf("%02d", $rc );
            }
            $c->put('region_code', $regionCode);

            $rn = $request['data'][0][1];
            $c->put('region_name', $rn);


            // get PrnNomination->id
            if ($c->has('candidate_entry')) {
                $nomination = \App\Models\PrnNomination::query()
                    ->where('state_name','=',$request['state_name'])
                    ->where('region_code','=',$regionCode)
                    ->where('candidate_entry','=', $c['candidate_entry'])
                    ->first();
                if($nomination){
                    $nomination->candidate_vote = $c['official_count']; // save on PrnNomination vote
                    $nomination->save();
                    \Cache::flush();
                    $c->put('prn_nomination_id', $nomination->id);
                }
            }

            // get Party->id
            if ($c->has('party_name')) {
                $party = \App\Models\PrnParty::query()
                    ->where('title','=', $c['party_name'])
                    ->first();
                if($party ) $c->put('prn_party_id', $party->id);
            }

            if ($c->has('party_coalition')) {
                // get Coalition->id
                $coalition = \App\Models\PrnCoalition::query()
                    ->where('title','=', $c['party_coalition'])
                    ->first();
                if($coalition) $c->put('prn_coalition_id', $coalition->id);
            }

            if ($c->has('state_name')) {
                // get state id
                $state = \App\Models\State::query()
                    ->where('name','=', $request['state_name'])
                    ->first();
                if($state) $c->put('state_id', $state->id);
            }

            // additional fields
            $c->put('status', $verify ? $verify['status'] : null  );
            $c->put('verifier1', $verify ?  $verify['verifier1'] : null );
            $c->put('verifier2', $verify ?  $verify['verifier2'] : null );
            $c->put('chief_verifier', $verify ?  $verify['chief_verifier'] : null );

            //\Log::info($c->all()); // is ready for insert

            // Assuming $c is your existing collection and $request is your request data
            if (
                $c->has('candidate_entry')
                && isset($request['state_name'])
                && isset($regionCode)
            ) {
                $result = \App\Models\PrnNominationResult::updateOrCreate(
                    [
                        'state_name' => $request['state_name'],
                        'region_code' => $regionCode,
                        'candidate_entry' => $c['candidate_entry'],
                    ],
                    $c->all()
                );

            if(!is_null($c['candidate_name'])){
      
                // log the result into another table
                $log = new \App\Models\PrnNominationResultLog();
                $log->prn_nomination_id = $c['prn_nomination_id'];
                $log->candidate_name = $c['candidate_name'];
                $log->party_coalition = $c['party_coalition'];
                $log->status = $c['status'];
                $log->party_name = $c['party_name'];
                $log->official_count = $c['official_count'];
                //$log->last_updated = $verify['last_updated'] ?  $verify['last_updated'] : null;
                $log->last_updated = isset($verify['last_updated']) ? $verify['last_updated'] : null;

                $log->save();
            }

                //\Log::info($c->all());
                // Add your code here to handle the result (optional)
            } else {
                // Handle the case when any of the required conditions is missing
            }

        }

     }

     /**
      * To store row data for RegionDetail
      */
     function storeDetail($request, $collection){

        //\Log::info($request);
        $verify = $this->verify($request);
     
        // Slice the original collection
        $slicedCollection = collect($collection)->slice(12, 9);

        // Remove specified keys from the sub-arrays
        $keysToRemove = [1, 2, 3, 4, 6];
        $filteredCollection = $slicedCollection->map(function ($subArray) use ($keysToRemove) {
            return collect($subArray)->forget($keysToRemove)->all();
        });

        // Remove specified keys from the collection itself
        $filteredCollection = $filteredCollection->forget([15, 17]);

        // Flatten the resulting collection
        $flattenedArray = $filteredCollection->flatten(1);
        //\Log::info($flattenedArray->all());

        // remove unwanted key
        $cleanArray = $flattenedArray->forget([0,2,4,6,8,10,12])->values();
        //\Log::info($cleanArray->all());
        // // Output the result


        $newKeys = [
            'registered_voters',  // New key for index 0
            'votes',  // New key for index 1
            'percentage',  // New key for index 2
            'majority',  // New key for index 3
            'verifier1',  // New key for index 4
            'verifier2',  // New key for index 5
            'chief_verifier',  // New key for index 6
        ];

        // Create a new collection with the updated keys
        $updatedArray = $cleanArray->mapWithKeys(function ($value, $key) use ($newKeys) {
            return [$newKeys[$key] => $value];
        });

        //\Log::info($updatedArray->all());

        $data = collect($updatedArray);
        // state_name
        if($request->has('state_name')) $data->put('state_name', $request['state_name']);  
        
        // sheet_name
        if($request->has('sheet_name')) $data->put('sheet_name', $request['sheet_name']);     

        // region_code
        if (isset($request['data'][0][0])) {
            $rc = $request['data'][0][0];
            //$regionCode = 'N' . sprintf("%02d", $rc );
            
            // special case TERENGGANU P36
            if( $request['sheet_name'] == "TERENGGANU P.36" ){
                $regionCode = 'P' . sprintf("%03d", $rc );
            } else {
                $regionCode = 'N' . sprintf("%02d", $rc );
            }

            $data->put('region_code', $regionCode);
        }

        // region_name
        if (isset($request['data'][0][1])) {
            $rn = $request['data'][0][1];
            $data->put('region_name', $rn);
        }

        // prn_region_id
        if (isset($request['state_name']) && isset($regionCode)) {
            $r = \App\Models\PrnRegion::query()
                ->where('state_name','=', $request['state_name'])
                ->where('code','=',$regionCode)
                ->first();
            if($r) $data->put('prn_region_id', $r->id);    
        }

        // verifier 1
        if ($data['verifier1'] == "VERIFIED") {
            $data->put('verifier1', true); 
        } else {  
            $data->put('verifier1', false); 
        }

        // verifier 2
        if ($data['verifier2'] == "VERIFIED") {
            $data->put('verifier2', true); 
        } else {  
            $data->put('verifier2', false); 
        }

        // chief_verifier
        if ($data['chief_verifier'] == "VERIFIED") {
            $data->put('chief_verifier', true); 
        } else {  
            $data->put('chief_verifier', false); 
        }

        // statusCollection
        $statusCollection = collect($collection)->slice(11,1)->flatten(1)->forget([0,3])->values(); // array #11 and only 1 item
        //\Log::info($statusCollection->all());
        /**
         * 0 - candidate_name
         * 1 - party_coalition
         * 2 - status | MENDAHULUI || TIDAK RASMI
         * 3 - votes
         * 4 - updated
         */
        $data->put('candidate_name',  $statusCollection ?  $statusCollection[0] : null );
        $data->put('candidate_coalition',  $statusCollection ?  $statusCollection[1] : null );
        $data->put('status',  $statusCollection ?  $statusCollection[2] : null );
        $data->put('candidate_votes',  $statusCollection ?  $statusCollection[3] : null );
       
        // timestamp from GSheet
        $timestampCollection = collect($collection)->slice(15,1)->flatten(1)->forget([1,2,3,4,6])->values(); // array #11 and only 1 item
        //\Log::info($timestampCollection->all());
        $data->put('last_updated', $timestampCollection ? $timestampCollection[1] : null );
       

        //Assuming $data is your existing collection and $request is your request data
        if (
            $request->has('state_name')
            && isset($regionCode)
        ) {
            $result = \App\Models\PrnRegionDetail::updateOrCreate(
                [
                    'state_name' => $request['state_name'],
                    'region_code' => $regionCode,
                ],
                $data->all() // update existing data or create new one
            );

            // log the result into another table
            $log = new \App\Models\PrnLog();
            $log->prn_region_detail_id = $result->id;
            $log->candidate_name = $data['candidate_name'];
            $log->candidate_coalition = $data['candidate_coalition'];
            $log->status = $data['status'];
            $log->candidate_votes =  $data['candidate_votes'];
            $log->last_updated =  $data['last_updated'];
            $log->majority =  $data['majority'];
            $log->save();
    
            //\Log::info($request);
            //\Log::info($data->all());

        } else {
            // Handle the case when any of the required conditions is missing
        }

 
     }


     /**
      * To store data by sheet
      */
      function storeBySheet(Request $request){
        \Log::info($request);
      }
}
