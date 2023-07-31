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
        Schema::create('prn_region_details', function (Blueprint $table) {
            $table->id();
            $table->integer('prn_region_id')->nullable();

            $table->string('state_name')->nullable();  
            $table->string('region_name')->nullable();
            $table->string('region_code')->nullable();

            $table->integer('registred_voters')->nullable();
            $table->integer('votes')->nullable();
            $table->string('percentage')->nullable(); 
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
        Schema::dropIfExists('prn_region_details');
    }
};
