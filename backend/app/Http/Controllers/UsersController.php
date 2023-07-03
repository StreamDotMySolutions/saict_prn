<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UsersResource;

class UsersController extends Controller
{
    public function index(Request $request)
    {
        // to detect if sort is active
        if($request->filled('field')){
            $field = $request->query('field');
            $direction = $request->query('direction');
            $users = User::orderBy($field, $direction)->paginate()->withQueryString();
        } else {
            $users = User::paginate();
        }
        
        return UsersResource::collection($users);
    }

    public function all()
    {
        $users = User::all();
        return UsersResource::collection($users);
    }
}
