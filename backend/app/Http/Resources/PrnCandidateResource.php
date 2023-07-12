<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class PrnCandidateResource extends JsonResource
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
            
            'candidate_entry' => $this->candidate_entry,
            'candidate_title' => $this->candidate_title,
            'candidate_name' => $this->candidate_name,
            'candidate_party_job' => $this->candidate_party_job,
            'candidate_marital_status' => $this->candidate_marital_status,
            'candidate_career' => $this->candidate_career,
            'candidate_education' => $this->candidate_education,

            'party_name' => $this->party_name,
            'party_coalition' => $this->party_coalition,
            'slug' => Str::slug($this->candidate_name, '-')
        ];
    }
}
