@extends('layouts.main')

@section('container')
<div class="container mt-5">
    <div class="row">
        <h2 class="text-center">KELANTAN</h2>
    </div>

    <div class="progress-stacked mt-3">
        <div class="progress progress-height" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
            <div class="progress-bar overflow-visible text-light" style="background-color: rgb(216, 35, 43)">PH</div>
        </div>
        <div class="progress progress-height" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
            <div class="progress-bar overflow-visible text-light" style="background-color: rgb(0, 49, 82)">PN</div>
        </div>
        <div class="progress progress-height" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
            <div class="progress-bar overflow-visible text-light" style=" background-color: rgb(0, 0, 128)">BN</div>
        </div>
    </div>
    

    <div class="row mt-3">
        <div class="col-md-6">
            <b>Keputusan</b>

            <div class="d-flex justify-content-between mt-3">
                <form action="{{ route('kelantan.index') }}" method="GET" class="mb-3">
                    <div class="input-group">
                        <input type="text" name="search" class="form-control" placeholder="Search" value="{{ request('search') }}">
                        <button type="submit" class="btn btn-dark">Search</button>
                    </div>
                </form>
            </div>
            
            <div class="row mt-3">
                <div class="col-md-8">
                    @if ($seats->isEmpty())
                        <p class="text text-muted">Carian anda tidak dijumpai.</p>
                    @else
                    <table class="table table-bordered">
                        <tbody>
                            @foreach ($seats as $seat )
                                <tr>
                                    <td>
                                        {{ $seat->code }}
                                    </td>
                                    <td>
                                        <!-- trigger modal -->
                                        <a href="#" class="text-dark text-decoration-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop{{ $seat->id }}">
                                            {{ $seat->name }}
                                        </a>
    
                                        <!-- Modal -->
                                        <div class="modal fade" id="staticBackdrop{{ $seat->id }}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ $seat->code }} {{ $seat->name }}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">Bil.</th>
                                                    <th scope="col">Calon</th>
                                                    <th scope="col">Gabungan</th>
                                                    <th scope="col">Kiraan Undi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td>1.</td>
                                                    <td>DATUK ABD RAHMAN BIN BAKRI</td>
                                                    <td>Barisan Nasional</td>
                                                    <td>123</td>
                                                    </tr>
                                                    <tr>
                                                    <td>2.</td>
                                                    <td>DATUK ALI BIN ABU</td>
                                                    <td>Pakatan Harapan</td>
                                                    <td>45</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>    
                    </table>
                    {{ $seats->links() }}
                    @endif
                </div>
            </div>
        </div>
        <div class="col-md-6 mt-4">
            <div class="card" style="width: 30rem;">
                <img src="/img/kelantan-map.png" class="card-img-top" alt="Kelantan">
            </div>
        </div>
    </div>
</div>


<hr class="featurette-divider">

<script>
    // Get the modal body and image elements
    var modalBody = document.querySelector('.modal-body');
    var modalImage = modalBody.querySelector('img');
    
    // Update the image height whenever the modal is resized
    window.addEventListener('resize', function() {
      var maxHeight = modalBody.offsetHeight - 20; // Subtract any padding or margins
    modalImage.style.maxHeight = maxHeight + 'px';
    });
    
    // Trigger the resize event once to set the initial image height
    window.dispatchEvent(new Event('resize'));
</script>


@endsection