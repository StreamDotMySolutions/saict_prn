<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

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
        $this->cleanDuplicateData();
        $this->cleanNullData();
        $this->syncParty();
        $this->syncCoalition();
        $this->syncRegion();
        return Command::SUCCESS;
    }

    public function cleanNullData(){
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

    public function cleanDuplicateData(){
        $columnToCheckForDuplicates = 'candidate_name';
        $duplicates = \App\Models\PrnNomination::select($columnToCheckForDuplicates, DB::raw('COUNT(*) as count'))
        ->groupBy($columnToCheckForDuplicates)
        ->having('count', '>', 1)
        //->where('candidate_name', '!=', "")
        ->get();   

        foreach ($duplicates as $duplicate) {
            $name = $duplicate->candidate_name;
            $count = $duplicate->count;
            // Process the duplicate entry as needed
            // For example, you might print them or delete them
            echo "Duplicate entry found for name '$name' ($count times).";
            echo "\n";

            $check = \App\Models\PrnNomination::query()
                                ->where('candidate_name', '=', $duplicate->candidate_name)
                                ->where('candidate_name', '!=', "")
                                ->orderBy('id','DESC')
                                ->skip(1)
                                ->first();
            if ($check) {
                $id = $check->id;
                $check->delete();
                //dd($id);
            } else {
                //dd('No record found.'); // Optional: Add a message when no record is found.
            }
        }
    }
}
