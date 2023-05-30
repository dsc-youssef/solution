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
      $table->string("username", 50)->nullable(false);
      $table->string("first_name", 25)->nullable(false);
      $table->string("last_name", 25)->nullable(false);
      $table->string("password", 255)->nullable(false);
      $table->string("description", 5000)->nullable()->default("");
      $table->string("phone", 50)->nullable(false);
      $table->string("email", 100)->nullable(false);
      $table->string("country", 50)->nullable(false);
      $table->string("sale_code", 50)->nullable(false);
      $table->boolean("status")->default(false);
      $table->string("ip", 30)->nullable();
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