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
        Schema::create('prn_logs', function (Blueprint $table) {
            $table->id();
            $table->integer('prn_region_detail_id')->nullable();
            $table->string('status')->nullable();
            $table->string('last_updated')->nullable();
            $table->string('candidate_name')->nullable();
            $table->string('candidate_coalition')->nullable();
            $table->string('candidate_party')->nullable();
            $table->string('candidate_votes')->nullable();
            $table->integer('majority')->nullable();
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
        Schema::dropIfExists('prn_logs');
    }
};
