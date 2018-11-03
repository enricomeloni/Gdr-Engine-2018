<?php

use Faker\Generator as Faker;

$factory->define(App\GuildRole::class, function (Faker $faker) {
    return [
        'name' => $faker->colorName
    ];
});
