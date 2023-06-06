<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\Country;
use App\Models\CountryUser;
use App\Models\UserRole;
use App\Models\UserImage;

class SetupAdminSeeder extends Seeder
{
  /**
  * Run the database seeds.
  */
  public function run(): void
  {
    // Give Admin Role
    UserRole::create([
      "user_id" => 1,
      "role_id" => Role::all()->where("role", "admin")->first()->id,
    ]);
    
    // Create a Image For Admin
    UserImage::create([
      "image" => null,
      "user_id" => 1
    ]);
    
    // Create Admin Country
    CountryUser::create([
      "country_id" => Country::all()->where("country", "Palestine")->first()->id,
      "user_id" => 1
    ]);

  }
}