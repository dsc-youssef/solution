<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;

class UserAuthentication
{
  /**
   * Handle an incoming request.
   *
   * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
   */
  public function handle(Request $request, Closure $next): Response
  {
    try {

      # Validations
      $validation = Validator::make($request->all(), [
        "token" => "required"
      ]);

      if ($validation->fails()) {
        $errors = $validation->errors();
        return $errors->has("token") ? response()->json(["message" => $errors->first("token")], 400) : null;
      }

      # Declare Main Variables
      $token = explode("-|-", Crypt::decryptString($request->token));
      $username = str_ireplace("username=", "", $token[0]);
      $ip = str_ireplace("ip=", "", $token[1]);

      # Get User From database
      $user = User::all()->where("username", e($username))->first();

      # Check User Validate
      if ($ip === $request->getClientIp() && !empty($user)) {
        return $next($request);
      }

      # If Token Not valid return error.
      return response()->json([
        "message" => "Invalid Token"
      ], 401);

    } catch (\Throwable $th) {
      throw $th;
    }
  }
}