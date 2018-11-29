<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RemoveCharacteristicsFromCharactersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('characters', function (Blueprint $table) {
            $table->dropColumn('weapon_skill');
            $table->dropColumn('balistic_skill');
            $table->dropColumn('strength');
            $table->dropColumn('toughness');
            $table->dropColumn('agility');
            $table->dropColumn('intelligence');
            $table->dropColumn('perception');
            $table->dropColumn('willpower');
            $table->dropColumn('fellowship');
            $table->dropColumn('influence');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('characters', function (Blueprint $table) {
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
}
