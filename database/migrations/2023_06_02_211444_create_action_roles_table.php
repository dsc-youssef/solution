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
    Schema::create('action_roles', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger("role_id");
      $table->unsignedBigInteger("action_id");
      $table->foreign("role_id")->references("id")->on("roles")->cascadeOnDelete();
      $table->foreign("action_id")->references("id")->on("actions")->cascadeOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('action_roles');
  }
};