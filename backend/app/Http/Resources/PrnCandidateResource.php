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
        $pattern = '#^(https://)drive\.google\.com/file/d/([a-zA-Z0-9_-]+)/view\?usp=drive_link$#';
        
        // Replacement URL format
        $replacement = 'https://drive.google.com/uc?export=view&id=$2';

        // Perform the replacement
        //$url = preg_replace($pattern, $replacement, $input_url);

        $url = $this->url ?? null;
        $party_coalition_url = null;

        $pattern1 = '#^(https://)drive\.google\.com/file/d/([a-zA-Z0-9_-]+)/view\?usp=drive_link$#';
        if (preg_match($pattern1, $this->url)) {
            $url = preg_replace($pattern1, $replacement,$this->url);
        }

        if($this->prn_coalition->url){
            if (preg_match($pattern1,  $this->prn_coalition->url)) {
                $party_coalition_url  = preg_replace($pattern1, $replacement,$this->prn_coalition->url);
            }
        }

        $pattern2 = '#^(https://)drive\.google\.com/file/d/([a-zA-Z0-9_-]+)/view\?usp=sharing$#';
        if (preg_match($pattern2,$this->url)) {
            $url = preg_replace($pattern2, $replacement, $this->url);
        }


        if($this->prn_coalition){
            if (preg_match($pattern2,  $this->prn_coalition->url)) {
                $party_coalition_url  = preg_replace($pattern2, $replacement,$this->prn_coalition->url);
            }
        }

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
            'party_coalition_url' => $party_coalition_url,

            'slug' => Str::slug($this->candidate_name, '-'),
            'when' => $this->updated_at->diffForHumans(),

            'region_name_slug' => Str::slug($this->region_name, '-'),
            'region_code_slug' => Str::slug($this->region_code, '-'),
            'state_name_slug' => Str::slug($this->state_name, '-'),

            // prn_nomination_result
            'official_count' => $this->prn_nomination_result ? $this->prn_nomination_result->official_count : 0 ,
            'unofficial_count' => $this->prn_nomination_result ?  $this->prn_nomination_result->unofficial_count : 0,
            'status' => $this->prn_nomination_result ? $this->prn_nomination_result->status : null ,
          
  
        ];
    }
}
