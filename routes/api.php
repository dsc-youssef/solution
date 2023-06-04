<?php

use App\Http\Middleware\UserAuthentication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserLoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

Route::post("/login", UserLoginController::class);


Route::middleware([UserAuthentication::class])->group(function () {
  # Add All Routes Here, For Example ( Edit User, Create Product, ... )
});