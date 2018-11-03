<?php

use Illuminate\Database\Seeder;

class PcClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\PcClass::class, 5)->create()->each(function(App\PcClass $pcClass) {
           $pcClass->pcClassRoles()->saveMany(factory(App\PcClassRole::class, 3)->make());
        });
    }
}
