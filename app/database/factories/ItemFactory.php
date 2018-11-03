<?php

use Faker\Generator as Faker;

$factory->define(App\Item::class, function (Faker $faker) {
    return [
        "name" => $faker->domainName,
        "description" => $faker->text(100)
    ];
});
