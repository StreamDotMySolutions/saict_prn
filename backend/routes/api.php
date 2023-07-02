<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// auth
require __DIR__.'/auth.php';

// profile
require __DIR__.'/profile.php';

// users
require __DIR__.'/users.php';

Route::get('/json', function () {
    return 'You can post data';
 })->middleware(['responseInJson']);

