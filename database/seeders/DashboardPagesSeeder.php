<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Page;

class DashboardPagesSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    # Global Pages
    Page::create([
      "name" => "dashboard",
      "category" => "global",
      "created_by" => 1
    ]);
    Page::create([
      "name" => "faq",
      "category" => "global",
      "created_by" => 1
    ]);

    # Support Pages
    Page::create([
      "name" => "support tickets",
      "category" => "support",
      "created_by" => 1
    ]);

    # Customer Pages
    Page::create([
      "name" => "customers",
      "category" => "customer",
      "created_by" => 1
    ]);

    # Product Pages
    Page::create([
      "name" => "products",
      "category" => "product",
      "created_by" => 1
    ]);

    # Expense Pages
    Page::create([
      "name" => "expenses",
      "category" => "expense",
      "created_by" => 1
    ]);

    # Sale Pages
    Page::create([
      "name" => "website",
      "category" => "sale",
      "created_by" => 1
    ]);
    Page::create([
      "name" => "custom",
      "category" => "sale",
      "created_by" => 1
    ]);

    # User Pages
    Page::create([
      "name" => "profile",
      "category" => "user",
      "created_by" => 1
    ]);
    Page::create([
      "name" => "users",
      "category" => "user",
      "created_by" => 1
    ]);

    # Role Pages
    Page::create([
      "name" => "Roles",
      "category" => "role",
      "created_by" => 1
    ]);

    # Invite Pages
    Page::create([
      "name" => "invitees",
      "category" => "invite",
      "created_by" => 1
    ]);
    Page::create([
      "name" => "invite codes",
      "category" => "invite",
      "created_by" => 1
    ]);

    # Discount coupon
    Page::create([
      "name" => "discount coupons",
      "category" => "discount coupon",
      "created_by" => 1
    ]);

    # Page Pages
    Page::create([
      "name" => "pages",
      "category" => "page",
      "created_by" => 1
    ]);

    # Modal Pages
    Page::create([
      "name" => "modals",
      "category" => "modal",
      "created_by" => 1
    ]);

  }
}