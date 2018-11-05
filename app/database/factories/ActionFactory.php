<?php

use Faker\Generator as Faker;

$factory->define(App\Action::class, function (Faker $faker) {

    $ITEM_CHANCE = 5;
    $SKILL_CHANCE = 0;

    $character = App\Character::inRandomOrder()->first()->id;

    $item = null;
    if(rand(0, 100) < $ITEM_CHANCE)
        $item = App\Item::inRandomOrder()->first()->id;

    $skill = null;
    if(rand(0,100) < $SKILL_CHANCE)
        $skill = App\Item::inRandomOrder()->first()->id;

    return [
        "character_id" => $character,
        "item_id" => $item,
        "skill_id" => $skill,

        "text" => $faker->text,
        "type" => $faker->randomElement(['action', 'master', 'moderation', 'dice']),
        "tag" => $faker->country
    ];
});
