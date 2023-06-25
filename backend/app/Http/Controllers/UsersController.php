<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Models\User;
use App\Http\Resources\UsersResource;

class UsersController extends Controller
{
    public function index()
    {
        $users = User::paginate();
        return UsersResource::collection($users);
    }
}
