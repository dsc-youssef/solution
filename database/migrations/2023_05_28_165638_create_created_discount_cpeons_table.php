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
        Schema::create('created_discount_cpeons', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("created_by");
            $table->foreign("created_by")->references("id")->on("users")->onDelete('cascade');
            $table->unsignedBigInteger("cpeon_id");
            $table->foreign("cpeon_id")->references("id")->on("discount_cpeons")->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('created_discount_cpeons');
    }
};
