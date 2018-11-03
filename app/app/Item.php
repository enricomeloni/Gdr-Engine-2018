<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    public function characters()
    {
        return $this->belongsToMany('App\Character');
    }
}
