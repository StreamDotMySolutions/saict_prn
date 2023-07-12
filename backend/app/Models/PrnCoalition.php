<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrnCoalition extends Model
{
    use HasFactory;
    private $useTable = 'prn_coalitions';
    protected $guarded = ['id'];
}

