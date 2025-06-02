@section('title')
    404 | Not found
@endsection

@extends('admin.layouts.app')


@section('page-content')
    <div class="page-content">
        <div class="container" style="height: 100vh">
            <div class="py-5">
                <div class="row g-0">
                    <div class="col col-xl-5">
                        <div class="card-body p-4">
                            <h1 class="display-1"><span class="text-white">4</span><span class="text-white">0</span><span
                                    class="text-white">4</span></h1>
                            <h2 class="font-weight-bold display-4">Lost in Space</h2>
                            <p>You have reached the edge of the universe.
                                <br>The page you requested could not be found.
                                <br>Dont'worry and return to the previous page.
                            </p>
                            <div class="mt-5"> 
                              <a href="{{ route('dashboard') }}" class="btn btn-light btn-lg px-md-5 radius-30">Go
                                    Home</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7">
                        <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/03/shutterstock_1338315902.png"
                            class="img-fluid" alt="">
                    </div>
                </div>
                <!--end row-->
            </div>
        </div>
    </div>
@endsection
