<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actions', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();


            $table->integer('character_id');
            $table->integer('item_id')->nullable();
            $table->integer('skill_id')->nullable();
            $table->integer('room_id');

            $table->text('text');
            $table->enum('type', ['action', 'master', 'moderation', 'dice']);
            $table->string('tag');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('actions');
    }
}
