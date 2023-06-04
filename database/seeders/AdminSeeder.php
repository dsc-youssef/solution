<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    User::create([
      "first_name" => "Solution",
      "last_name" => "Moderator",
      "username" => "solution123",
      "password" => Hash::make("solution123"),
      "description" => "this is a admin",
      "phone" => "01234567890",
      "email" => "xcvkp@example.com",
      "sale_code" => uniqid()
    ]);
    
    UserImage::create([
      "image" => "",
      "user_id" =>  1
    ]);
    
    
  }
}
