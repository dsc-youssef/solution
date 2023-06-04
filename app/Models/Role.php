<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;



class Role extends Model
{
  use HasFactory;

  public function pages()
  {
    return $this->belongsToMany(Page::class, "page_roles");
  }

  public function modals()
  {
    return $this->belongsToMany(Modal::class, "modal_roles");
  }


  public function getPages(): Attribute
  {
    return new Attribute(
      get: function ($originalValue) {
        $result = [];
        $pages = $this->pages->setVisible(['name']);
        foreach ($pages as $page) {
          $result[] = $page->name;
        }
        return $result;
      }
    );
  }

  public function getModals(): Attribute
  {
    return new Attribute(
      get: function ($originalValue) {
        $result = (array) [];
        $modals = $this->modals->setVisible(["name"]);
        foreach ($modals as $modal) {
          $result[] = $modal->name;
        }
        return $result;
      }
    );
  }

}