<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\UserImage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class CreateAdminSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    User::create([
      "first_name" => "Solution",
      "last_name" => "Moderator",
      "username" => strtolower("solution123"),
      "password" => Hash::make("123456"),
      "description" => "this is a admin",
      "phone" => fake()->phoneNumber(),
      "email" => fake()->email(),
      "sale_code" => uniqid()
    ]);
  }
}