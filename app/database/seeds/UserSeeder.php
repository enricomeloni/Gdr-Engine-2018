<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new App\User();
        $user->name = "admin";
        $user->password = bcrypt("alpine");
        $user->email = "admin@admin.it";
        $user->save();

        $pc = factory(App\Character::class)->create();
        $characteristics = factory(App\CharacteristicsSet::class)->make();
        $pc->characteristics()->save($characteristics);
        $user->characters()->save($pc);
    }
}
