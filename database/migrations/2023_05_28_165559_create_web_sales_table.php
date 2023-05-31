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
    Schema::create('web_sales', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger("customer_id");
      $table->foreign("customer_id")->references("id")->on("customers")->onDelete('cascade');
      $table->unsignedBigInteger("product_id");
      $table->foreign("product_id")->references("id")->on("products")->onDelete('cascade');
      $table->boolean("accepted")->default(false);
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
    Schema::dropIfExists('web_sales');
  }
};