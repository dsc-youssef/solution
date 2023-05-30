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
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100)->nullable(false);
            $table->integer('projects')->nullable(false)->default(0);
            $table->bigInteger('spent')->nullable(false)->default(0);
            $table->boolean('veifed')->nullable(false)->default(false);
            $table->string('image', 255)->nullable(false)->default("");
            $table->string('phone', 50)->nullable(false);
            $table->string('email', 100)->nullable(false);
            $table->string('country', 50)->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
