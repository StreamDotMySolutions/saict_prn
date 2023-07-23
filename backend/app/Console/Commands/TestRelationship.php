<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class TestRelationship extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:relationship';

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
        $this->getTotalPartiesInState();
        return Command::SUCCESS;
    }

    public function getTotalPartiesInState()
    {
        echo "Hello \n";
        $candidates = \App\Models\State::withCount('prn_regions')->get();

        // $states = \App\Models\State::query()
        //             //->select('name')
        //             ->with(
        //                 ['prn_regions' => function($query){
        //                                         $query->withCount('prn_nominations');
        //                                     }
        //                 ]
        //             )
        //             ->get()
        //             ->toJson();

        // $kedah = \App\Models\State::find(1);
        // $count = $kedah->with(
        //     ['prn_regions' => function($query){
        //         $query->withCount('prn_nominations');
        //     }])
        //     ->get();

        $count = \App\Models\PrnNomination::query()
            ->where('candidate_name','!=', null)
            ->get()
            ->count();

        \Log::info($count);
    }
}
