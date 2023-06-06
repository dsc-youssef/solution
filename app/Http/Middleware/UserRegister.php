<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\File;
use App\Traits\Responses;
use App\Models\Country;

class UserRegister
{
  use Responses;
  /**
   * Handle an incoming request.
   *
   * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
   */
  public function handle(Request $request, Closure $next): Response
  {
    try {
      // regex:/^.+$/i
      // Validator
      $validation = Validator::make($request->all(), [
        "first_name" => "required|min:4|max:15",
        "last_name" => "required|min:4|max:25",
        "username" => "required|unique:users,username|min:4|max:30",
        "password" => "required|min:6",
        "country" => "required",
        "image" => [
          "required",
          File::types(['png', 'jpg', "jpeg"])
            ->min(1)
            ->max(3 * 1024)
        ],
        "email" => "required|unique:users,email:rfc,dns",
        "phone" => "required|unique:users,phone|min:5|max:16"
      ]);

      // Check If There Errors
      if ($validation->fails())
        return $this->createResponse(200, false, $validation->errors()->first(), []);

      // Check if country is valid
      if (count(Country::get()->where("country", $request->country)) <= 0)
        return $this->createResponse(200, false, "Your selected country is invalid.");


      return $next($request);
    } catch (\Throwable $th) {
      return $this->createResponse($this->forbiddenResponse, false, $th);
    }

  }
}