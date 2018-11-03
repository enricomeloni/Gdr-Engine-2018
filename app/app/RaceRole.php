<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RaceRole extends Model
{
    public function race()
    {
        return $this->belongsTo('App\Race');
    }

    public function characters()
    {
        return $this->belongsToMany('App\Character');
    }
}
