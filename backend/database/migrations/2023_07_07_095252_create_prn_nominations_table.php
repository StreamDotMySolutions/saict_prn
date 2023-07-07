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

        Schema::create('prn_nominations', function (Blueprint $table) {
            $table->id();
            $table->string('state_zone')->nullable();
            $table->string('state_name')->nullable();  
            
            $table->string('region_name')->nullable();
            $table->string('region_code')->nullable();

            $table->string('candidate_title')->nullable();
            $table->string('candidate_name')->nullable();
            $table->string('candidate_marital_status')->nullable();
            $table->string('candidate_career')->nullable();
            $table->string('candidate_party_job')->nullable();

            $table->string('party_coalition')->nullable();
            $table->string('party_name')->nullable();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prn_nominations');
    }
};
