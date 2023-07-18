<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class PopulateState extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'populate:state';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Populate state from PrnRegion';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        //$this->partyContestInState('KEDAH','UMNO');
        $this->getStatesFromPrnRegionModel();
        $this->updateStateIdInPrnRegionModel();
        return Command::SUCCESS;
    }

    /**
     * To get statename from prn_regions
     */
    public function getStatesFromPrnRegionModel()
    {
        
        \App\Models\PrnRegion::query()
        ->select('state_name')
        ->distinct()
        ->get()
        ->map( function ($item){
            // insert statename to State
            \App\Models\State::UpdateOrCreate(
                ['name' => $item->state_name ], // condition
                ['name' => $item->state_name] // data
            );

        });
    }

    /**
     * To update state_id on PrnNomination
     */
    public function updateStateIdInPrnRegionModel()
    {
        return \App\Models\PrnRegion::query()
        ->select('id','state_name')
        ->get()
        ->map( function($region){
            //echo $region->state_name;
            $r = \App\Models\PrnRegion::find($region->id);
            $r->state_id = $this->getStateIdFromStateModel($region->state_name);
            $r->save();
        });
    }

    /**
     * Return state_id by given name
     */
    public function getStateIdFromStateModel($name){
        $state = \App\Models\State::query()
                    ->select('id')
                    ->where(['name' => $name])
                    ->first();

        if ($state) {
            return $state->id;
        }
    
        return null;
    }

    public function tree()
    {
        \App\Models\State::query()

        ->with('prn_regions.prn_nominations.prn_party:id,title')
        ->get()
        ->map( function($state){
            //echo "|__";
            echo "\n";
            echo "\n";
            echo $state->name;
            echo " ( " . $state->prn_regions->count() . " kawasan )";
            echo "\n";

            $state->prn_regions
            ->map( function($region){
                echo "|__";
                echo $region->name;
                echo "\n";
                $region->prn_nominations
                ->map( function($nomination){
                    echo "|   |__";
                    echo $nomination->candidate_name;
                    
                    if($nomination->prn_party_id){
                        echo " (";
                        echo  $nomination->prn_party->title;// party name
                        echo ") ";
                    }
                    echo "\n";
                });
                echo "|\n";
            });
            echo "\n";
        });
    }

    public function partyContestInState($stateName,$partyName){
        $p = \App\Models\PrnNomination::query()
        ->select('prn_party_id','candidate_name','id')
        ->where('prn_party_id','!=', null)
        ->where('candidate_name','!=', null)
        ->whereHas('prn_region.state', function ($query) use ($stateName){
            return $query->where('name', '=', $stateName);
        })
        ->whereHas('prn_party', function ($query) use ($partyName){
            return $query->where('title', '=', $partyName);
        })
        ->count();
        echo $p;
    //     ->get()
    //     ->map( function($PN){
    //         echo $PN->id;
    //         echo "|";
    //         echo $PN->candidate_name;
    //         echo "|";
    //         echo $PN->prn_party->title;
    //         echo "\n";
    //     });

    //     echo "Jumlah Calon mewakili parti $partyName di negeri $stateName - " . $p->count();
    //     echo "\n";    
     }
}