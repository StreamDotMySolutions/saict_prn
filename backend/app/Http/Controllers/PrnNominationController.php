<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PrnNomination;

class PrnNominationController extends Controller
{
    public function store(Request $request)
    {
        // let see the data structure
        \Log::info($request);

        // $request->data need to loop using foreach
    }
}
