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
        Schema::create('created_invite_codes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("created_by");
            $table->foreign("created_by")->references("id")->on("users")->onDelete('cascade');
            $table->unsignedBigInteger("invite_code_id");
            $table->foreign("invite_code_id")->references("id")->on("invite_codes")->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('created_invite_codes');
    }
};
