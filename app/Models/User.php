<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class User extends Model
{
  use HasFactory;
  // protected $hidden = ['password', "created_at", "updated_at"];\
  
  public function country(){
    return $this->belongsToMany(Country::class, "country_users");
  }
  
  public function image(){
    return $this->hasOne(UserImage::class, "user_id");
  }




}