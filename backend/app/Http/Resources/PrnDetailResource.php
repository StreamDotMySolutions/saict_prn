<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PrnDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
       return parent::toArray($request);
        // return [
        //     'id' => $this->id,

        //     'registered_voters' => $this->registered_voters,
        //     'votes' => $this->votes,
        //     'percentage' => $this->percentage,
        //     'majority' => $this->majority,

        //     'when' => $this->updated_at->diffForHumans(),
        // ];
    }
}
