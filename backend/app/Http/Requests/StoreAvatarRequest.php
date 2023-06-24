<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Response;

class StoreAvatarRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'file' => ['required','mimes:jpeg,png,jpg,gif'],
        ];
    }

    public function messages()
    {
        return [
            'file.required' => 'The :attribute field is required.',
            'file.mimes' => 'Only WEBP,JPG and PNG is allowed'
        ];
    }

}
