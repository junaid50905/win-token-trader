    <!-- Bootstrap JS -->
    <script src="{{ asset('UI/admin/assets') }}/js/bootstrap.bundle.min.js"></script>
    <!--plugins-->
    <script src="{{ asset('UI/admin/assets') }}/js/jquery.min.js"></script>
    <script src="{{ asset('UI/admin/assets') }}/plugins/simplebar/js/simplebar.min.js"></script>
    <script src="{{ asset('UI/admin/assets') }}/plugins/metismenu/js/metisMenu.min.js"></script>
    <script src="{{ asset('UI/admin/assets') }}/plugins/perfect-scrollbar/js/perfect-scrollbar.js"></script>
    <script src="{{ asset('UI/admin/assets') }}/plugins/apexcharts-bundle/js/apexcharts.min.js"></script>
    <script src="{{ asset('UI/admin/assets') }}/plugins/datatable/js/jquery.dataTables.min.js"></script>
    <script src="{{ asset('UI/admin/assets') }}/plugins/datatable/js/dataTables.bootstrap5.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#Transaction-History').DataTable({
                lengthMenu: [
                    [6, 10, 20, -1],
                    [6, 10, 20, 'Todos']
                ]
            });
        });
    </script>
    <script src="{{ asset('UI/admin/assets') }}/js/index.js"></script>
    <!--app JS-->
    <script src="{{ asset('UI/admin/assets') }}/js/app.js"></script>
    <script>
        new PerfectScrollbar('.product-list');
        new PerfectScrollbar('.customers-list');
    </script>