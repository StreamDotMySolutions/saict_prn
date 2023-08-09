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
        Schema::table('prn_nomination_results', function (Blueprint $table) {
            //
            $table->string('status')->nullable()->after('party_name');
            $table->string('verifier1')->nullable();
            $table->string('verifier2')->nullable();
            $table->string('chief_verifier')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('prn_nomination_results', function (Blueprint $table) {
            $table->dropColumn('status');
            $table->dropColumn('verifier1');
            $table->dropColumn('verifier2');
            $table->dropColumn('chief_verifier');
        });
    }
};
