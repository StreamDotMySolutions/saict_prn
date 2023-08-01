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
        Schema::create('prn_nomination_results', function (Blueprint $table) {
            $table->id();

            $table->integer('state_id')->nullable();
            $table->integer('prn_region_id')->nullable();
            $table->integer('prn_party_id')->nullable();
            $table->integer('prn_coalition_id')->nullable();
            $table->integer('prn_nomination_id')->nullable();

            $table->integer('official_count')->nullable();
            $table->integer('unofficial_count')->nullable();

            $table->string('sheet_name')->nullable();
            $table->string('state_name')->nullable();  
            $table->string('region_name')->nullable();
            $table->string('region_code')->nullable();
            $table->integer('candidate_entry')->nullable();
            $table->string('candidate_name')->nullable();
            $table->string('party_coalition')->nullable();
            $table->string('party_name')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prn_nomination_results');
    }
};
