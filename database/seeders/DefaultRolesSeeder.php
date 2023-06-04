<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;

class DefaultRolesSeeder extends Seeder
{
  /**
   * Run the database seeds.
   * Application Default Roles
   */
  public function run(): void
  {
    Role::create([
      "role" => "admin",
      "created_by" => 1
    ]);

    Role::create([
      "role" => "customer",
      "created_by" => 1
    ]);




  }
}