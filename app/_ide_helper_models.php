<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App{
/**
 * App\Action
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $character_id
 * @property int|null $item_id
 * @property int|null $skill_id
 * @property int $room_id
 * @property string $text
 * @property string $type
 * @property string $tag
 * @property-read \App\Room $room
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Action whereCharacterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Action whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Action whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Action whereItemId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Action whereRoomId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Action whereSkillId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Action whereTag($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Action whereText($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Action whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Action whereUpdatedAt($value)
 */
	class Action extends \Eloquent {}
}

namespace App{
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
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\GuildRole[] $guildRoles
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Item[] $inventory
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\PcClassRole[] $pcClassRoles
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\RaceRole[] $raceRoles
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Skill[] $skills
 */
	class Character extends \Eloquent {}
}

namespace App{
/**
 * App\CharacterGuildRole
 *
 * @property int $id
 * @property int $character_id
 * @property int $guild_role_id
 * @method static \Illuminate\Database\Eloquent\Builder|\App\CharacterGuildRole whereCharacterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\CharacterGuildRole whereGuildRoleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\CharacterGuildRole whereId($value)
 */
	class CharacterGuildRole extends \Eloquent {}
}

namespace App{
/**
 * App\CharacterItem
 *
 * @property int $id
 * @property int $character_id
 * @property int $item_id
 * @property int $quantity
 * @method static \Illuminate\Database\Eloquent\Builder|\App\CharacterItem whereCharacterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\CharacterItem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\CharacterItem whereItemId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\CharacterItem whereQuantity($value)
 */
	class CharacterItem extends \Eloquent {}
}

namespace App{
/**
 * App\CharacterPcClassRole
 *
 */
	class CharacterPcClassRole extends \Eloquent {}
}

namespace App{
/**
 * App\CharacterRaceRole
 *
 * @property int $id
 * @property int $character_id
 * @property int $race_role_id
 * @method static \Illuminate\Database\Eloquent\Builder|\App\CharacterRaceRole whereCharacterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\CharacterRaceRole whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\CharacterRaceRole whereRaceRoleId($value)
 */
	class CharacterRaceRole extends \Eloquent {}
}

namespace App{
/**
 * App\CharacterSkill
 *
 * @property int $id
 * @property int $character_id
 * @property int $skill_id
 * @method static \Illuminate\Database\Eloquent\Builder|\App\CharacterSkill whereCharacterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\CharacterSkill whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\CharacterSkill whereSkillId($value)
 */
	class CharacterSkill extends \Eloquent {}
}

namespace App{
/**
 * App\Guild
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property int $availability
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\GuildRole[] $roles
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Guild whereAvailability($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Guild whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Guild whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Guild whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Guild whereUpdatedAt($value)
 */
	class Guild extends \Eloquent {}
}

namespace App{
/**
 * App\GuildRole
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $guild_id
 * @property string $name
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Character[] $characters
 * @property-read \App\Guild $guild
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GuildRole whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GuildRole whereGuildId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GuildRole whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GuildRole whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GuildRole whereUpdatedAt($value)
 */
	class GuildRole extends \Eloquent {}
}

namespace App{
/**
 * App\Item
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string $description
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Character[] $characters
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Item whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Item whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Item whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Item whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Item whereUpdatedAt($value)
 */
	class Item extends \Eloquent {}
}

namespace App{
/**
 * App\PcClass
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property int $availability
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\PcClassRole[] $pcClassRoles
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PcClass whereAvailability($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PcClass whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PcClass whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PcClass whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PcClass whereUpdatedAt($value)
 */
	class PcClass extends \Eloquent {}
}

namespace App{
/**
 * App\PcClassRole
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $pc_class_id
 * @property string $name
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Character[] $characters
 * @property-read \App\PcClass $pcClass
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PcClassRole whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PcClassRole whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PcClassRole whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PcClassRole wherePcClassId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PcClassRole whereUpdatedAt($value)
 */
	class PcClassRole extends \Eloquent {}
}

namespace App{
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
 * @property int $availability
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\RaceRole[] $roles
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Race whereAvailability($value)
 */
	class Race extends \Eloquent {}
}

namespace App{
/**
 * App\RaceRole
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $race_id
 * @property string $name
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Character[] $characters
 * @property-read \App\Race $race
 * @method static \Illuminate\Database\Eloquent\Builder|\App\RaceRole whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\RaceRole whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\RaceRole whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\RaceRole whereRaceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\RaceRole whereUpdatedAt($value)
 */
	class RaceRole extends \Eloquent {}
}

namespace App{
/**
 * App\Room
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string $description
 * @property string $image_url
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Action[] $actions
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Room whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Room whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Room whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Room whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Room whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Room whereUpdatedAt($value)
 */
	class Room extends \Eloquent {}
}

namespace App{
/**
 * App\Skill
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string $description
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Skill whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Skill whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Skill whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Skill whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Skill whereUpdatedAt($value)
 */
	class Skill extends \Eloquent {}
}

namespace App{
/**
 * App\User
 *
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\PlayingCharacter[] $playingCharacters
 * @mixin \Eloquent
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUpdatedAt($value)
 * @property string $role
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Character[] $characters
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereRole($value)
 */
	class User extends \Eloquent {}
}

