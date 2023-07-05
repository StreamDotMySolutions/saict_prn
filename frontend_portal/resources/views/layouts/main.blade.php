<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PRU15 Negeri</title>

    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="/css/carousel.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
    <link rel="stylesheet" href="{{ asset('css/pagination.css') }}">
    <link rel="stylesheet" href="{{ asset('css/progressbar.css') }}">

</head>
<body>


<header>
    @include('layouts.navbar')
</header>
<main>
    <div class="container">
        @yield('container')
    </div>
</main>
<footer>
    @include('layouts.footer')
</footer>

<script src="/js/bootstrap.bundle.min.js"></script>

</body>
</html>


