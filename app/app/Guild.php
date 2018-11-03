<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Guild extends Model
{

    public function roles()
    {
        return $this->hasMany('App\GuildRole');
    }
}
