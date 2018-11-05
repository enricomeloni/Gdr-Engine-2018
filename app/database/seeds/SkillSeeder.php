<?php

use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Skill::class, 50)->make()->each(function (App\Skill $skill) {
            $characters = App\Character::inRandomOrder()->take(5);

            $characters->each(function($character) use ($skill) {
                $character->skills()->save($skill);
            });
        });
    }
}
