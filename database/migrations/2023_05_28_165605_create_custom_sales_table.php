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
    Schema::create('custom_sales', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger("customer_id");
      $table->foreign("customer_id")->references("id")->on("customers")->onDelete('cascade');
      $table->unsignedBigInteger("user_id");
      $table->foreign("user_id")->references("id")->on("users")->onDelete('cascade');
      $table->string('title', 255)->nullable(false);
      $table->string('discription', 8000)->nullable(false);
      $table->boolean("completed")->default(false);
      $table->dateTime('start_date')->nullable(false);
      $table->dateTime('end_date')->nullable(false);
      $table->decimal('price', 13, 2)->nullable(false);
      $table->decimal('discount', 13, 2)->nullable(false);
      $table->decimal('paid', 13, 2)->nullable(false);
      $table->decimal('remaining', 13, 2)->nullable(false);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('custom_sales');
  }
};
