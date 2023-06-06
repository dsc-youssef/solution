<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\Page;
use App\Models\PageRole;
use App\Models\Modal;
use App\Models\ModalRole;

class AdminRolePermissionsSeeder extends Seeder
{
  /**
  * Run the database seeds.
  */
  public function run(): void
  {
    $adminRole = Role::all()->where("role", "admin")->first();
    $pages = Page::all();
    $modals = Modal::all();

    # Give Admin Role All Permission to Pages
    foreach ($pages as $page) {
      PageRole::create([
        "role_id" => $adminRole->id,
        "page_id" => $page->id
      ]);
    }

    # Give Admin Role All Permission to Modals
    foreach ($modals as $modal) {
      ModalRole::create([
        "role_id" => $adminRole->id,
        "modal_id" => $modal->id
      ]);
    }
  }
}