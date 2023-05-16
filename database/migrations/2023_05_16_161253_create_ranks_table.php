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
    Schema::create('ranks', function (Blueprint $table) {
      $table->id()->autoIncrement();
      $table->string('rank', 65);
      $table->json("roles");
      $table->string("created_by", 50);
      $table->foreign("created_by")->references("username")->on("users");
      $table->unique(["created_by", "rank", "id"]);
      $table->timestamp("created_at")->useCurrent();
      $table->timestamp("updated_at")->useCurrent()->useCurrentOnUpdate();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('ranks');
  }
};
