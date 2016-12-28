<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeamTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('team', function (Blueprint $table) {

            $table->increments('id');
            $table->string('name');
            $table->integer('score')->default(0);
            $table->integer('minimatch_score')->default(0);
            $table->integer('wins')->default(0);

        });

        // We only need two for the lifetime of this app. Creat them here
        DB::table('team')->insert([
            [
                'id' => 1,
                'name' => 'keha',
            ],
            [
                'id' => 2,
                'name' => 'vaim',
            ]
        ]);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('team');
    }
}
