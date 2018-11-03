<?php

use Faker\Generator as Faker;

$factory->define(App\RaceRole::class, function (Faker $faker) {
    return [
        "name" => $faker->colorName
    ];
});
