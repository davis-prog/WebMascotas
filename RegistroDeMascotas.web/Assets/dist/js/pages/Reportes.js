 
const pageReporte = {
    init: function () {

        $('#pieChartE').hide();
        $('#pieChartP').show();

        $('#checkbox-reportar').on('change.bootstrapSwitch', pageReporte.events.changeCheckbox);
        $("input[type='radio']").click(pageReporte.events.btnRadioButtom);


        $("input[data-bootstrap-switch]").each(function () {
            $(this).bootstrapSwitch('state', $(this).prop('unchecked'));
        });

        //Date picker 
        var dateNow = new Date();
        $('#txt-fecha').datetimepicker({
            format: 'YYYY',
            language: 'es',
            defaultDate: dateNow
        });

        $('#txt-fecha2').datetimepicker({
            format: 'YYYY',
            language: 'es',
            defaultDate: dateNow,
        });

        $("#btn-anio").click(function (e) {
            var div = $('#divChart');

            div.html('');

            setTimeout(function () {
                var canvas = '<canvas id="stackedBarChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>' ;

                div.html(canvas);
                pageReporte.methods.ReporteMascotasMeses();

            }, 1000);

          
        });


        pageReporte.methods.ReporteMascotasDias();
        pageReporte.methods.ReporteMascotasP();
        pageReporte.methods.ReporteTotales();
        pageReporte.methods.ReporteMascotasMeses();
    },
    data: {
        DataTableLanguage: {
            "paginate": {
                "first": '<i class="fa fa-angle-double-left" aria-hidden="true"></i>',
                "last": '<i class="fa fa-angle-double-left" aria-hidden="true"></i>',
                "next": '<i class="fa fa-angle-right" aria-hidden="true"></i>',
                "previous": '<i class="fa fa-angle-left" aria-hidden="true"></i>'
            },
            "lengthMenu": "Registros por página: _MENU_",
            "search": "Buscar:",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "emptyTable": "Sin datos",
            "zeroRecords": "No existen coindicencias",
            "info": "Mostrando _START_ al _END_ de _TOTAL_ registros",
            "infoEmpty": "Mostrando 0 al 0 registros",
            "infoFiltered": "(Filtrado de _MAX_ registros en total)",
            "select": {
                "rows": {
                    "_": "%d registros seleccionados",
                    "0": "",
                    "1": "1 registro seleccionado"
                }
            }
        },
        listarMascotasDias: [],
        listaMascotasP: [],
        listaMascotasE: [],
        listaMascotasMesesE: [],
        listaMascotasMesesP: [],
        listaTotales: [],
    },
    events: {
        changeCheckbox: function (e) {
            var value = e.target.checked;
            if (value) {
                $('#titulo1').html("Distritos con Mascotas Encontradas");

                $('#pieChartE').show();
                $('#pieChartP').hide();
                pageReporte.methods.ReporteMascotasE();

            } else {
                $('#titulo1').html("Distritos con Mascotas Perdidas");
                pageReporte.methods.ReporteMascotasP();
                $('#pieChartE').hide();
                $('#pieChartP').show();

            }
        },
        btnRadioButtom: function () {
            var radioValue = $("input[name='options']:checked").val();
            if (radioValue) {
                pageReporte.methods.ReporteMascotasDias();
            }
        }
    },
    sweetAlert: {
        Init: function () {
            var Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });

            return Toast;
        },
        swalDefaultSuccess: function (title) {
            this.Init().fire({
                icon: 'success',
                title: title
            });
        },
        swalDefaultInfo: function (title) {
            this.Init().fire({
                icon: 'info',
                title: title
            })
        },
        swalDefaultError: function (title) {
            this.Init().fire({
                icon: 'error',
                title: title
            })
        },
        swalDefaultWarning: function (title) {
            this.Init().fire({
                icon: 'warning',
                title: title
            })
        },
        swalDefaultQuestion: function (title, confirmed) {
            Swal.fire({
                title: title,
                text: "¡No podrás revertir esto!",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminarlo'
            }).then((result) => {
                if (result.isConfirmed) {
                    confirmed();
                }
            })
        },
    },
    methods: {
        ReporteMascotasP: function () {
            let ID_Usuario = $('#ID_Usuario').val();
            if (ID_Usuario == "") {
                pageReporte.sweetAlert.swalDefaultInfo('Se perdio la sesion, por favor vuelva a ingresar.');
                return;
            }
            let anio = $('#txt-fecha').find("input").val();
            let pAnio = anio == "" ? 0 : parseInt(anio);

            let vUrlObtenerReporteP = `https://localhost:44355/api/reporte/obtener-reporte-perdidos/` + pAnio;

            Promise.all([
                fetch(vUrlObtenerReporteP),
            ]).then(x => Promise.all(x.map(r => r.json())))
                .then(pageReporte.methods.CargarListasP)
        },
        CargarListasP: function ([pDataReporteP]) {

            pageReporte.data.listaMascotasP = pDataReporteP == null ? [] : pDataReporteP.map(x => x);

            var labels = [];
            var colores = [];
            var data = [];

            labels = pageReporte.data.listaMascotasP.map(x => x.Distrito);
            colores = pageReporte.data.listaMascotasP.map(x => x.Color);
            data = pageReporte.data.listaMascotasP.map(x => x.TotalMascotas);
            var canvas = '#pieChartP';

            pageReporte.methods.PieChart(labels, colores, data, canvas);
        },

        ReporteMascotasE: function () {
            let ID_Usuario = $('#ID_Usuario').val();
            if (ID_Usuario == "") {
                pageReporte.sweetAlert.swalDefaultInfo('Se perdio la sesion, por favor vuelva a ingresar.');
                return;
            }
            let anio = $('#txt-fecha').find("input").val();

            let pAnio = anio == "" ? 0 : parseInt(anio);

            let vUrlObtenerReporteE = `https://localhost:44355/api/reporte/obtener-reporte-encontrados/` + pAnio;

            Promise.all([
                fetch(vUrlObtenerReporteE)
            ]).then(x => Promise.all(x.map(r => r.json())))
                .then(pageReporte.methods.CargarListasE)
        },
        CargarListasE: function ([pDataReporteE]) {

            pageReporte.data.listaMascotasE = pDataReporteE == null ? [] : pDataReporteE.map(x => x);
            var labels = [];
            var colores = [];
            var data = [];

            labels = pageReporte.data.listaMascotasE.map(x => x.Distrito);
            colores = pageReporte.data.listaMascotasE.map(x => x.Color);
            data = pageReporte.data.listaMascotasE.map(x => x.TotalMascotas);

            var canvas = '#pieChartE';

            pageReporte.methods.PieChart(labels, colores, data, canvas);
        },

        ReporteMascotasMeses: function () {
            let ID_Usuario = $('#ID_Usuario').val();
            if (ID_Usuario == "") {
                pageReporte.sweetAlert.swalDefaultInfo('Se perdio la sesion, por favor vuelva a ingresar.');
                return;
            }
            let anio = $('#txt-fecha2').find("input").val();

            let pAnio = anio == "" ? 0 : parseInt(anio);

            let vUrlObtenerReporteE = `https://localhost:44355/api/reporte/obtener-reporte-meses-e/` + pAnio;
            let vUrlObtenerReporteP = `https://localhost:44355/api/reporte/obtener-reporte-meses-p/` + pAnio;

            Promise.all([
                fetch(vUrlObtenerReporteE),
                fetch(vUrlObtenerReporteP)
            ]).then(x => Promise.all(x.map(r => r.json())))
                .then(pageReporte.methods.CargarListasMeses)
        },
        CargarListasMeses: function ([pDataReporteMesesE, pDataReporteMesesP]) {
            pageReporte.data.listaMascotasMesesE = pDataReporteMesesE == null ? [] : pDataReporteMesesE.map(x => x);
            pageReporte.data.listaMascotasMesesP = pDataReporteMesesP == null ? [] : pDataReporteMesesP.map(x => x);

            var labels = [];

            $.map(pageReporte.data.listaMascotasMesesE, function (val, i) {
                var valida = labels.indexOf(val.Mes); // devuelve -1
                if (valida === -1) {
                    labels.push(val.Mes);
                }
            });
            $.map(pageReporte.data.listaMascotasMesesP, function (val, i) {
                var valida = labels.indexOf(val.Mes); // devuelve -1
                if (valida === -1) {
                    labels.push(val.Mes);
                }
            });

            var dataE = [];
            var dataP = [];
            dataE = pageReporte.data.listaMascotasMesesE.map(x => x.TotalMascotas);
            dataP = pageReporte.data.listaMascotasMesesP.map(x => x.TotalMascotas);

            var canvas = '#stackedBarChart';

            pageReporte.methods.StackedBarChart(labels, dataE, dataP);
        },

        ReporteTotales: function () {
            let ID_Usuario = $('#ID_Usuario').val();
            if (ID_Usuario == "") {
                pageReporte.sweetAlert.swalDefaultInfo('Se perdio la sesion, por favor vuelva a ingresar.');
                return;
            }

            let vUrlObtenerReporte = `https://localhost:44355/api/reporte/obtener-reporte-totales`;

            Promise.all([
                fetch(vUrlObtenerReporte)
            ]).then(x => Promise.all(x.map(r => r.json())))
                .then(pageReporte.methods.CargarListasTotales)
        },
        CargarListasTotales: function ([pDataReporteTotales]) {
            pageReporte.data.listaTotales = pDataReporteTotales == null ? [] : pDataReporteTotales.map(x => x);

            $('#UR').html(pageReporte.data.listaTotales[0].Total);
            $('#MR').html(pageReporte.data.listaTotales[1].Total);
            $('#ME').html(pageReporte.data.listaTotales[2].Total);
            $('#MP').html(pageReporte.data.listaTotales[3].Total);
            $('#MReportadas').html(pageReporte.data.listaTotales[4].Total); 
        },

        ReporteMascotasDias: function () {
            let ID_Usuario = $('#ID_Usuario').val();
            if (ID_Usuario == "") {
                pageReporte.sweetAlert.swalDefaultInfo('Se perdio la sesion, por favor vuelva a ingresar.');
                return;
            }
            let check = $("input[name='options']:checked").val();
            let pchek;

            if (check == "0") {
                pchek = false;
            } else if (check == "1") {
                pchek = true;
            } else {
                pchek = null;
            }

            let vData = {};
            vData = {};
            vData.check = pchek;

            let vUrlReporteDias = `https://localhost:44355/api/reporte/obtener-reporte-dias`;

            let vInit = {};
            vInit.method = "POST";
            vInit.headers = {};
            vInit.headers["Content-Type"] = "application/json";
            vInit.body = JSON.stringify(vData);

            Promise.all([
                fetch(vUrlReporteDias, vInit)
            ]).then(x => Promise.all(x.map(r => r.json())))
                .then(pageReporte.methods.CargarTabla)


        },
        CargarTabla: function ([pDataMascotasDias]) {
            pageReporte.data.listarMascotasDias = pDataMascotasDias == null ? [] : pDataMascotasDias.map(x => x);

            // cargando la tabla 
            var columns = [
                { data: "Nombre" },
                { data: "FechaPerdida" },
                { data: "FechaEncontrado" },
                { data: "DifDias" },
                { data: "DesDistrito" },
                { data: "Estado" },
            ];
            var columnDefs = [
                {
                    "targets": [4],
                    "visible": true,
                },
                {
                    "targets": [5],
                    "width": "100px",
                    'render': function (data, type, full, meta) {
                        var CheckPerdida = full.Estado;
                        var input = '';
                        if (CheckPerdida == 'Encontrado') {
                            input = "<div style='pointer-events: none;'> "
                                + "<button type='button' class='btn btn-sm btn-block btn-success'>Encontrado</button>"
                                + "</div>"
                        } else {
                            input = "<div style='pointer-events: none;'> "
                                + "<button type='button' class='btn btn-sm btn-block btn-danger'>Perdido</button>"
                                + "</div>"
                        }
                        return input;
                    }
                },
            ];
            $('#tblReporteDias').DataTable({
                "destroy": true,
                "paging": true,
                "lengthChange": false,
                "searching": false,
                "ordering": false,
                "info": true,
                "autoWidth": false,
                "responsive": true,
                "language": pageReporte.data.DataTableLanguage,
                "columns": columns,
                "data": pageReporte.data.listarMascotasDias,
                "columnDefs": columnDefs,
            });
        },

        // Charts 
        PieChart: function (labels, colores, data, canvas) {

            //var labels = [
            //    'Chrome',
            //    'IE',
            //    'FireFox',
            //    'Safari',
            //    'Opera',
            //    'Navigator',
            //];
            //var colores = ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'];
            //var data = [700, 500, 400, 600, 300, 100];

            var donutData = {
                labels: labels,
                datasets: [
                    {
                        data: data,
                        backgroundColor: colores,
                    }
                ]
            }
            // Get context with jQuery - using jQuery's .get() method.
            var pieChartCanvas = $(canvas).get(0).getContext('2d')
            var pieData = donutData;
            var pieOptions = {
                maintainAspectRatio: false,
                responsive: true,
            }
            //Create pie or douhnut chart
            // You can switch between pie and douhnut using the method below.
            new Chart(pieChartCanvas, {
                type: 'pie',
                data: pieData,
                options: pieOptions
            });
        },
        StackedBarChart: function (labels, dataE, dataP) {



            var areaChartData = {
                //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                labels: labels,
                datasets: [
                    {
                        label: 'Encontrados',
                        backgroundColor: 'rgba(60,141,188,0.9)',
                        borderColor: 'rgba(60,141,188,0.8)',
                        pointRadius: false,
                        pointColor: '#3b8bba',
                        pointStrokeColor: 'rgba(60,141,188,1)',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(60,141,188,1)',
                        //data: [28, 48, 40, 19, 86, 27, 90]
                        data: dataE
                    },
                    {
                        label: 'Perdidos',
                        backgroundColor: 'rgba(210, 214, 222, 1)',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        //data: [65, 59, 80, 81, 56, 55]
                        data: dataP
                    },
                ]
            }

            var barChartData = $.extend(true, {}, areaChartData)
            var temp0 = areaChartData.datasets[0]
            var temp1 = areaChartData.datasets[1]
            barChartData.datasets[0] = temp1
            barChartData.datasets[1] = temp0

            //---------------------
            //- STACKED BAR CHART -
            //---------------------
             
            var stackedBarChartCanvas = $('#stackedBarChart').get(0).getContext('2d');
     
            var stackedBarChartData = $.extend(true, {}, barChartData)

            var stackedBarChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
            var chart = new Chart(stackedBarChartCanvas, {
                type: 'bar',
                data: stackedBarChartData,
                options: stackedBarChartOptions
            });
             
            chart.update();
        }
    },

};