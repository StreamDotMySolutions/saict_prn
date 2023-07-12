<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrnParty extends Model
{
    use HasFactory;
    private $useTable = 'prn_parties';
    protected $guarded = ['id'];
}
