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
        Schema::create('page_roles', function (Blueprint $table) {
          $table->id();
          $table->unsignedBigInteger("role_id");
          $table->foreign("role_id")->references("id")->on("roles")->onDelete('cascade');
          $table->unsignedBigInteger("page_id");
          $table->foreign("page_id")->references("id")->on("pages")->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('page_roles');
    }
};
