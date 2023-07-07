<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrnNomination extends Model
{
    use HasFactory;
    private $useTable = 'prn_nominations';
    protected $guarded = ['id'];
}
