<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PrnNomination;

class PrnNominationController extends Controller
{
    public function storeCandidateData(Request $request)
    {        
        $data = $request->data;

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
            ]
         );
    }
}
