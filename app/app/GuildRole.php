<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GuildRole extends Model
{
    public function characters()
    {
        return $this->hasMany('App\Character');
    }

    public function guild()
    {
        return $this->belongsTo('App\Guild');
    }
}
