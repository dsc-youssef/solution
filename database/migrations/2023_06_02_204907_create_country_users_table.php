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
    Schema::create('country_users', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger("country_id");
      $table->foreign("country_id")->references("id")->on("countries")->cascadeOnDelete();
      $table->unsignedBigInteger("user_id");
      $table->foreign("user_id")->references("id")->on("users")->cascadeOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('country_users');
  }
};