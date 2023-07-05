@extends('layouts.main')

@section('container')

<div class="container mt-5">
    <div class="row">
        <div class="col-lg-6">
            <h3>Pilihan Raya Utama 15</h3>
        </div>
    </div>

    <div class="container bg-light text-center">
        <div class="row">
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 my-2">
                <a href="https://mypru15.rtm.gov.my/">
                    <img src="img/flags/Malaysia.png" class="img-fluid" width="30%" title="Malaysia">
                </a>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 my-2">
                <a href="https://yokngundi.rtm.gov.my/">
                    <img src='img/flags/Johor.png' class="img-fluid" width="30%" title='Johor'>
                </a>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 my-2">
                <a href="#">
                    <img src='img/flags/Sarawak.png' class="img-fluid" width="30%" title='Sarawak'>
                </a>
            </div>
        </div>
    </div>

    <div class="row mt-5">
        <div class="col-lg-6">
            <h3>Pilihan Raya Negeri</h3>
        </div>
    </div>

    <div class="container bg-light text-center">
        <div class="row">
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 my-2">
                <a href="/selangor">
                    <img src='img/flags/Selangor.png' class="img-fluid" width="30%" width='75%' title='Selangor'>
                </a>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 my-2">
                <a href="pulau_pinang">
                    <img src="img/flags/PP.png" class="img-fluid" width="30%" title="PP">
                </a>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 my-2">
                <a href="/n9">
                    <img src='img/flags/NS.png' class="img-fluid" width="30%" title='NS'>
                </a>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 my-2">
                <a href="/kedah">
                    <img src="img/flags/Kedah.png" class="img-fluid" width="30%" title="Kedah">
                </a>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 my-2">
                <a href="/terengganu">
                    <img src="img/flags/Terengganu.png" class="img-fluid" width="30%" title="Terengganu">
                </a>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 my-2">
                <a href="/kelantan">
                    <img src="img/flags/Kelantan.png" class="img-fluid" width="30%" title="Kelantan">
                </a>
            </div>
        </div>
    </div>
    <hr class="featurette-divider">

    <div class="row">
        <div class="col-lg-6">
            <h3>Statistik Keputusan</h3>
        </div>
    </div>
    
    <div class="container">
        Pakatan Harapan
        <div class="progress mb-4" role="progressbar" aria-label="PH" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 25px">
            <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 65%; background-color: rgb(216, 35, 43)"></div>
        </div>

        Perikatan Nasional
        <div class="progress mb-4" role="progressbar" aria-label="PN" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 25px">
            <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 45%; background-color:  rgb(0, 49, 82)"></div>
        </div>

        Barisan Nasional
        <div class="progress mb-4" role="progressbar" aria-label="Bn" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 25px">
            <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 25%; background-color: rgb(0, 0, 128)"></div>
        </div>
    </div>



    <hr class="featurette-divider">
</div>
@endsection


