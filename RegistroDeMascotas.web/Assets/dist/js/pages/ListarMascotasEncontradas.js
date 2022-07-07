const pageListadoME = {
    init: function () {
        pageListadoME.methods.ObtenerListas();
        pageListadoME.methods.ListarMascotasEncontradas();
        pageListadoME.sweetAlert.Init();

        $('#btn-buscar').click(pageListadoME.events.btnBuscarClick);
        $('#btn-limpiar').click(pageListadoME.events.btnLimpiarClick);
        $('#checkbox-reportar').on('change.bootstrapSwitch', pageListadoME.events.changeCheckbox);


        $("input[data-bootstrap-switch]").each(function () {
            $(this).bootstrapSwitch('state', $(this).prop('unchecked'));
        });

        //Date picker 
        $('#txt-fechaPerdida, #txt-fechaEncontrado').datetimepicker({
            format: 'YYYY-MM-DD',
            language: 'es'
        });

    },
    data: {
        listaMascotas: [],
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
        listaGeneroMascota: [],
        listaColor: [],
        listaTamanio: [],
        listaRaza: [],
        listaCola: [],
        listaOrejas: [],
        listaDistritos: [],
        listaRedesSociales: [],

    },
    events: {
        btnBuscarClick: function () {
            pageListadoME.methods.ListarMascotasEncontradas();
        },
        btnLimpiarClick: function () {
            $('#txt-DIP').val('')
            $("#txt-nombremascota").val('');
            $("#txt-descripmascota").val('');

            $("#cbo-generomascota").select2("val", "0");
            $("#cbo-color").select2("val", "0");
            $("#cbo-tamanio").select2("val", "0");
            $("#cbo-raza").select2("val", "0");
            $("#cbo-cola").select2("val", "0");
            $("#cbo-orejas").select2("val", "0");

            pageListadoME.methods.ListarMascotasEncontradas();

        },
        changeCheckbox: function (e) {
            var value = e.target.checked;
            if (value) {
                $('#divFechaEncontrado').show('swing');
            } else {
                $('#divFechaEncontrado').hide('linear');
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
        ObtenerListas: function () {
            let vUrlListaGeneroMascota = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/2`;
            let vUrlListaColor = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/3`;
            let vUrlListaTamanio = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/4`;
            let vUrlListaRaza = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/5`;
            let vUrlListaCola = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/6`;
            let vUrlListaOrejas = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/7`;
            let vUrlListaDistritos = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/11`;
            let vUrlListaRedesSociales = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/12`;

            Promise.all([
                fetch(vUrlListaGeneroMascota),
                fetch(vUrlListaColor),
                fetch(vUrlListaTamanio),
                fetch(vUrlListaRaza),
                fetch(vUrlListaCola),
                fetch(vUrlListaOrejas),
                fetch(vUrlListaDistritos),
                fetch(vUrlListaRedesSociales)
            ]).then(x => Promise.all(x.map(r => r.json())))
                .then(pageListadoME.methods.CargarListas)

        },
        CargarListas: function ([pDataGeneroMascota, pDataColor, pDataTamanio, pDataRaza, pDataCola, pDataOrejas, pDataDistritos, pDataRedesSociales]) {

            pDataGeneroMascota.push({ CodigoFila: 0, DescripcionCorta: "Seleccionar" });
            pDataColor.push({ CodigoFila: 0, DescripcionCorta: "Seleccionar" });
            pDataTamanio.push({ CodigoFila: 0, DescripcionCorta: "Seleccionar" });
            pDataRaza.push({ CodigoFila: 0, DescripcionCorta: "Seleccionar" });
            pDataCola.push({ CodigoFila: 0, DescripcionCorta: "Seleccionar" });
            pDataOrejas.push({ CodigoFila: 0, DescripcionCorta: "Seleccionar" });

            pDataGeneroMascota.sort((a, b) => {
                return a.CodigoFila - b.CodigoFila;
            });
            pDataColor.sort((a, b) => {
                return a.CodigoFila - b.CodigoFila;
            });
            pDataTamanio.sort((a, b) => {
                return a.CodigoFila - b.CodigoFila;
            });
            pDataRaza.sort((a, b) => {
                return a.CodigoFila - b.CodigoFila;
            });
            pDataCola.sort((a, b) => {
                return a.CodigoFila - b.CodigoFila;
            });
            pDataOrejas.sort((a, b) => {
                return a.CodigoFila - b.CodigoFila;
            });


            pageListadoME.data.listaGeneroMascota = pDataGeneroMascota == null ? [] : pDataGeneroMascota.map(x => x);
            pageListadoME.data.listaColor = pDataColor == null ? [] : pDataColor.map(x => x);
            pageListadoME.data.listaTamanio = pDataTamanio == null ? [] : pDataTamanio.map(x => x);
            pageListadoME.data.listaRaza = pDataRaza == null ? [] : pDataRaza.map(x => x);
            pageListadoME.data.listaCola = pDataCola == null ? [] : pDataCola.map(x => x);
            pageListadoME.data.listaOrejas = pDataOrejas == null ? [] : pDataOrejas.map(x => x);
            pageListadoME.data.listaDistritos = pDataDistritos == null ? [] : pDataDistritos.map(x => x);
            pageListadoME.data.listaRedesSociales = pDataRedesSociales == null ? [] : pDataRedesSociales.map(x => x);

            // cargando combos 
            let vListaGeneroMascota = pDataGeneroMascota == null ? [] : pDataGeneroMascota.map(x => Object.assign(x, { id: x.CodigoFila, text: x.DescripcionCorta }));
            $("#cbo-generomascota").select2({ data: vListaGeneroMascota });
            let vListaColor = pDataColor == null ? [] : pDataColor.map(x => Object.assign(x, { id: x.CodigoFila, text: x.DescripcionCorta }));
            $("#cbo-color").select2({ data: vListaColor });
            let vListaTamanio = pDataTamanio == null ? [] : pDataTamanio.map(x => Object.assign(x, { id: x.CodigoFila, text: x.DescripcionCorta }));
            $("#cbo-tamanio").select2({ data: vListaTamanio });
            let vListaRaza = pDataRaza == null ? [] : pDataRaza.map(x => Object.assign(x, { id: x.CodigoFila, text: x.DescripcionCorta }));
            $("#cbo-raza").select2({ data: vListaRaza });
            let vListaCola = pDataCola == null ? [] : pDataCola.map(x => Object.assign(x, { id: x.CodigoFila, text: x.DescripcionCorta }));
            $("#cbo-cola").select2({ data: vListaCola });
            let vListaOrejas = pDataOrejas == null ? [] : pDataOrejas.map(x => Object.assign(x, { id: x.CodigoFila, text: x.DescripcionCorta }));
            $("#cbo-orejas").select2({ data: vListaOrejas });

            let vListaDistritos = pDataDistritos == null ? [] : pDataDistritos.map(x => Object.assign(x, { id: x.CodigoFila, text: x.DescripcionCorta }));
            $("#cbo-distrito").select2({ data: vListaDistritos });

            let vListaRedesSociales = pDataRedesSociales == null ? [] : pDataRedesSociales.map(x => Object.assign(x, { id: x.CodigoFila, text: x.DescripcionCorta }));
            $("#cbo-redSocial").select2({ data: vListaRedesSociales });
        },
        ListarMascotasEncontradas: function () {
            let ID_Usuario = $('#ID_Usuario').val();
            if (ID_Usuario == "") {
                pageListadoME.sweetAlert.swalDefaultInfo('Se perdio la sesion, por favor vuelva a ingresar.');
                return;
            }

            let vDip = $('#txt-DIP').val()
            let vNombreMascota = $("#txt-nombremascota").val();
            let vIdGeneroMascota = $("#cbo-generomascota").val();
            let vIdColorMascota = $("#cbo-color").val();
            let vIdTamanioMascota = $("#cbo-tamanio").val();
            let vIdRazaMascota = $("#cbo-raza").val();
            let vIdColaMascota = $("#cbo-cola").val();
            let vIdOrejaMascota = $("#cbo-orejas").val();
            let vDescripcionMascota = $("#txt-descripmascota").val();


            let vData = {};
            vData = {};
            vData.DIPAuto = vDip;
            vData.Nombre = vNombreMascota;
            vData.IdGenero = vIdGeneroMascota == 0 ? null : vIdGeneroMascota;
            vData.IdColor = vIdColorMascota == 0 ? null : vIdColorMascota;;
            vData.IdTamanio = vIdTamanioMascota == 0 ? null : vIdTamanioMascota;;
            vData.IdRaza = vIdRazaMascota == 0 ? null : vIdRazaMascota;;
            vData.IdCola = vIdColaMascota == 0 ? null : vIdColaMascota;;
            vData.IdOrejas = vIdOrejaMascota == 0 ? null : vIdOrejaMascota;;
            vData.DescripcionAdicional = vDescripcionMascota;

            let vUrlListaMascotas = `https://localhost:44355/api/mascota/listar-mascotas-encontradas`;

            let vInit = {};
            vInit.method = "POST";
            vInit.headers = {};
            vInit.headers["Content-Type"] = "application/json";
            vInit.body = JSON.stringify(vData);

            Promise.all([
                fetch(vUrlListaMascotas, vInit)
            ]).then(x => Promise.all(x.map(r => r.json())))
                .then(pageListadoME.methods.CargarTabla)


        },
        CargarTabla: function ([pDataMascotas]) {
            pageListadoME.data.listaMascotas = pDataMascotas == null ? [] : pDataMascotas.map(x => x);

            // cargando la tabla 
            var columns = [
                { data: "Mascota.DIPAuto" },
                { data: "Mascota.Nombre" },
                { data: "Mascota.DescripcionAdicional" },
                { data: "Mascota.ReportarMascota.DetPerdida" }, 
                { data: "Mascota.Fotos" },
                { data: "Mascota.ReportarMascota.CheckPerdida" },
                { data: "Mascota.IdMascotas" },
            ];
            var columnDefs = [
                {
                    "targets": [2],
                    "width": "200px",
                    'render': function (data, type, full, meta) {
                        var Descripcion = full.Mascota.DescripcionAdicional;
                        var DesGenero = full.Mascota.DesGenero;
                        var DesColor = full.Mascota.DesColor;
                        var DesTamanio = full.Mascota.DesTamanio;
                        var DesRaza = full.Mascota.DesRaza;
                        var DesCola = full.Mascota.DesCola;
                        var DesOrejas = full.Mascota.DesOrejas;

                        var html = '<ul>'
                            + '<li>Genero: ' + DesGenero + '</li>'
                            + '<li>Color: ' + DesColor + '</li>'
                            + '<li>Tamaño: ' + DesTamanio + '</li>'
                            + '<li>Raza: ' + DesRaza + '</li>'
                            + '<li>Cola: ' + DesCola + '</li>'
                            + '<li>Orejas: ' + DesOrejas + '</li>'
                            + '<li>Descripción: ' + Descripcion + '</li>'
                            + '</ul>';
                        return html;
                    }
                },
                {
                    "targets": [3],
                    "width": "220px",
                    'render': function (data, type, full, meta) {
                        var FechaPerdida = full.Mascota.ReportarMascota.FechaPerdida;
                        var FechaEncontrado = full.Mascota.ReportarMascota.FechaEncontrado;
                        var DesDistrito = full.Mascota.ReportarMascota.DesDistrito;
                        var Direccion = full.Mascota.ReportarMascota.Direccion;
                        var DetPerdida = full.Mascota.ReportarMascota.DetPerdida;


                        var html = '<ul>'
                            + '<li>F. Perdida: ' + FechaPerdida + '</li>'
                            + '<li>F. Encontrado: ' + FechaEncontrado + '</li>'
                            + '<li>Distrito: ' + DesDistrito + '</li>'
                            + '<li>Dirección: ' + Direccion + '</li>'
                            + '<li>Detalle: ' + DetPerdida + '</li>'
                            + '</ul>';
                        return html;
                    }
                }, 
                {
                    "targets": [4],
                    'render': function (data, type, full, meta) {
                        var foto = full.Mascota.Fotos[0].Foto;
                        var nombreArchivo = full.Mascota.Fotos[0].NombreArchivo;

                        var img = '<img class="img-fluid mb-2" alt="black sample" src = "' + foto + '" title="' + nombreArchivo + '"/>';

                        return img;
                    }
                },
                {
                    "targets": [5],
                    'render': function (data, type, full, meta) {
                        var CheckPerdida = full.Mascota.ReportarMascota.CheckPerdida;
                        var input = '';
                        if (CheckPerdida) {
                            input = "<div style='pointer-events: none;'> "
                                + "<button type='button' class='btn btn-block btn-success'>Encontrado</button>"
                                + "</div>"
                        } else {
                            input = "<div style='pointer-events: none;'> "
                                + "<button type='button' class='btn btn-block btn-danger'>Perdido</button>"
                                + "</div>"
                        }
                        return input;
                    }
                },
                {
                    "targets": [6],
                    "className": "text-center",
                    'render': function (data, type, full, meta) {
                        var Id_Mascotas = full.Mascota.IdMascotas;
                        var buttom = '<div class="btn-group">'
                            + '    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">'
                            + '        <span class="sr-only">Toggle Dropdown</span>'
                            + '   </button>'
                            + '    <div class="dropdown-menu" role="menu">'
                            + '        <a class="dropdown-item" onclick="return pageListadoME.methods.ObtenerDatosMascota(' + Id_Mascotas + ');" data-toggle="modal" data-target="#modal-reportar-mascota">Ver Detalle</a>'
                            + '    </div>'
                            + ' </div> ';
                        return buttom;
                    }
                }
            ];
            $('#tblMascotas').DataTable({
                "destroy": true,
                "paging": true,
                "lengthChange": false,
                "searching": false,
                "ordering": false,
                "info": true,
                "autoWidth": false,
                "responsive": true,
                "language": pageListadoME.data.DataTableLanguage,
                "columns": columns,
                "data": pageListadoME.data.listaMascotas,
                "columnDefs": columnDefs,
                //"drawCallback": function (settings) {
                //    $("input[data-bootstrap-switch]").each(function () {
                //        $(this).bootstrapSwitch('state', $(this).prop('unchecked'));
                //    });
                //}
            });
        },
        // acciones de la tabla 
        ObtenerDatosMascota: function (IdMascota) {

            pageListadoME.methods.ObtenerDetallesMascota(IdMascota);
            pageListadoME.methods.ObtenerContactos(IdMascota);

        },
        ObtenerDetallesMascota: function (IdMascota) {
            let vUrlObtenerDetallesMascota = `https://localhost:44355/api/mascota/obtener-detalles-mascota/` + IdMascota;

            Promise.all([
                fetch(vUrlObtenerDetallesMascota)
            ]).then(x => Promise.all(x.map(r => r.json())))
                .then(pageListadoME.methods.CargarDetalleMascota)
        },
        CargarDetalleMascota: function ([pDataDetalleMascota]) {
            var data = pDataDetalleMascota;
            if (data != null) {

                // DATOS DEL USUARIO
                $('#txt-duenio').val(data.Nombres);
                $('#txt-correo').val(data.Correo);
                $('#txt-adicional').val(data.Mascota.DescripcionAdicional);

                // DATOS DEL REPORTAR MASCOTA
                $('#txt-fechaPerdida').find("input").val(data.Mascota.ReportarMascota.FechaPerdida);
                $("#cbo-distrito").select2("val", data.Mascota.ReportarMascota.IdDistrito.toString());
                $('#txt-direccion').val(data.Mascota.ReportarMascota.Direccion);
                $('#checkbox-reportar').bootstrapSwitch('state', data.Mascota.ReportarMascota.CheckPerdida);
                $('#txt-det-perdida').val(data.Mascota.ReportarMascota.DetPerdida);

                // se esconde la fecha encontrado segun el check
                if (data.Mascota.ReportarMascota.CheckPerdida) {
                    $('#txt-fechaEncontrado').find("input").val(data.Mascota.ReportarMascota.FechaEncontrado);
                    $('#divFechaEncontrado').show('swing');
                } else {
                    $('#txt-fechaEncontrado').find("input").val('');
                    $('#divFechaEncontrado').hide('linear');
                }
            }
        },
        ObtenerContactos: function (IdMascota) {
            let vUrlObtenerContactos = `https://localhost:44355/api/mascota/obtener-contactos-mascota/` + IdMascota;

            Promise.all([
                fetch(vUrlObtenerContactos)
            ]).then(x => Promise.all(x.map(r => r.json())))
                .then(pageListadoME.methods.CargarContactos)
        },
        CargarContactos: function ([pDataContactos]) {

            pageListadoME.data.vRedesSociales = pDataContactos == null ? [] : pDataContactos.map(x => x);

            // cargando la tabla 
            var columns = [
                { data: "DesRedSocial" },
                { data: "RedSocial" },
                { data: "Id_Contacto" },
            ];
            var columnDefs = [
                {
                    "targets": [2],
                    "visible": false,
                    "className": "text-center",
                    'render': function (data, type, full, meta) {
                        var buttom = "<center>" +
                            '<a class="btn btn-default btn-xs"  title="Eliminar" onclick="return pageListadoME.methods.EliminarContacto(' + meta.row + ');"><i class="fa fa-trash" aria-hidden="true"></i></a>' +
                            "</center> ";
                        return buttom;
                    }
                }
            ];
            $('#tblContacto').DataTable({
                "destroy": true,
                "paging": true,
                "lengthChange": false,
                "searching": false,
                "ordering": false,
                "info": true,
                "autoWidth": false,
                "responsive": true,
                "language": pageListadoME.data.DataTableLanguage,
                "columns": columns,
                "data": pageListadoME.data.vRedesSociales,
                "columnDefs": columnDefs
            });
        },
    }
};