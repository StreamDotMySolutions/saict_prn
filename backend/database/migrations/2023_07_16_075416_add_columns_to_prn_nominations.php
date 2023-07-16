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
            //
            $table->integer('prn_region_id')->nullable();
            $table->integer('prn_coalition_id')->nullable();
            $table->integer('prn_party_id')->nullable();
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
                $table->dropColumn('prn_region_id');
                $table->dropColumn('prn_coalition_id');
                $table->dropColumn('prn_party_id');
        });
    }
};
