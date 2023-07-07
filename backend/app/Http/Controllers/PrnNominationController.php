<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PrnNomination;

class PrnNominationController extends Controller
{
    public function store(Request $request)
    {
        // store data to DB
        \Log::info($request);
    }
}
