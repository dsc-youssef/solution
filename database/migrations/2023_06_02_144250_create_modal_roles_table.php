<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
  * Run the migrations.
  */
  public function up(): void
  {
    Schema::create('modal_roles', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger("role_id");
      $table->foreign("role_id")->references("id")->on("roles")->onDelete('cascade');
      $table->unsignedBigInteger("modal_id");
      $table->foreign("modal_id")->references("id")->on("modals")->onDelete('cascade');
    });
  }

  /**
  * Reverse the migrations.
  */
  public function down(): void
  {
    Schema::dropIfExists('modal_roles');
  }
};