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
        Schema::create('prn_verifiers', function (Blueprint $table) {
            $table->id();

            $table->integer('state_id')->nullable();
            $table->integer('prn_region_id')->nullable();
   
            $table->boolean('verifier1')->default(false);
            $table->boolean('verifier2')->default(false);
            $table->boolean('master_verifier')->default(false);

            $table->string('sheet_name')->nullable();
            $table->string('state_name')->nullable();  
            $table->string('region_name')->nullable();
            $table->string('region_code')->nullable();
    
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
        Schema::dropIfExists('verifiers');
    }
};
