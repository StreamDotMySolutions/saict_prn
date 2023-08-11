<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class PrnClearData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'prn:cleardata';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clear Pengundian Data';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->clearData();
        return Command::SUCCESS;
    }

    function clearData(){
 
        \App\Models\PrnNominationResult::truncate();
        \App\Models\PrnNominationResultLog::truncate();
        \App\Models\PrnRegionDetail::query()
                    ->update([
                            'status' => null,
                            'votes'  => null,
                            'last_updated' => null,
                            'majority' => null,
                            'percentage' => null,
                            'verifier1' => FALSE,
                            'verifier2' => FALSE,
                            'chief_verifier' => FALSE,
                    ]);
        \App\Models\PrnNomination::query()
                    ->update([
                            'candidate_vote' => null,
                    ]);
        echo "Table for pengundian cleared ! \n";
        
    }
}
