<?php

use App\Http\Middleware\UserAuthentication;
use App\Http\Middleware\UserRegister;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserLoginController;
use App\Http\Controllers\CountriesController;

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

Route::post("auth/login", UserLoginController::class);

Route::get("country/show", [CountriesController::class, "show"]);

Route::middleware([UserAuthentication::class])->group(function () {
  # Add All Routes Here, For Example ( Edit User, Create Product, ... )
});

Route::middleware([UserRegister::class])->post("testing", function () {
  return "hello";
});