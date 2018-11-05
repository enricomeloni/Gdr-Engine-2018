<?php

use Illuminate\Database\Seeder;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Item::class, 50)->make()->each(function (App\Item $item) {
            $characters = App\Character::inRandomOrder()->take(5);

            $characters->each(function(App\Character $character) use ($item) {
                $character->inventory()->save($item);
            });
        });
    }
}
