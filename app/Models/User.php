<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class User extends Model
{
  use HasFactory;
  // protected $hidden = ['password', "created_at", "updated_at"];\
  protected $fillable = ["first_name", "last_name", "username", "password", "email", "phone", "sale_code"];
  public function country()
  {
    return $this->belongsToMany(Country::class, "country_users");
  }

  public function image()
  {
    return $this->hasOne(UserImage::class, "user_id");
  }

  public function roles()
  {
    return $this->belongsToMany(Role::class, "user_roles");
  }

  public function getRolesId(): Attribute
  {
    return new Attribute(
      get: function ($originalValue) {
        $result = [];
        $roles = $this->roles->setVisible(['name']);
        foreach ($roles as $role) {
          $result[] = $role->id;
        }
        return $result;
      }
    );
  }


}
