<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Client;

class ClientTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Client::truncate();

        $clients = [
            ['id' => 1, 'name' => 'security', 'description' =>'Security Dept'],
            ['id' => 2, 'name' => 'network', 'description' =>'Network Dept'],
            ['id' => 3, 'name' => 'programming', 'description' =>'Programming Dept'],
            ['id' => 4, 'name' => 'design', 'description' =>'Design Dept'],
            ['id' => 5, 'name' => 'project', 'description' =>'Project Dept'],

        ];
    
        Client::insert($clients);
    }
}
