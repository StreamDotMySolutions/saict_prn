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
        Schema::create('prn_nomination_result_logs', function (Blueprint $table) {
            $table->id();
            $table->integer('prn_nomination_id')->nullable();
            $table->string('status')->nullable();
            $table->string('last_updated')->nullable();
            $table->string('candidate_name')->nullable();
            $table->string('party_coalition')->nullable();
            $table->string('party_name')->nullable();
            $table->string('official_count')->nullable();
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
        Schema::dropIfExists('prn_nomination_result_logs');
    }
};
