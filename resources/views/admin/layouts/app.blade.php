<!doctype html>
<html lang="en">

@include('admin.partials.head')

<body class="bg-theme bg-theme2">
    <!--wrapper-->
    <div class="wrapper">

        <!--sidebar wrapper -->
        @include('admin.partials.sidebar')
        <!--end sidebar wrapper -->

        <!--start header -->
        @include('admin.partials.header')
        <!--end header -->

        <!--start page wrapper -->
        <div class="page-wrapper">
            @yield('page-content')
        </div>
        <!--end page wrapper -->

        <!--start overlay-->
        <div class="overlay toggle-icon"></div>
        <!--end overlay-->

        <!--Start Back To Top Button-->
        <a href="javaScript:;" class="back-to-top">
            <i class='bx bxs-up-arrow-alt'></i></a>
        <!--End Back To Top Button-->

        @include('admin.partials.footer')
    </div>
    <!--end wrapper-->

    <!--start switcher-->
    @include('admin.partials.theme-customizer')
    <!--end switcher-->

    <!--scripts files start-->
    @include('admin.partials.scripts')
    <!--scripts files end -->

</body>

</html>
