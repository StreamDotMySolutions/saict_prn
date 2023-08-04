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
        Schema::table('prn_region_details', function (Blueprint $table) {
            $table->string('candidate_name')->nullable()->after('id');
            $table->string('candidate_coalition')->nullable()->after('id');
            $table->string('candidate_party')->nullable()->after('id');
            $table->string('candidate_votes')->nullable()->after('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('prn_region_details', function (Blueprint $table) {
            $table->dropColumn('candidate_name');
            $table->dropColumn('candidate_coalition');
            $table->dropColumn('candidate_party');
            $table->dropColumn('candidate_votes');
        });
    }
};
