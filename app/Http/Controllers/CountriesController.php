<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Country;
use App\Traits\Responses;

class CountriesController extends Controller
{
  use Responses;
  public function show(){
    return $this->createResponse($this->goodResponse, true, "", [...Country::all()]);
  }
}