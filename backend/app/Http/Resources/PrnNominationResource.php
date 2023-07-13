<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class PrnNominationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            'id' => $this->id,          
            'candidate_name' => $this->candidate_name,  
            'state_name' => $this->state_name, 
            'region_code' => $this->region_code,
            'region_name' => $this->region_name,
            'gsheet_email' => $this->gsheet_email,
            'when' => $this->updated_at->diffForHumans(),

        ];
    }
}
