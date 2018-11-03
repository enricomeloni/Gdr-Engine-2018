<?php

use Illuminate\Database\Seeder;

class RaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Race::class, 5)->create()->each(function(App\Race $race) {
            $race->roles()->saveMany(factory(App\RaceRole::class, 3)->make());
        });
    }
}
