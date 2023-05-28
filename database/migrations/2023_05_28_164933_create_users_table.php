<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('users', function (Blueprint $table) {
      $table->id();
      $table->string("username", 50);
      $table->string("first_name", 25);
      $table->string("last_name", 25);
      $table->string("password", 255);
      $table->string("description", 5000);
      $table->string("phone", 50);
      $table->string("email", 100);
      $table->string("country", 50);
      $table->string("sale_code", 50);
      $table->string("old_token", 255);
      $table->string("new_token", 255);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('users');
  }
};