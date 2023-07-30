<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\PrnNomination;
use Illuminate\Support\Facades\DB;

class CleanData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'prn:cleandata';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'To clean data in prn_nominations';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->cleanData();
        return Command::SUCCESS;
    }

    public function cleanData(){
        // $columnToCheckForDuplicates = 'candidate_name';
        // $duplicates = PrnNomination::select($columnToCheckForDuplicates, DB::raw('COUNT(*) as count'))
        // ->groupBy($columnToCheckForDuplicates)
        // ->having('count', '>', 1)
        // ->get();   

        // foreach ($duplicates as $duplicate) {
        //     $name = $duplicate->candidate_name;
        //     $count = $duplicate->count;
        //     // Process the duplicate entry as needed
        //     // For example, you might print them or delete them
        //     echo "Duplicate entry found for name '$name' ($count times).";
        //     echo "\n";
        // }
        $check = PrnNomination::where('candidate_name', '=', 'HASHIM BIN ISMAIL')->first();

        if ($check) {
            $id = $check->id;
            dd($id);
        } else {
            dd('No record found.'); // Optional: Add a message when no record is found.
        }
    }
}
