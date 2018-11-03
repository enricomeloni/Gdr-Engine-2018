<?php

use Faker\Generator as Faker;

$factory->define(App\Guild::class, function (Faker $faker) {
    return [
        'name' => $faker->colorName,
        'availability' => $faker->numberBetween(0, 10)
    ];
});
