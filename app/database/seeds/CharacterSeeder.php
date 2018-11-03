<?php

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
        factory(App\Character::class, 5)->create()->each(function(App\Character $character) {

            $items = factory(App\Item::class, 5)->make();

            $items->each(function($item) use ($character) {
                $character->inventory()->save($item, ['quantity' => 3]);
            });

            //$character->items()->attach($toAttach);
        });
    }
}
