<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ApiKey
{
  public function handle($request, Closure $next)
  {
    
    // check if request has api_key ?
    if($request->has('api_key')){

      // now check of API key match with our .env ?
      $key = env('API_KEY'); // our key
      $challenge = $request->input('api_key'); // from requester

      if( $challenge != $key ){
        return response('wrong API KEY',401);
      }
      
    } else {
      // return erro
      return response('API not present',401);
    }
  }
}