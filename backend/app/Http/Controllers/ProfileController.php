<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{

    /**
     * Handle an incoming authentication request.
     */
    public function store(Request $request): Response
    {
        return response()->json([
            'message' => 'Updating profile',
            'id' => Auth::user()->id,
            'name' => Auth::user()->name,
            'email' => Auth::user()->email,
        ],200);

    }
   
}
