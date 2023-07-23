<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
            'prn_regions_nominated' =>  $prn_regions_nominated,
            'parties' => $prn_parties
        ];

        // return as JSON
        return \Response::json([
            'message' => 'success',
            'data' => $data
        ],200);
    }
}
