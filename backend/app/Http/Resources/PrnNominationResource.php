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
 
        $pattern = '#^(https://)drive\.google\.com/file/d/([a-zA-Z0-9_-]+)/view\?usp=drive_link$#';
        
        // Replacement URL format
        $replacement = 'https://drive.google.com/uc?export=view&id=$2';

        // Perform the replacement
        //$url = preg_replace($pattern, $replacement, $input_url);

        $url = $this->url;

        $pattern1 = '#^(https://)drive\.google\.com/file/d/([a-zA-Z0-9_-]+)/view\?usp=drive_link$#';
        if (preg_match($pattern1, $this->url)) {
            $url = preg_replace($pattern1, $replacement,$this->url);
        }

        $pattern2 = '#^(https://)drive\.google\.com/file/d/([a-zA-Z0-9_-]+)/view\?usp=sharing$#';
        if (preg_match($pattern2,$this->url)) {
            $url = preg_replace($pattern2, $replacement, $this->url);
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
            'slug' => Str::slug($this->candidate_name, '-'),
            'when' => $this->updated_at->diffForHumans(),

        ];
    }
}
