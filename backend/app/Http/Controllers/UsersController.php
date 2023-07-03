<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UsersResource;

class UsersController extends Controller
{
    public function index()
    {
        //$users = User::orderBy('name', 'asc')->paginate();
        $users = User::paginate();
        return UsersResource::collection($users);
    }

    public function all()
    {
        $users = User::all();
        return UsersResource::collection($users);
        //dd(opcache_get_status()['jit']);
    }
}
