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
      $table->id()->autoIncrement();
      $table->string("username", 50);
      $table->string("first_name", 25);
      $table->string('last_name', 25);
      $table->string('password');
      $table->string('description')->default("");
      $table->string("image")->default("");
      $table->string('phone', 50);
      $table->string("email", 100);
      $table->string("country", 50);
      $table->string("sale_code", 50);
      $table->string("rank", 65);
      # $table->foreign("rank")->references("rank")->on("ranks");
      $table->unique(["username", "id", "phone", "email", "sale_code"]);
      $table->timestamp("created_at")->useCurrent();
      $table->timestamp("updated_at")->useCurrent()->useCurrentOnUpdate();
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
