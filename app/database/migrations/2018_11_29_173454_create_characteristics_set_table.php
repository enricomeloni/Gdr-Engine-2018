<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCharacteristicsSetTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('characteristics_sets', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();

            $table->integer('character_id');

            //characteristics columns
            $table->integer('weapon_skill');
            $table->integer('balistic_skill');
            $table->integer('strength');
            $table->integer('toughness');
            $table->integer('agility');
            $table->integer('intelligence');
            $table->integer('perception');
            $table->integer('willpower');
            $table->integer('fellowship');
            $table->integer('influence');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('characteristics_sets');
    }
}
