<?php

use Faker\Generator as Faker;

$factory->define(App\Race::class, function (Faker $faker) {
    return [
        'name' => $faker->colorName,
        'availability' => $faker->numberBetween(0, 10)
    ];
});
