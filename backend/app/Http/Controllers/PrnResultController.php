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
            \Log::info($data);
        }

        
    }
}
