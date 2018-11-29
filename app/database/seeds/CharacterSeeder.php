<?php

use App\Character;
use Illuminate\Database\Seeder;

class CharacterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Character::class, 5)->create()->each(function(Character $character) {


            $characteristics = factory(App\CharacteristicsSet::class)->make();
            $character->characteristics()->save($characteristics);
        });
    }
}
