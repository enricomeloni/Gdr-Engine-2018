<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlayingCharactersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('playing_characters', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('user_id');

            $table->string('name');
            $table->string('middle_name');
            $table->string('last_name');

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
        Schema::dropIfExists('playing_characters');
    }
}
