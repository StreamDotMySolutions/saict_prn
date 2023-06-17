<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;


class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ];
    }

    /**
     * Attempt to authenticate the request's credentials.
     *
     * @throws \Illuminate\Validation\ValidationException
     */

     public function authenticate(): response
     {
 
         if (! Auth::attempt($this->only('email', 'password'), $this->boolean('remember'))) {
    
             throw ValidationException::withMessages([
                 'email' => __('auth.failed'),
             ]);

         } else {
               
            // create token in User Model
            $token = Auth::user()->createToken('API Token')->plainTextToken;

            // return with 200 header sucess
            // return message = "Authentication Success"
            // return in JSON
            return response()->json([
                'message' => 'Authentication Success',
                'token' => $token
            ],200);
        }
 
     }
}
