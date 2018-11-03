<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PcClassRole extends Model
{
    public function pcClass()
    {
        return $this->belongsTo('App\PcClass');
    }

    public function characters()
    {
        return $this->belongsToMany('App\Character');
    }
}
