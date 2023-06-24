<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UsersController extends Controller
{
    public function index()
    {

        $users = User::paginate();
       
        // user paginations
        return Response::json([
            'message' => 'Users Index',
            'users' => $users,
        ],200);
    }
}
