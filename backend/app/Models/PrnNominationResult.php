<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrnNominationResult extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function prn_nomination(){
        return $this->belongsTo(PrnNomination::class);
    }
}
