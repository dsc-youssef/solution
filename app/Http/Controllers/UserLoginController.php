<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;
use App\Traits\Responses;
use App\Traits\Token;

class UserLoginController extends Controller
{
  use Responses;
  use Token;

  /**
  * Handle the incoming request.
  */
  public function __invoke(Request $request) {

    # First Check Validation
    $validation = Validator($request->all(), [
      "username" => "required",
      "password" => "required"
    ]);

    if ($validation->fails()) {
      $errors = $validation->errors();
      if ($errors->has("username")) {
        return $this->createResponse($this->goodResponse, false, $errors->first("username"));
      } else if ($errors->has("password")) {
        return $this->createResponse($this->goodResponse, false, $errors->first("password"));
      }
    }

    # Get User From Database
    $user = User::all()->where("username", strtolower($request->username))->first();

    # Check if User is Found and Password is valid
    if (!empty($user) && Hash::check($request->password, $user->password)) {

      # Get User IP
      $user_ip = $request->getClientIp();

      # Send Response If everything is good
      return $this->createResponse($this->goodResponse, true, "logged success",  [
          "username" => $user->username,
          "first_name" => $user->first_name,
          "last_name" => $user->last_name,
          "description" => $user->description,
          "phone" => $user->phone,
          "email" => $user->email,
          "image" => null,
          "country" => "Palestine",
          "sale_code" => $user->sale_code,
          "access_pages" => Role::find($user->id)->getPages,
          "access_modals" => Role::find($user->id)->getModals,
          "token" => $this->generateUserToken($user->username, $user_ip)
        ]);
    }

    # If Username or password not valid return bad response
    return $this->createResponse($this->goodResponse, false, "Invalid username or password.");


  }
}

