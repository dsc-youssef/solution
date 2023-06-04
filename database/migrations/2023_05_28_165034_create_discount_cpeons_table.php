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
        Schema::create('discount_cpeons', function (Blueprint $table) {
            $table->id();
            $table->decimal('discount', 13, 2)->nullable(false);
            $table->boolean('avaliable')->nullable(false)->default(false);
            $table->bigInteger('used_count')->nullable(false)->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('discount_cpeons');
    }
};
