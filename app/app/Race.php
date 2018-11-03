<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Race
 *
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\PlayingCharacter[] $characters
 * @mixin \Eloquent
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Race whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Race whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Race whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Race whereUpdatedAt($value)
 */
class Race extends Model
{
    public function characters()
    {
        return $this->belongsToMany('App\Character');
    }
}
