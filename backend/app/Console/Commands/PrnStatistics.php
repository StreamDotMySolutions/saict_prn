<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class PrnStatistics extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'prn:statistics';

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
        $this->getRegionCount();
        return Command::SUCCESS;
    }

    public function getRegionCount(){

        \App\Models\State::query()
                        ->withCount('prn_regions')
                        ->get()
                        ->map( function ($state) {
                            print($state);
                            print("\n");
                        });
    }
}
