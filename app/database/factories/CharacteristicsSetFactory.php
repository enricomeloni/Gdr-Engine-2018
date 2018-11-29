<?php

use Faker\Generator as Faker;

$factory->define(App\CharacteristicsSet::class, function (Faker $faker) {
    return [
        'weapon_skill' => $faker->numberBetween(0,100),
        'balistic_skill' => $faker->numberBetween(0,100),
        'strength' => $faker->numberBetween(0,100),
        'toughness' => $faker->numberBetween(0,100),
        'agility' => $faker->numberBetween(0,100),
        'intelligence' => $faker->numberBetween(0,100),
        'perception' => $faker->numberBetween(0,100),
        'willpower' => $faker->numberBetween(0,100),
        'fellowship' => $faker->numberBetween(0,100),
        'influence' => $faker->numberBetween(0,100),
    ];
});
