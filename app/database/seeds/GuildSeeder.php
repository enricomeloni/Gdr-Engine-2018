<?php

use Illuminate\Database\Seeder;

class GuildSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Guild::class, 5)->create()->each(function(App\Guild $guild) {
            $guild->roles()->saveMany(factory(App\GuildRole::class, 3)->make());
        });
    }
}
