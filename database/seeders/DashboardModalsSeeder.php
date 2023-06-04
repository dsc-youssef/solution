<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Modal;

class DashboardModalsSeeder extends Seeder
{
  /**
   * Run the database seeds.
   * Dashboard Default Modals
   */
  public function run(): void
  {

    # Support Modals
    Modal::create([
      "name" => "create ticket",
      "category" => "support",
      "created_by" => 1
    ]);
    Modal::create([
      "name" => "edit ticket",
      "category" => "support",
      "created_by" => 1
    ]);

    # Customer Modals
    Modal::create([
      "name" => "create customer",
      "category" => "customer",
      "created_by" => 1
    ]);
    Modal::create([
      "name" => "edit customer",
      "category" => "customer",
      "created_by" => 1
    ]);

    # Product Modals
    Modal::create([
      "name" => "create product",
      "category" => "product",
      "created_by" => 1
    ]);
    Modal::create([
      "name" => "edit product",
      "category" => "product",
      "created_by" => 1
    ]);

    # Expense Modals
    Modal::create([
      "name" => "create expense",
      "category" => "expense",
      "created_by" => 1
    ]);
    Modal::create([
      "name" => "edit expense",
      "category" => "expense",
      "created_by" => 1
    ]);

    # Sale Modals
    Modal::create([
      "name" => "new custom sale",
      "category" => "sale",
      "created_by" => 1
    ]);
    Modal::create([
      "name" => "edit custom sale",
      "category" => "sale",
      "created_by" => 1
    ]);

    # User Modals
    Modal::create([
      "name" => "create user",
      "category" => "user",
      "created_by" => 1
    ]);
    Modal::create([
      "name" => "edit user",
      "category" => "user",
      "created_by" => 1
    ]);


    # Role Modals
    Modal::create([
      "name" => "create role",
      "category" => "role",
      "created_by" => 1
    ]);
    Modal::create([
      "name" => "edit role",
      "category" => "role",
      "created_by" => 1
    ]);

    # invite Modals
    Modal::create([
      "name" => "create invite code",
      "category" => "invite",
      "created_by" => 1
    ]);
    Modal::create([
      "name" => "edit invite code",
      "category" => "invite",
      "created_by" => 1
    ]);


    # Discount Coupons
    Modal::create([
      "name" => "create discount coupons",
      "category" => "discount coupon",
      "created_by" => 1
    ]);
    Modal::create([
      "name" => "edit discount coupons",
      "category" => "discount coupon",
      "created_by" => 1
    ]);

    # Page Modals
    Modal::create([
      "name" => "create page",
      "category" => "page",
      "created_by" => 1
    ]);
    Modal::create([
      "name" => "edit page",
      "category" => "page",
      "created_by" => 1
    ]);

    # Modal Modals
    Modal::create([
      "name" => "create modal",
      "category" => "modal",
      "created_by" => 1
    ]);
    Modal::create([
      "name" => "edit modal",
      "category" => "modal",
      "created_by" => 1
    ]);


  }
}