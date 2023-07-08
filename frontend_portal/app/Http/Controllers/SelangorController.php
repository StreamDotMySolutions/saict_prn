<?php

namespace App\Http\Controllers;

use App\Models\Seat;
use Illuminate\Http\Request;

class SelangorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->query('search');

        $seats = Seat::where('state_id',5)
            ->when($search, function ($query) use ($search)
            {
                $query->where(function ($query) use ($search){
                    $query->where('code', 'like', '%' .$search.'%')
                        ->orWhere('name', 'like', '%' .$search.'%');
                });
            })
            ->paginate(10);
        
        return view('selangor.index')->with('seats',$seats);
    }

    public function index2()
    {
        $seats = Seat::where('state_id', 5)->get();
        return view('selangor.index2')->with('seats', $seats);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}