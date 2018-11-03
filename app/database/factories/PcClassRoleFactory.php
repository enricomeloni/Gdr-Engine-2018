<?php

use Faker\Generator as Faker;

$factory->define(App\PcClassRole::class, function (Faker $faker) {
    return [
        "name" => $faker->colorName
    ];
});
