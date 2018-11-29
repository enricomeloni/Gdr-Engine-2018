<?php
/**
 * Created by PhpStorm.
 * User: enric
 * Date: 28/10/2018
 * Time: 18.10
 */

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Character::class, function (Faker $faker) {

    return [
        'name' => $faker->name,
        'middle_name' => $faker->name,
        'last_name' => $faker->lastName,

        'user_id' => factory(App\User::class),
    ];
});

