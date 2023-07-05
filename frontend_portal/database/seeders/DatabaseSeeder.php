<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Seat;
use App\Models\State;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        State::create([

            'state_name'=>'Kedah',
        ]);
        State::create([

            'state_name'=>'Kelantan',
        ]);
        
        State::create([

            'state_name'=>'Terengganu',
        ]);
        
        State::create([

            'state_name'=>'Pulau Pinang',
        ]);
        
        State::create([

            'state_name'=>'Selangor',
        ]);
        
        State::create([

            'state_name'=>'Negeri Sembilan',
        ]);

        //SELANGOR
        Seat::create([

            'state_id' => 5,
            'code'=>'N01',
            'name'=>'Sungai Air Tawar'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N02',
            'name'=>'Sabak'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N03',
            'name'=>'Sungai Panjang'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N04',
            'name'=>'Sekinchan'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N05',
            'name'=>'Hulu Bernam'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N06',
            'name'=>'Kuala Kubu Baharu'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N07',
            'name'=>'Batang Kali'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N08',
            'name'=>'Sungai Burong'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N09',
            'name'=>'Permatang'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N10',
            'name'=>'Bukit Melawati'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N12',
            'name'=>'Jeram'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N13',
            'name'=>'Kuang'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N14',
            'name'=>'Rawang'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N15',
            'name'=>'Taman Templer'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N16',
            'name'=>'Sungai Tua'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N11',
            'name'=>'Ijok'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N17',
            'name'=>'Gombak Setia'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N18',
            'name'=>'Hulu Kelang'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N19',
            'name'=>'Bukit Antarabangsa'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N20',
            'name'=>'Lembah Jaya'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N21',
            'name'=>'Lembah Jaya'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N22',
            'name'=>'Teratai'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N23',
            'name'=>'Dusun Tua'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N24',
            'name'=>'Semenyih'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N25',
            'name'=>'Kajang'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N26',
            'name'=>'Sungai Ramal'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N27',
            'name'=>'Balakong'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N28',
            'name'=>'Seri Kembangan'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N29',
            'name'=>'Seri Serdang'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N30',
            'name'=>'Kinrara'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N31',
            'name'=>'Subang Jaya'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N32',
            'name'=>'Seri Setia'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N33',
            'name'=>'Taman Medan'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N34',
            'name'=>'Bukit Gasing'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N35',
            'name'=>'Kampung Tunku'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N36',
            'name'=>'Bandar Utama'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N37',
            'name'=>'Bukit Lanjan'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N38',
            'name'=>'Paya Jaras'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N39',
            'name'=>'Kota Damansara'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N40',
            'name'=>'Kota Anggerik'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N41',
            'name'=>'Batu Tiga'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N42',
            'name'=>'Meru'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N43',
            'name'=>'Sementa'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N44',
            'name'=>'Selat Kelang'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N45',
            'name'=>'Bandar Baru Kelang'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N46',
            'name'=>'Pelabuhan Kelang'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N47',
            'name'=>'Pandaman'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N48',
            'name'=>'Sentosa'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N49',
            'name'=>'Sungai Kandis'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N50',
            'name'=>'Kota Kemuning'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N51',
            'name'=>'Sijankang'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N52',
            'name'=>'Banting'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N53',
            'name'=>'Morib'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N54',
            'name'=>'Tanjung Sepat'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N55',
            'name'=>'Dengkil'
        ]);
        Seat::create([

            'state_id' => 5,
            'code'=>'N56',
            'name'=>'Sungai Pelek'
        ]);

        //KEDAH
        Seat::create([

            'state_id' => 1,
            'code'=>'N01',
            'name'=>'Ayer Hangat'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N02',
            'name'=>'Kuah'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N03',
            'name'=>'KOta Seputeh'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N04',
            'name'=>'Ayer Hitam'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N05',
            'name'=>'Bukit Kayu Hitam'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N06',
            'name'=>'Jitra'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N07',
            'name'=>'Kuala Nerang'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N08',
            'name'=>'Pedu'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N09',
            'name'=>'Bukit Lada'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N10',
            'name'=>'Bukit Pinang'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N12',
            'name'=>'Derga'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N13',
            'name'=>'Suka Menanti'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N14',
            'name'=>'Kota Darul Aman'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N15',
            'name'=>'Alor Mengkudu'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N16',
            'name'=>'Anak Bukit'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N11',
            'name'=>'Kubang Rotan'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N17',
            'name'=>'Pengkalan Kundor'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N18',
            'name'=>'Tokai'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N19',
            'name'=>'Sungai Tiang'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N20',
            'name'=>'Sungai Limau'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N21',
            'name'=>'Guar Chempedak'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N22',
            'name'=>'Gurun'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N23',
            'name'=>'Belantek'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N24',
            'name'=>'Jeneri'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N25',
            'name'=>'Bukit Selambau'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N26',
            'name'=>'Tanjong Dawai'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N27',
            'name'=>'Pandai Merdeka'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N28',
            'name'=>'Bakar Arang'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N29',
            'name'=>'Sidam'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N30',
            'name'=>'Bayu'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N31',
            'name'=>'Kupang'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N32',
            'name'=>'Kuala Ketil'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N33',
            'name'=>'Merbau Pulas'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N34',
            'name'=>'Lunas'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N35',
            'name'=>'Kulim'
        ]);
        Seat::create([

            'state_id' => 1,
            'code'=>'N36',
            'name'=>'Bandar Baharu'
        ]);

        //PulauPinang
        Seat::create([

            'state_id' => 4,
            'code'=>'N01',
            'name'=>'Penaga'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N02',
            'name'=>'Bertam'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N03',
            'name'=>'Pinang Tunggal'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N04',
            'name'=>'Permatang Berangan'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N05',
            'name'=>'Sungai Dua'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N06',
            'name'=>'Telok Ayer Tawar'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N07',
            'name'=>'Sungai Puyu'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N08',
            'name'=>'Bagan Jermal'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N09',
            'name'=>'Bagan Dalam'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N10',
            'name'=>'Sebarang Jaya'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N11',
            'name'=>'Permatang Pasir'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N12',
            'name'=>'Penanti'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N13',
            'name'=>'Berapit'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N14',
            'name'=>'Machang Bubok'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N15',
            'name'=>'Padang Lalang'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N16',
            'name'=>'Perai'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N17',
            'name'=>'Bukit Tengah'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N18',
            'name'=>'Bukit Tambun'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N19',
            'name'=>'Jawi'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N20',
            'name'=>'Sungai Bakap'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N21',
            'name'=>'Sungai Acheh'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N22',
            'name'=>'Tanjung Bungah'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N23',
            'name'=>'Air Putih'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N24',
            'name'=>'Kebun Bunga'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N25',
            'name'=>'Pulau Tikus'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N26',
            'name'=>'Padang Kota'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N27',
            'name'=>'Pengakalan Kota'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N28',
            'name'=>'Komtar'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N29',
            'name'=>'Datuk Keramat'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N30',
            'name'=>'Sungai Pinang'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N31',
            'name'=>'Batu Lancang'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N32',
            'name'=>'Seri Delima'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N33',
            'name'=>'Air Itam'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N34',
            'name'=>'Paya Terubong'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N35',
            'name'=>'Batu Uban'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N36',
            'name'=>'Pantai Jerejak'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N37',
            'name'=>'Batu Maung'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N38',
            'name'=>'Bayan Lepas'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N39',
            'name'=>'Pulau Bentong'
        ]);
        Seat::create([

            'state_id' => 4,
            'code'=>'N40',
            'name'=>'Telok Bahang'
        ]);
        
        //N9
        Seat::create([

            'state_id' => 6,
            'code'=>'N01',
            'name'=>'Chennah'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N02',
            'name'=>'Pertang'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N03',
            'name'=>'Sungai Lui'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N04',
            'name'=>'Kelawang'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N05',
            'name'=>'Serting'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N06',
            'name'=>'Palong'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N07',
            'name'=>'Jeram Padang'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N08',
            'name'=>'Bahau'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N09',
            'name'=>'Lenggeng'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N10',
            'name'=>'Nilai'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N11',
            'name'=>'Lobak'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N12',
            'name'=>'Temiang'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N13',
            'name'=>'Sikamat'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N14',
            'name'=>'Ampangan'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N15',
            'name'=>'Juasseh'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N16',
            'name'=>'Seri Menanti'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N17',
            'name'=>'Senaling'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N18',
            'name'=>'Pilah'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N19',
            'name'=>'Johol'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N20',
            'name'=>'Labu'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N21',
            'name'=>'Bukit Kepayang'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N22',
            'name'=>'Rahang'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N23',
            'name'=>'Mambau'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N24',
            'name'=>'Seremban Jaya'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N25',
            'name'=>'Paroi'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N26',
            'name'=>'Chembong'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N27',
            'name'=>'Rantau'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N28',
            'name'=>'Kota'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N29',
            'name'=>'Chuah'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N30',
            'name'=>'Lukut'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N31',
            'name'=>'Bagan Pinang'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N32',
            'name'=>'Linggi'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N33',
            'name'=>'Sri Tanjung'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N34',
            'name'=>'Gemas'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N35',
            'name'=>'Gemencheh'
        ]);
        Seat::create([

            'state_id' => 6,
            'code'=>'N36',
            'name'=>'Repah'
        ]);

        //KELANTAN
        Seat::create([

            'state_id' => 2,
            'code'=>'N01',
            'name'=>'Pengkalan Kubor'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N02',
            'name'=>'Kelaboran'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N03',
            'name'=>'Pasir Pekan'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N04',
            'name'=>'Wakaf Bharu'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N05',
            'name'=>'Kijang'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N06',
            'name'=>'Chempaka'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N07',
            'name'=>'Panchor'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N08',
            'name'=>'Tanjong Mas'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N09',
            'name'=>'Kota Lama'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N10',
            'name'=>'Bunut Payong'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N11',
            'name'=>'Tendong'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N12',
            'name'=>'Pengkalan Pasir'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N13',
            'name'=>'Meranti'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N14',
            'name'=>'Chetok'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N15',
            'name'=>'Gual Periok'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N16',
            'name'=>'Apam Putra'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N17',
            'name'=>'Salor'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N18',
            'name'=>'Pasir Tumboh'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N19',
            'name'=>'Demit'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N20',
            'name'=>'Tawang'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N21',
            'name'=>'Pantai Irama'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N22',
            'name'=>'Jelawat'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N23',
            'name'=>'Melor'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N24',
            'name'=>'Kadok'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N25',
            'name'=>'Kok Lanas'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N26',
            'name'=>'Bukit Panau'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N27',
            'name'=>'Gual Ipoh'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N28',
            'name'=>'Kemahang'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N29',
            'name'=>'Selising'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N30',
            'name'=>'Limbongan'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N31',
            'name'=>'Semerak'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N32',
            'name'=>'Gaal'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N33',
            'name'=>'Pulai Chondong'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N34',
            'name'=>'Temangan'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N35',
            'name'=>'Kemuning'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N36',
            'name'=>'Bukit Bunga'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N37',
            'name'=>'Ayer Lanas'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N38',
            'name'=>'Kuala Balah'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N39',
            'name'=>'Mengkebang'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N40',
            'name'=>'Guchil'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N41',
            'name'=>'Manek Urai'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N42',
            'name'=>'Dabong'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N43',
            'name'=>'Nenggiri'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N44',
            'name'=>'Paloh'
        ]);
        Seat::create([

            'state_id' => 2,
            'code'=>'N45',
            'name'=>'Galas'
        ]);

        //TERENGGANU
        
        Seat::create([

            'state_id' => 3,
            'code'=>'N01',
            'name'=>'Kuala Besut'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N02',
            'name'=>'Kota Putera'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N03',
            'name'=>'Jertih'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N04',
            'name'=>'Hulu Besut'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N05',
            'name'=>'Jabi'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N06',
            'name'=>'Permaisuri'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N07',
            'name'=>'Langkap'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N08',
            'name'=>'Batu Rakit'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N09',
            'name'=>'Tepuh'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N10',
            'name'=>'Buluh Gading'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N11',
            'name'=>'Seberang Takir'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N12',
            'name'=>'Bukit Tunggal'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N13',
            'name'=>'Wakaf Mempelam'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N14',
            'name'=>'Bandar'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N15',
            'name'=>'Ladang'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N16',
            'name'=>'Batu Buruk'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N17',
            'name'=>'Alur Limbat'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N18',
            'name'=>'Bukit Payung'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N19',
            'name'=>'Ru Rendang'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N20',
            'name'=>'Pengkalan Berangan'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N21',
            'name'=>'Telemung'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N22',
            'name'=>'Manir'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N23',
            'name'=>'Kuala Berang'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N24',
            'name'=>'Ajil'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N25',
            'name'=>'Bukit Besi'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N26',
            'name'=>'Rantau Abang'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N27',
            'name'=>'Sura'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N28',
            'name'=>'Paka'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N29',
            'name'=>'Kemasik'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N30',
            'name'=>'Kijal'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N31',
            'name'=>'Cukai'
        ]);
        Seat::create([

            'state_id' => 3,
            'code'=>'N32',
            'name'=>'Air Putih'
        ]);
        
    }
}
