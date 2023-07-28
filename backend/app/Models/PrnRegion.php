<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrnRegion extends Model
{
    use HasFactory;
    private $useTable = 'prn_regions';
    protected $guarded = ['id'];

    public function prn_nominations()
    {
        return $this->hasMany(PrnNomination::class)->where('candidate_name','!=', null)->where('party_name','!=', null);
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }

}
