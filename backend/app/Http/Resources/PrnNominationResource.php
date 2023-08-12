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
            'url' => $url,      
            'candidate_title' => $this->candidate_title,  
            'candidate_name' => $this->candidate_name,  
            'state_name' => $this->state_name, 
            'region_code' => $this->region_code,
            'region_name' => $this->region_name,
            'party_name' => $this->party_name,
            'gsheet_email' => $this->gsheet_email,
            'state_name_slug' => Str::slug($this->state_name, '-'),
            'region_name_slug' => Str::slug($this->region_name, '-'),
            'slug' => Str::slug($this->candidate_name, '-'),
            'when' => $this->updated_at->diffForHumans(),
            'official_count' => $this->prn_nomination_result ? $this->prn_nomination_result->official_count : 0 ,
            'unofficial_count' => $this->prn_nomination_result ?  $this->prn_nomination_result->unofficial_count : 0,
            'status' => $this->prn_nomination_result ? $this->prn_nomination_result->status : null ,
            'party_coalition_url' => $party_coalition_url,

        ];
    }
}
