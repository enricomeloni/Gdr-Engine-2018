<?php

use Faker\Generator as Faker;

$factory->define(App\Room::class, function (Faker $faker) {
    return [
        "name" => $faker->city,
        "description" => $faker->text,
        "image_url" => ""
    ];
});
