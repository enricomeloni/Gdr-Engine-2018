<?php

use Illuminate\Database\Seeder;

class PlayingCharacterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\PlayingCharacter::class, 5)->create();
    }
}
