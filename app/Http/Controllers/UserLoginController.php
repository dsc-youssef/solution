<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;


class UserLoginController extends Controller
{
  /**
   * Handle the incoming request.
   */
  public function __invoke(Request $request)
  {

    # First Check Validation
    $validation = Validator($request->all(), [
      "username" => "required",
      "password" => "required"
    ]);

    if ($validation->fails()) {
      $errors = $validation->errors();
      if ($errors->has("username")) {
        return response()->json([
          "message" => $errors->first("username")
        ], 400);
      } else if ($errors->has("password")) {
        return response()->json([
          "message" => $errors->first("password")
        ], 400);
      }
    }

    # Get User From Database
    $user = User::all()->where("username", $request->username)->first();

    # Check if User is Found and Password is valid
    if (!empty($user) && Hash::check($request->password, $user->password)) {

      # Get User IP
      $user_ip = $request->getClientIp();

      # Send Response If everything is good
      return response()->json([
        "message" => "logged success",
        'token' => Crypt::encryptString("username={$user->username}-|-ip={$user_ip}"),
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