<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;


class UserLoginController extends Controller
{
  /**
   * Handle the incoming request.
   */
  public function __invoke(Request $request)
  {
    // "decryption_token" => Crypt::decryptString($request->token)

    # Get User From Database
    $user = (object) User::all()->where("username", $request->username)->first();
    # Check if User is Found and Password is valid
    if (!empty($user) && Hash::check($request->password, $user->password)) {

      # Get User IP
      $user_ip = $request->getClientIp();

      # Send Response If everything is good
      return response()->json([
        "message" => "logged success",
        'token' => Crypt::encryptString("username={$user->username}-|-password={$user->password}-|-ip={$user_ip}"),
        "data" => [
          "username" => $user->username,
          "first_name" => $user->first_name,
          "last_name" => $user->last_name,
          "description" => $user->description,
          "phone" => $user->phone,
          "email" => $user->email,
          "sale_code" => $user->sale_code,
          "access_pages" => Role::find($user->id)->getPages,
          "access_modals" => Role::find($user->id)->getModals
        ],
      ], 200);
    }

    # If Username or password not valid return bad response
    return response()->json(["message" => "Invalid username or password."], 401);


  }
}