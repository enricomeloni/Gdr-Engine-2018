<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(CharacterSeeder::class);
        $this->call(RaceSeeder::class);
        $this->call(GuildSeeder::class);
        $this->call(PcClassSeeder::class);
        $this->call(SkillSeeder::class);
        $this->call(ItemSeeder::class);
        $this->call(RoomSeeder::class);
    }
}
