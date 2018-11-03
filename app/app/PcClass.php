<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PcClass extends Model
{
    public function pcClassRoles()
    {
        return $this->hasMany('App\PcClassRole');
    }
}
