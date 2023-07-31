<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SyncPartyAndCoalition extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'prn:sync';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->cleanData();
        $this->syncParty();
        $this->syncCoalition();
        $this->syncRegion();
        return Command::SUCCESS;
    }

    public function cleanData(){
        \App\Models\PrnNomination::query()
                                    ->whereNull('candidate_name')
                                    ->delete();

        // \App\Models\PrnNomination::query()
        //                             ->whereNull('region_code')
        //                             ->delete();
    }

    public function syncRegion(){
        \App\Models\PrnNomination::query()
                                    ->select('id','region_name')    
                                    ->whereNotNull('candidate_entry')
                                    ->whereNotNull('candidate_name')
                                    ->whereNotNull('party_name')
                                    ->whereNotNull('party_coalition')
                                    ->whereNotNull('party_coalition')
                                    ->whereNotNull('region_name')
                                    ->get()
                                    ->map( function($c){
                                        $r = \App\Models\PrnRegion::query()->where('state_name','=',$c->state_name)->where('name','=',$c->region_name)->first();
                                        if($r) {
                                            $c->prn_region_id = $r->id;
                                            $c->save();
                                        }
                                    });
    }   

    public function syncParty(){
        \App\Models\PrnNomination::query()
                                    ->select('id','party_name')    
                                    ->whereNotNull('candidate_entry')
                                    ->whereNotNull('candidate_name')
                                    ->whereNotNull('party_name')
                                    ->whereNotNull('party_coalition')
                                    ->get()
                                    ->map( function($c){
                                        $p = \App\Models\PrnParty::query()->where('title','=',$c->party_name)->first();
                                        if($p) {
                                            $c->prn_party_id = $p->id;
                                            $c->save();
                                        }
                                    });
    }

    public function syncCoalition(){
        \App\Models\PrnNomination::query()
                                    ->select('id','party_coalition')    
                                    ->whereNotNull('candidate_entry')
                                    ->whereNotNull('candidate_name')
                                    ->whereNotNull('party_name')
                                    ->whereNotNull('party_coalition')
                                    ->get()
                                    ->map( function($c){
                                        $p = \App\Models\PrnCoalition::query()->where('title','=',$c->party_coalition)->first();
                                        if($p) {
                                            $c->prn_coalition_id = $p->id;
                                            $c->save();
                                        }
                                    });
    }
}
