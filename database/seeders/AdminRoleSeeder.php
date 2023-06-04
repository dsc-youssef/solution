<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UserRole;
use App\Models\Role;

class AdminRoleSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $adminRole = Role::all()->where("role", "admin")->first();
    UserRole::create([
      "user_id" => 1,
      "role_id" => $adminRole->id,
    ]);
  }
}