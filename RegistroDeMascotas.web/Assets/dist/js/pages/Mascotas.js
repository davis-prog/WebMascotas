
const pageMascota = {
    init: function () {
        pageMascota.methods.ObtenerListas();
        pageMascota.methods.ObtenerRedesSociales();
        pageMascota.methods.ObtenerListasMascotas();
        pageMascota.methods.ValidarFormulario();

        pageMascota.sweetAlert.Init();
        $('#btn-agregar').click(pageMascota.events.btnAgregarClick);
        $("#txt-foto").change(pageMascota.events.changeImagenClick);
        $('#btn-cancelar').click(pageMascota.events.btnCancelarClick)
        $('#btnAgregarRedSocial').click(pageMascota.events.btnAgregarRedSocial);
        $('#btnCrearRedSocial').click(pageMascota.events.btnCrearRedSocial);
        $('#checkbox-reportar').on('change.bootstrapSwitch', pageMascota.events.changeCheckbox);


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
        listaFotos: [],
        vFotosMascota: [],
        vRedesSociales: [],
        vFlag: 0,
    },
    events: {
        btnAgregarClick: function () {
            $('#IdMascota').val(0);

            $('#frm-registro')[0].reset();
            let vFormularioEsValido = $("#frm-registro").valid();
            if (vFormularioEsValido) {
                let vNumDocumento = $("#NumDocumento").val();
                let numAle = Math.random() * 1000 + 1;
                let num = Math.round(numAle);
                let Did = vNumDocumento + '-' + num

                $('#txt-DIP').val(Did);
            }
            else return;
        },
        changeImagenClick: function () {
            pageMascota.data.vFotosMascota = [];

            for (var i = 0; i < $(this).get(0).files.length; ++i) {
                var filename = $(this).get(0).files[i].name;
                var file = $(this).prop('files')[i];
                var response = function (result, nomArchivo, contador) {
                    var obj = {
                        NombreArchivo: nomArchivo,
                        Foto: result,
                        ImagenPrincipal: contador == 0 ? 1 : 0
                    };
                    pageMascota.data.vFotosMascota.push(obj);
                }
                pageMascota.methods.fileToBase64(file, response, filename, i);
            }

            //console.log(pageMascota.data.vFotosMascota);
        },
        btnCancelarClick: function () {
            $('#frm-registro')[0].reset();
        },
        btnAgregarRedSocial: function () {

            let IdRedSocial = $("#cbo-redSocial").val();
            let DesRedSocial = $('#cbo-redSocial').find(':selected').text();
            let RedSocial = $('#txt-contacto').val();
            if (RedSocial == '' || RedSocial == null) {
                pageMascota.sweetAlert.swalDefaultInfo("Ingrese el contacto");
                return false;
            }

            //var RedesSociales = [];
            //pageMascota.data.vRedesSociales.map(function (v, i) {
            //    RedesSociales.push(v.DesRedSocial);
            //});

            //var repetido = tallas.indexOf(redSocial);
            //if (repetido != -1) {
            //    pageMascota.sweetAlert.swalDefaultInfo("No se puede ingresar la misma red social");
            //    return false;
            //}

            var obj = {
                "IdRedSocial": IdRedSocial,
                "DesRedSocial": DesRedSocial,
                "RedSocial": RedSocial,
                "Id_Contacto": 0,
            };

            pageMascota.data.vRedesSociales.push(obj);
            var data = pageMascota.data.vRedesSociales;

            pageMascota.methods.CargarContactos([data]);
            $("#cbo-redSocial").select2("val", "1");
            $('#txt-contacto').val('');
        },
        btnCrearRedSocial: function () {
            $('#modal-redes-sociales').modal('show');
            $('#frm-redes-sociales')[0].reset();
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
        fileToBase64: function (file, response, filename, i) {
            var convertFile = new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = reject;
            });

            convertFile.then((value) => {
                response(value, filename, i)
            });
            return convertFile;
        },
        ObtenerListas: function () {
            let vUrlListaGeneroMascota = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/2`;
            let vUrlListaColor = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/3`;
            let vUrlListaTamanio = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/4`;
            let vUrlListaRaza = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/5`;
            let vUrlListaCola = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/6`;
            let vUrlListaOrejas = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/7`;
            let vUrlListaDistritos = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/11`;

            Promise.all([
                fetch(vUrlListaGeneroMascota),
                fetch(vUrlListaColor),
                fetch(vUrlListaTamanio),
                fetch(vUrlListaRaza),
                fetch(vUrlListaCola),
                fetch(vUrlListaOrejas),
                fetch(vUrlListaDistritos)
            ]).then(x => Promise.all(x.map(r => r.json())))
                .then(pageMascota.methods.CargarListas)

        },
        CargarListas: function ([pDataGeneroMascota, pDataColor, pDataTamanio, pDataRaza, pDataCola, pDataOrejas, pDataDistritos]) {
            pageMascota.data.listaGeneroMascota = pDataGeneroMascota == null ? [] : pDataGeneroMascota.map(x => x);
            pageMascota.data.listaColor = pDataColor == null ? [] : pDataColor.map(x => x);
            pageMascota.data.listaTamanio = pDataTamanio == null ? [] : pDataTamanio.map(x => x);
            pageMascota.data.listaRaza = pDataRaza == null ? [] : pDataRaza.map(x => x);
            pageMascota.data.listaCola = pDataCola == null ? [] : pDataCola.map(x => x);
            pageMascota.data.listaOrejas = pDataOrejas == null ? [] : pDataOrejas.map(x => x);
            pageMascota.data.listaDistritos = pDataDistritos == null ? [] : pDataDistritos.map(x => x);

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


        },
        ObtenerListasMascotas: function () {
            let ID_Usuario = $('#ID_Usuario').val();
            if (ID_Usuario != "") {
                let vUrlListaMascotas = `https://localhost:44355/api/mascota/listar-mascota-registrada/` + ID_Usuario;

                Promise.all([
                    fetch(vUrlListaMascotas)
                ]).then(x => Promise.all(x.map(r => r.json())))
                    .then(pageMascota.methods.CargarTabla)
            } else {
                pageMascota.sweetAlert.swalDefaultInfo('Se perdio la sesion, por favor vuelva a ingresar.');
            }
        },
        CargarTabla: function ([pDataMascotas]) {
            pageMascota.data.listaMascotas = pDataMascotas == null ? [] : pDataMascotas.map(x => x);

            // cargando la tabla 
            var columns = [
                { data: "DIPAuto" },
                { data: "Nombre" },
                { data: "DescripcionAdicional" },
                { data: "Fotos" },
                { data: "IdMascotas" },
            ];
            var columnDefs = [
                {
                    "targets": [2],
                    'render': function (data, type, full, meta) {
                        var Descripcion = full.DescripcionAdicional;
                        var DesGenero = full.DesGenero;
                        var DesColor = full.DesColor;
                        var DesTamanio = full.DesTamanio;
                        var DesRaza = full.DesRaza;
                        var DesCola = full.DesCola;
                        var DesOrejas = full.DesOrejas;

                        var html = '<ul>'
                            + '<li>Genero: ' + DesGenero + '</li>'
                            + '<li>Color: ' + DesColor + '</li>'
                            + '<li>Tamaño: ' + DesTamanio + '</li>'
                            + '<li>Raza: ' + DesRaza + '</li>'
                            + '<li>Cola: ' + DesCola + '</li>'
                            + '<li>Orejas: ' + DesOrejas + '</li>'
                            + '<li>Descripcion: ' + Descripcion + '</li>'
                            + '</ul>';
                        return html;
                    }
                },
                {
                    "targets": [3],
                    'render': function (data, type, full, meta) {
                        var foto = full.Fotos[0].Foto;
                        var nombreArchivo = full.Fotos[0].NombreArchivo;

                        var img = '<img class="img-fluid mb-2" alt="black sample" src = "' + foto + '" title="' + nombreArchivo + '"/>';

                        return img;
                    }
                },
                {
                    "targets": [4],
                    "className": "text-center",
                    'render': function (data, type, full, meta) {
                        var Id_Mascotas = full.IdMascotas;
                        var buttom = '<div class="btn-group">'
                            + '    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">'
                            + '        <span class="sr-only">Toggle Dropdown</span>'
                            + '   </button>'
                            + '    <div class="dropdown-menu" role="menu">'
                            + '        <a class="dropdown-item" onclick="return pageMascota.methods.ObtenerDatosMascota(' + Id_Mascotas + ',' + 1 + ');" data-toggle="modal" data-target="#modal-agregar">Modificar</a>'
                            + '        <a class="dropdown-item" onclick="return pageMascota.methods.ObtenerDatosMascota(' + Id_Mascotas + ',' + 2 + ');" data-toggle="modal" data-target="#modal-reportar-mascota">Reportar</a>'
                            + '        <a class="dropdown-item" onclick="return pageMascota.methods.EliminarMascota(' + Id_Mascotas + ');">Eliminar</a>'
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
                "language": pageMascota.data.DataTableLanguage,
                "columns": columns,
                "data": pageMascota.data.listaMascotas,
                "columnDefs": columnDefs
            });
        },
        ObtenerDetallesMascota: function (IdMascota) {
            let vUrlObtenerDetallesMascota = `https://localhost:44355/api/mascota/obtener-detalles-mascota/` + IdMascota;

            Promise.all([
                fetch(vUrlObtenerDetallesMascota)
            ]).then(x => Promise.all(x.map(r => r.json())))
                .then(pageMascota.methods.CargarDetalleMascota)
        },
        CargarDetalleMascota: function ([pDataDetalleMascota]) {
            var data = pDataDetalleMascota;
            if (data != null) {

                if (pageMascota.data.vFlag == 1) {
                    $('#ID_Usuario').val(data.IdUsuario);
                    $('#txt-DIP').val(data.Mascota.DIPAuto)
                    $("#txt-nombremascota").val(data.Mascota.Nombre);
                    $("#cbo-generomascota").select2("val", data.Mascota.IdGenero.toString());
                    $("#cbo-color").select2("val", data.Mascota.IdColor.toString());
                    $("#cbo-tamanio").select2("val", data.Mascota.IdTamanio.toString());
                    $("#cbo-raza").select2("val", data.Mascota.IdRaza.toString());
                    $("#cbo-cola").select2("val", data.Mascota.IdCola.toString());
                    $("#cbo-orejas").select2("val", data.Mascota.IdOrejas.toString());
                    $("#txt-edad").val(data.Mascota.Edad);
                    $("#txt-descripmascota").val(data.Mascota.DescripcionAdicional);

                    // recogiendo imagen principal
                    pageMascota.data.vFotosMascota = [];
                    //var obj = {
                    //    NombreArchivo: nomArchivo,
                    //    Foto: result,
                    //    ImagenPrincipal: contador == 0 ? 1 : 0
                    //};
                    pageMascota.data.vFotosMascota = data.Mascota.Fotos;

                    //falta cargas las imagenes
                }
                if (pageMascota.data.vFlag == 2) {
                    // DATOS DEL USUARIO
                    $('#txt-duenio').val(data.Nombres);
                    $('#txt-correo').val(data.Correo);
                    $('#txt-adicional').val(data.Mascota.DescripcionAdicional);
                    //console.log(data);
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
            }
        },
        ObtenerContactos: function (IdMascota) {
            let vUrlObtenerContactos = `https://localhost:44355/api/mascota/obtener-contactos-mascota/` + IdMascota;

            Promise.all([
                fetch(vUrlObtenerContactos)
            ]).then(x => Promise.all(x.map(r => r.json())))
                .then(pageMascota.methods.CargarContactos)
        },
        CargarContactos: function ([pDataContactos]) {

            pageMascota.data.vRedesSociales = pDataContactos == null ? [] : pDataContactos.map(x => x);

            // cargando la tabla 
            var columns = [
                { data: "DesRedSocial" },
                { data: "RedSocial" },
                { data: "Id_Contacto" },
            ];
            var columnDefs = [
                {
                    "targets": [2],
                    "className": "text-center",
                    'render': function (data, type, full, meta) {
                        var buttom = "<center>" +
                            '<a class="btn btn-default btn-xs"  title="Eliminar" onclick="return pageMascota.methods.EliminarContacto(' + meta.row + ');"><i class="fa fa-trash" aria-hidden="true"></i></a>' +
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
                "language": pageMascota.data.DataTableLanguage,
                "columns": columns,
                "data": pageMascota.data.vRedesSociales,
                "columnDefs": columnDefs
            });
        },
        ObtenerRedesSociales: function () {
            let vUrlListaRedesSociales = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/12`;
            Promise.all([
                fetch(vUrlListaRedesSociales)
            ]).then(x => Promise.all(x.map(r => r.json())))
                .then(pageMascota.methods.CargarListasRedesSociales)
        },
        CargarListasRedesSociales: function ([pDataRedesSociales]) {
            pageMascota.data.listaRedesSociales = pDataRedesSociales == null ? [] : pDataRedesSociales.map(x => x);
            let vListaRedesSociales = pDataRedesSociales == null ? [] : pDataRedesSociales.map(x => Object.assign(x, { id: x.CodigoFila, text: x.DescripcionCorta }));
            $("#cbo-redSocial").select2({ data: vListaRedesSociales });
        },

        // validacion de los formularios
        ValidarFormulario: function () {
            $('#frm-registro').validate({
                rules: {
                    nombremascota: {
                        required: true
                    },
                    generomascota: {
                        required: true
                    },
                    color: {
                        required: true
                    },
                    tamanio: {
                        required: true
                    },
                    raza: {
                        required: true
                    },
                    cola: {
                        required: true
                    },
                    orejas: {
                        required: true
                    },
                    edad: {
                        required: true
                    },
                    DIP: {
                        required: true
                    },
                    descripmascota: {
                        required: true
                    },
                    //foto: {
                    //    required: false
                    //},

                },
                messages: {
                    nombremascota: {
                        required: 'Ingrese Nombre de Mascota'
                    },
                    generomascota: {
                        required: 'Seleccione Género de Mascota'
                    },
                    color: {
                        required: 'Seleccione Color'
                    },
                    tamanio: {
                        required: 'Seleccione Tamaño'
                    },
                    raza: {
                        required: 'Seleccione Raza'
                    },
                    cola: {
                        required: 'Seleccione Cola'
                    },
                    orejas: {
                        required: 'Seleccione Orejas'
                    },
                    edad: {
                        required: 'Ingrese Edad'
                    },
                    DIP: {
                        required: 'Genere el DIP'
                    },
                    descripmascota: {
                        required: 'Ingrese Descripción de Mascota'
                    },

                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                    error.addClass('invalid-feedback');
                    element.closest('.form-group').append(error);
                },
                highlight: function (element, errorClass, validClass) {
                    $(element).addClass('is-invalid');
                },
                unhighlight: function (element, errorClass, validClass) {
                    $(element).removeClass('is-invalid');
                },
                submitHandler: function (form, e) {
                    e.preventDefault();

                    pageMascota.methods.GuardarFormulario();
                }
            });

            $('#frm-registro-reportar').validate({
                rules: {
                    fechaperdida: {
                        required: true
                    },
                    distrito: {
                        required: true
                    },
                    direccion: {
                        required: true
                    },
                    correo: {
                        required: true
                    },
                    perdida: {
                        required: true
                    }
                },
                messages: {
                    fechaperdida: {
                        required: 'Ingrese la fecha perdida'
                    },
                    distrito: {
                        required: 'Seleccione el distrito'
                    },
                    direccion: {
                        required: 'Ingrese la dirección'
                    },
                    correo: {
                        required: 'Ingrese el correo'
                    },
                    perdida: {
                        required: 'Ingrese detalle de la perdida'
                    }
                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                    error.addClass('invalid-feedback');
                    element.closest('.form-group').append(error);
                },
                highlight: function (element, errorClass, validClass) {
                    $(element).addClass('is-invalid');
                },
                unhighlight: function (element, errorClass, validClass) {
                    $(element).removeClass('is-invalid');
                },
                submitHandler: function (form, e) {
                    e.preventDefault();

                    let checkboxReportar = $('#checkbox-reportar').bootstrapSwitch('state');
                    if (checkboxReportar) {
                        let fechaPerdida = $('#txt-fechaPerdida').find("input").val();
                        let fechaEncontrado = $('#txt-fechaEncontrado').find("input").val();
                        if (fechaEncontrado == "") {
                            pageMascota.sweetAlert.swalDefaultInfo('Ingrese la fecha encontrado');
                            return;
                        }

                        const fechaInicio = new Date(fechaPerdida);
                        const fechaFin = new Date(fechaEncontrado);
                        var flag = pageMascota.methods.ValidarFechaEnRango(fechaInicio, fechaFin);
                        if (!flag) {
                            pageMascota.sweetAlert.swalDefaultInfo('Las fecha de encontrado no puede ser menor a la fecha de perdida');
                            return;
                        }
                    }

                    pageMascota.methods.GuardarFormularioReportarMascota();
                }
            });

            $('#frm-redes-sociales').validate({
                rules: {
                    redsocial: {
                        required: true
                    },
                },
                messages: {
                    redsocial: {
                        required: 'Ingrese una nueva red social'
                    },
                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                    error.addClass('invalid-feedback');
                    element.closest('.form-group').append(error);
                },
                highlight: function (element, errorClass, validClass) {
                    $(element).addClass('is-invalid');
                },
                unhighlight: function (element, errorClass, validClass) {
                    $(element).removeClass('is-invalid');
                },
                submitHandler: function (form, e) {
                    e.preventDefault();

                    pageMascota.methods.GuardarFormularioRedesSociales();
                }
            });
        },
        ValidarFechaEnRango: function (fechaInicio, fechaFin) {
            const fechaInicioMs = fechaInicio.getTime();
            const fechaFinMs = fechaFin.getTime();
            if (fechaFinMs >= fechaInicioMs && fechaInicioMs <= fechaFinMs) {
                return true;
            } else {
                return false;
            }
        },

        // acciones de la tabla 
        ObtenerDatosMascota: function (IdMascota, flag) {

            if (IdMascota != undefined || IdMascota != null || IdMascota != "") {
                $('#IdMascota').val(IdMascota);

                // modal agregar mascota
                if (flag == 1) {
                    $('#frm-registro')[0].reset();
                    $("#cbo-generomascota").select2("val", "1");
                    $("#cbo-color").select2("val", "1");
                    $("#cbo-tamanio").select2("val", "1");
                    $("#cbo-raza").select2("val", "1");
                    $("#cbo-cola").select2("val", "1");
                    $("#cbo-orejas").select2("val", "1");
                    pageMascota.data.vFlag = flag;
                    pageMascota.methods.ObtenerDetallesMascota(IdMascota);
                }

                // modal reportar mascota
                if (flag == 2) {
                    $('#frm-registro-reportar')[0].reset();
                    $("#cbo-distrito").select2("val", "1");
                    $("#cbo-redSocial").select2("val", "1");
                    pageMascota.data.vFlag = flag;
                    pageMascota.methods.ObtenerDetallesMascota(IdMascota);
                    pageMascota.methods.ObtenerContactos(IdMascota);
                }
            }
        },
        EliminarMascota: function (IdMascota) {

            pageMascota.sweetAlert.swalDefaultQuestion("¿Está seguro de eliminar la mascota?", function () {

                let vData = {};
                vData.IdMascotas = IdMascota;
                let vUrl = `https://localhost:44355/api/mascota/eliminar-mascota`;

                let vInit = {};
                vInit.method = "POST";
                vInit.headers = {};
                vInit.headers["Content-Type"] = "application/json";
                vInit.body = JSON.stringify(vData);

                fetch(vUrl, vInit)
                    .then(x => x.json())
                    .then(pageMascota.methods.EliminarMascotaResponse);
            });
        },
        EliminarMascotaResponse: function (pData) {
            if (pData == true) {
                pageMascota.sweetAlert.swalDefaultSuccess('Su registro ha sido eliminado');
                pageMascota.methods.ObtenerListasMascotas();
            }
            else {
                pageMascota.sweetAlert.swalDefaultError('Hubo un error al guardar.');
            }
        },
        EliminarContacto: function (row) {

            var data = pageMascota.methods.GetValueRowCellOfDataTable($('#tblContacto'), row);

            var redes = [];
            pageMascota.data.vRedesSociales.map(function (v, i) {
                redes.push(v);
            });
            // eliminamos
            var index = $.inArray(data, redes);
            redes.splice(index, 1);

            pageMascota.data.vRedesSociales = [];
            $.each(redes, function (index, value) {
                var obj = {
                    "IdRedSocial": value.IdRedSocial,
                    "DesRedSocial": value.DesRedSocial,
                    "RedSocial": value.RedSocial,
                    "Id_Contacto": value.Id_Contacto,
                };

                pageMascota.data.vRedesSociales.push(obj);
            });
            var data = pageMascota.data.vRedesSociales;
            pageMascota.methods.CargarContactos([data]);

        },
        GetValueRowCellOfDataTable: function (selector, row) {
            var rows = selector.dataTable().api().rows().data().count();
            if (rows > 0) {
                var command;
                if (row != null) {
                    command = 'selector.dataTable().api().rows().data()[' + row + ']';
                } else {
                    command = 'selector.dataTable().api().rows().data()';
                }
                return eval(command);
            } else {
                return null
            };
        },

        // modal agregar mascota
        GuardarFormulario: function () {
            let ID_Usuario = $('#ID_Usuario').val();
            if (ID_Usuario == "") {
                pageMascota.sweetAlert.swalDefaultInfo('Se perdio la sesion, por favor vuelva a ingresar.');
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
            let vEdadMascota = $("#txt-edad").val();
            let vDescripcionMascota = $("#txt-descripmascota").val();
            var vIdMascota = $('#IdMascota').val();


            let vData = {};
            vData = {};
            vData.IdMascotas = vIdMascota;
            vData.IdUsuario = ID_Usuario;
            vData.DIPAuto = vDip;
            vData.Nombre = vNombreMascota;
            vData.IdGenero = vIdGeneroMascota;
            vData.IdColor = vIdColorMascota;
            vData.IdTamanio = vIdTamanioMascota;
            vData.IdRaza = vIdRazaMascota;
            vData.IdCola = vIdColaMascota;
            vData.IdOrejas = vIdOrejaMascota;
            vData.Edad = vEdadMascota;
            vData.DescripcionAdicional = vDescripcionMascota;
            vData.Fotos = [];
            if (pageMascota.data.vFotosMascota.length != 0) {
                vData.Fotos = pageMascota.data.vFotosMascota;
            } else {
                pageMascota.sweetAlert.swalDefaultInfo('Seleccione al menos una foto.');
                return;
            }


            let vUrl;
            if (vIdMascota == 0) {
                vUrl = `https://localhost:44355/api/mascota/registrar-mascota`;
            } else {
                vUrl = `https://localhost:44355/api/mascota/actualizar-mascota`;
            }

            let vInit = {};
            vInit.method = "POST";
            vInit.headers = {};
            vInit.headers["Content-Type"] = "application/json";
            vInit.body = JSON.stringify(vData);

            fetch(vUrl, vInit)
                .then(x => x.json())
                .then(pageMascota.methods.GuardarFormularioResponse);

        },
        GuardarFormularioResponse: function (pData) {
            if (pData == true) {
                pageMascota.sweetAlert.swalDefaultSuccess('Se guardó correctamente.');
                pageMascota.methods.ObtenerListasMascotas();
                $("#modal-agregar").modal('hide');
            }
            else {
                pageMascota.sweetAlert.swalDefaultError('Hubo un error al guardar.');
            }
            $('#IdMascota').val(0);
        },

        // modal reportar mascota 
        GuardarFormularioReportarMascota: function () {
            let IdMascota = $('#IdMascota').val();
            let fechaPerdida = $('#txt-fechaPerdida').find("input").val();
            let fechaEncontrado = $('#txt-fechaEncontrado').find("input").val();
            let distrito = $('#cbo-distrito').val();
            let direccion = $('#txt-direccion').val();
            let detperdida = $('#txt-det-perdida').val();
            let checkboxReportar = $('#checkbox-reportar').bootstrapSwitch('state');

            let ID_Usuario = $('#ID_Usuario').val();
            let adicional = $('#txt-adicional').val();
            let correo = $('#txt-correo').val();

            let vData = {};
            vData.Id_Mascotas = IdMascota;
            vData.CheckPerdida = checkboxReportar;
            vData.FechaPerdida = fechaPerdida;
            vData.FechaEncontrado = fechaEncontrado;
            vData.Direccion = direccion;
            vData.IdDistrito = distrito;
            vData.DetPerdida = detperdida;

            //vData.DescripcionAdicional = vDescripcionMascota;
            //vData.Correo = correo;

            vData.Contactos = [];
            if (pageMascota.data.vRedesSociales.length != 0) {
                vData.Contactos = pageMascota.data.vRedesSociales;
            } else {
                pageMascota.sweetAlert.swalDefaultInfo('Ingrese al menos una red social.');
                return;
            }

            let vUrl = `https://localhost:44355/api/mascota/reportar-mascota`;

            let vInit = {};
            vInit.method = "POST";
            vInit.headers = {};
            vInit.headers["Content-Type"] = "application/json";
            vInit.body = JSON.stringify(vData);

            fetch(vUrl, vInit)
                .then(x => x.json())
                .then(pageMascota.methods.GuardarFormularioReportarMascotaResponse);
        },
        GuardarFormularioReportarMascotaResponse: function (pData) {
            if (pData == true) {
                pageMascota.sweetAlert.swalDefaultSuccess('Se guardó correctamente.');
                pageMascota.methods.ObtenerListasMascotas();
                $("#modal-reportar-mascota").modal('hide');
            }
            else {
                pageMascota.sweetAlert.swalDefaultError('Hubo un error al guardar.');
            }
        },

        // modal redes sociales
        GuardarFormularioRedesSociales: function () {
            let redSocial = $('#txt-red-social').val();

            let vData = {};
            vData.CodigoTabla = 12;
            vData.DescripcionCorta = redSocial;


            let vUrl = `https://localhost:44355/api/tabla-generica/registrar-tabla-generica`;

            let vInit = {};
            vInit.method = "POST";
            vInit.headers = {};
            vInit.headers["Content-Type"] = "application/json";
            vInit.body = JSON.stringify(vData);

            fetch(vUrl, vInit)
                .then(x => x.json())
                .then(pageMascota.methods.GuardarFormularioRedesSocialesResponse);
        },
        GuardarFormularioRedesSocialesResponse: function (pData) {
            if (pData == true) {
                pageMascota.sweetAlert.swalDefaultSuccess('Se guardó correctamente.');
                pageMascota.methods.ObtenerRedesSociales();
                $("#modal-redes-sociales").modal('hide');
            }
            else {
                pageMascota.sweetAlert.swalDefaultError('Hubo un error al guardar.');
            }
        }
    }



}