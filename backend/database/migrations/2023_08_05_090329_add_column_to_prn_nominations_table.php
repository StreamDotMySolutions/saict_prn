<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('prn_nominations', function (Blueprint $table) {
            $table->integer('candidate_vote')->nullable()->default(0)->after('candidate_entry');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('prn_nominations', function (Blueprint $table) {
            $table->dropColumn('candidate_vote');
        });
    }
};
