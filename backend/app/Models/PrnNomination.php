<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrnNomination extends Model
{
    use HasFactory;
    private $useTable = 'prn_nominations';
    protected $guarded = ['id'];

    public function prn_coalition(){
        return $this->belongsTo(PrnCoalition::class);
    }

    public function prn_party(){
        return $this->belongsTo(PrnParty::class);
    }

    public function prn_region(){
        return $this->belongsTo(PrnRegion::class);
    }

    public function prn_nomination_result(){
        return $this->hasOne(PrnNominationResult::class);
    }
}
