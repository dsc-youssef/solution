<?php

namespace Database\Seeders;

use App\Models\Modal;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ModalRole;
use App\Models\PageRole;
use App\Models\Page;
use App\Models\Role;

class AdminPermissionsSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $adminRole = Role::all()->where("role", "admin")->first()->id;
    $pages = Page::all();
    $modals = Modal::all();

    # Give Admin Role All Permission to Pages
    foreach ($pages as $page) {
      PageRole::create([
        "role_id" => $adminRole,
        "page_id" => $page->id
      ]);
    }

    # Give Admin Role All Permission to Modals
    foreach ($modals as $modal) {
      ModalRole::create([
        "role_id" => $adminRole,
        "modal_id" => $modal->id
      ]);
    }

  }
}