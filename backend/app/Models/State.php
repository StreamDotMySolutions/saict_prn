<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    /**
     * Get all of the regions for that state
     */
    public function prn_regions()
    {
        return $this->hasMany(PrnRegion::class);
    }

    /**
     * Get all of the prn_nominations for the state.
     */
    public function prn_nominations()
    {
        return $this->hasManyThrough(PrnRegion::class, PrnNomination::class);
    }

}
