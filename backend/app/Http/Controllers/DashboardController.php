<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\PrnCandidateResource;
use Illuminate\Support\Str;

class DashboardController extends Controller
{
    /**
     * To show participating party
     * in Dashboard route
     * cache key -
     *  dashboard_prn_nominations
     *  dashboard_prn_nominations
     *  dashboard_prn_nominations
     *  dashboard_prn_nominations
     * 
     * @return JSON
     */
    public function getParties()
    {

        // \Cache::forget('dashboard_prn_nominations');
        // \Cache::forget('dashboard_prn_parties');
        // \Cache::forget('dashboard_prn_regions');
        // \Cache::forget('dashboard_prn_regions_nominated');
        

        $prn_nominations = \Cache::rememberForever('dashboard_prn_nominations', function () {
        // get total prn nominations
            return \App\Models\PrnNomination::query()
            ->where('candidate_name','!=', null)
            ->get()
            ->count();
        });

        // get total parties
        $prn_parties = \Cache::rememberForever('dashboard_prn_parties', function () {
            return \App\Models\PrnParty::query()
                                ->select('title')
                                ->withCount('prn_nominations')
                                ->having('prn_nominations_count', '>', 0)
                                ->get();
        });

        // get total regions
        $prn_regions = \Cache::rememberForever('dashboard_prn_regions', function () {
            return \App\Models\PrnRegion::count();
        });

        // regions with nominations
        $prn_regions_nominated = \Cache::rememberForever('dashboard_prn_regions_nominated', function () {
            return \App\Models\PrnRegion::query()
                                ->withCount('prn_nominations')
                                ->having('prn_nominations_count', '>', 0)
                                ->count();
        });
                                

        // massage the data
        $data = [
            'total_nominations' => $prn_nominations ? $prn_nominations : 0,
            'total_regions' => $prn_regions ? $prn_regions : 0,
            'prn_regions_nominated' => $prn_regions_nominated,
            'parties' => $prn_parties
        ];

        // return as JSON
        return \Response::json([
            'message' => 'success',
            'data' => $data
        ],200);
    }


    /**
     * Dashboard Data by State Level
     * 
     * @return JSON
     * /api/
     */
    public function getDashboardData($stateName){
        // get stateName
        //\Log::info($stateName);

        // un slug stateName
        $stateName = \Str::headline($stateName);
        $stateName = \Str::upper($stateName);
        //\Log::info($stateName);

        // get latest updated candidate
        //\Cache::flush();
        $candidates = \Cache::rememberForever('dashboard_candidates_' . $stateName, function () use ($stateName) {
            // get total prn nominations
   
            return \App\Models\PrnNomination::query()
                    // ->with( [ 'prn_region' => function($query) {
                    //     $query->select('name');
                    // }
 

                    // ]) 
                    //->with('prn_region')
                    ->orderBy('updated_at', 'DESC')
                    //->select('state_name','region_name','region_code','candidate_entry','candidate_title','candidate_name','updated_at')
                    ->where('candidate_name','!=', null)
                    ->where('party_name','!=', null)
                 
                    ->whereHas('prn_region.state', function ($query) use ($stateName){
                        return $query->where('name', '=', $stateName);
                    })
                    ->limit(25)
                    ->get();
        });
        //\Log::info($candidates);

        // massage the data
        $data = [
            'candidates' =>  PrnCandidateResource::collection($candidates),
            //'candidates' =>  $candidates,
        ];

        // return as JSON
        return \Response::json([
            'message' => 'success',
            'data' => $data
        ],200);
    }

    function getStates(){
        //\Cache::flush();
        $states = \Cache::rememberForever('dashboard_states', function () {
          
            return \App\Models\State::query()
                ->get()
                ->map(function ($state) {
                    // Add a new "slug" field to the state object using Str::slug method
                    $state->slug = Str::slug($state->name);
                    return $state;
                });
            
        });

        // return as JSON
        return \Response::json([
            'message' => 'success',
            'states' => $states
        ],200);
        
    }

    function getStateDetails($stateName){

    }
}
