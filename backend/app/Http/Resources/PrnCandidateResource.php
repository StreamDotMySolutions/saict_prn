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

        // https://drive.google.com/uc?export=view&id=14pX_Q8edWHxjArqCrHWTTUG_f7LOY1no 
        // https://drive.google.com/file/d/14pX_Q8edWHxjArqCrHWTTUG_f7LOY1no/preview

        // Input URL
        //$input_url = 'https://drive.google.com/file/d/14pX_Q8edWHxjArqCrHWTTUG_f7LOY1no/preview';

        //$input_url = 'https://drive.google.com/file/d/1476dwtNnPz_xVi-zYaV-z6kYWqajv2c8/view?usp=drive_link';

        // Regex pattern to detect the URL format
        $pattern1 = '#^(https://)drive\.google\.com/file/d/([a-zA-Z0-9_-]+)/view\?usp=drive_link$#';
        $pattern2 = '#^(https://)drive\.google\.com/file/d/([a-zA-Z0-9_-]+)/view\?usp=sharing$#';

        // https://drive.google.com/file/d/1VBM5syHO0xXNdz9BKqr45LYG0J6lXcFR/view?usp=sharing
        
        // Replacement URL format
        $replacement = 'https://drive.google.com/uc?export=view&id=$2';

        // Perform the replacement
        //$url = preg_replace($pattern, $replacement, $input_url);
        $url = preg_replace($pattern1, $replacement, $this->url);
        $url = preg_replace($pattern2, $replacement, $this->url);

        return [
            'id' => $this->id,
            //'url' => $this->url,
            'url' => $url,
            
            'candidate_id' => $this->id,
            'candidate_entry' => $this->candidate_entry,
            'candidate_title' => $this->candidate_title,
            'candidate_name' => $this->candidate_name,
            'candidate_party_job' => $this->candidate_party_job,
            'candidate_marital_status' => $this->candidate_marital_status,
            'candidate_career' => $this->candidate_career,
            'candidate_education' => $this->candidate_education,

            'region_code' => $this->region_code,
            'region_name' => $this->region_name,
            'state_name' => $this->state_name,

            'party_name' => $this->party_name,
            'party_coalition' => $this->party_coalition,
            'slug' => Str::slug($this->candidate_name, '-'),
            'when' => $this->updated_at->diffForHumans(),
        ];
    }
}
