<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\PlayingCharacter
 *
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Race[] $races
 * @property-read \App\User $user
 * @mixin \Eloquent
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $user_id
 * @property string $name
 * @property string|null $middle_name
 * @property string $last_name
 * @property int $weapon_skill
 * @property int $balistic_skill
 * @property int $strength
 * @property int $toughness
 * @property int $agility
 * @property int $intelligence
 * @property int $perception
 * @property int $willpower
 * @property int $fellowship
 * @property int $influence
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter whereAgility($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter whereBalisticSkill($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter whereFellowship($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter whereInfluence($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter whereIntelligence($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter whereMiddleName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter wherePerception($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter whereStrength($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter whereToughness($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter whereWeaponSkill($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PlayingCharacter whereWillpower($value)
 */
class Character extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function raceRoles()
    {
        return $this->belongsToMany('App\RaceRole');
    }

    public function guildRoles()
    {
        return $this->belongsToMany('App\GuildRole');
    }

    public function pcClassRoles()
    {
        return $this->belongsToMany('App\PcClassRole');
    }

    public function inventory()
    {
        return $this->belongsToMany('App\Item');
    }

    public function skills()
    {
        return $this->belongsToMany('App\Skill');
    }
}
