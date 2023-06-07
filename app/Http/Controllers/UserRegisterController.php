<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Country;
use App\Traits\Responses;
use App\Models\User;
use App\Models\UserImage;
use App\Models\Role;
use App\Models\UserRole;
use App\Models\CountryUser;
use App\Models\Customer;

class UserRegisterController extends Controller
{
  /**
   * Handle the incoming request.
   */
  use Responses;
  public function __invoke(Request $request)
  {

    # Create User
    User::create([
      "first_name" => $request->first_name,
      "last_name" => $request->last_name,
      "username" => $request->username,
      "password" => Hash::make($request->password),
      "phone" => $request->phone,
      "email" => $request->email,
      "sale_code" => uniqid()
    ]);

    # Select Current User
    $user = User::where('username', $request->username)->first();

    # Add User image
    if ($request->hasFile("image")) {
      $image = $request->file("image");
      $fileName = $image->store("users/", "public");
      UserImage::create([
        "user_id" => $user->id,
        "image" => $fileName
      ]);

    } else {
      UserImage::create([
        "user_id" => $user->id,
        "image" => null
      ]);
    }

    # Create User Customer Role
    $customer_role = Role::where("role", "customer")->first();
    UserRole::create([
      "user_id" => $user->id,
      "role_id" => $customer_role->id
    ]);


    # Add User Country
    $country = Country::where("country", $request->country)->first();
    CountryUser::create([
      "user_id" => $user->id,
      "country_id" => $country->id
    ]);

    # Create This User is a customer
    Customer::create([
      "user_id" => $user->id
    ]);

    # Return Good Response if User Created
    return $this->createResponse($this->goodResponse, true, "User Created");
  }
}

/*
if ($request->hasFile('photo')) {
    $image = $request->file('photo');
    $fileName = time() . '.' . $image->getClientOriginalExtension();
    $img = Image::make($image->getRealPath());
    $img->resize(120, 120, function ($constraint) {
        $constraint->aspectRatio();
    });
    $img->stream(); // <-- Key point
    //dd();
    Storage::disk('local')->put('images/1/smalls'.'/'.$fileName, $img, 'public');
}
*/