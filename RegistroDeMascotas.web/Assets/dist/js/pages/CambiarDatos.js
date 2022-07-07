const pageCambiarDatos = {
    init: function () {
        pageCambiarDatos.methods.ObtenerListas(); 
        pageCambiarDatos.methods.ValidarFormulario();
        pageCambiarDatos.sweetAlert.Init();

        $('#btn-cancelar').click(pageCambiarDatos.events.btnCancelarClick);
         $("#cbo-tipodedocumento").attr("readonly", "readonly");

    },
    data: {
        listaTipoDeDocumentoIdentidad: [],
        listaGenero: [],
    },
    events: {
        btnCancelarClick: function () {
            setTimeout("window.location.href = '/'", 100);
        },
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
        ObtenerUsuario: function () {
            let ID_Usuario = $('#ID_Usuario').val();
            if (ID_Usuario != "") {
                let vUrlListaUsuario = `https://localhost:44355/api/usuario/obtener-datos-usuario/` + ID_Usuario;

                Promise.all([
                    fetch(vUrlListaUsuario)
                ]).then(x => Promise.all(x.map(r => r.json())))
                    .then(pageCambiarDatos.methods.CargarFormulario)
            } else {
                pageCambiarDatos.sweetAlert.swalDefaultInfo('Se perdio la sesion, por favor vuelva a ingresar.');
            }
        },
        CargarFormulario: function ([pDataUsuario]) {
            var data = pDataUsuario;
            if (data != null) {
                $("#cbo-tipodedocumento").select2("val", data.IdTipoDocumento.toString());
                $("#txt-numdocumento").val(data.NumDocumento);
                $("#txt-nombres").val(data.Nombres);
                $("#txt-apellidopaterno").val(data.ApellidoPaterno);
                $("#txt-apellidomaterno").val(data.ApellidoMaterno);
                $("#txt-correoelectronico").val(data.Correo);
                $("#txt-telefonocelular").val(data.Celular);
                $("#txt-telefonofijo").val(data.TelefonoFijo);
                $("#cbo-genero").select2("val", data.IdGenero.toString());
            }
        },
        ObtenerListas: function () {
            let vUrlListaTipoDeDocumentoIdentidad = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/9`;
            let vUrlListaGenero = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/1`;

            Promise.all([
                fetch(vUrlListaTipoDeDocumentoIdentidad),
                fetch(vUrlListaGenero)
            ]).then(x => Promise.all(x.map(r => r.json())))
                .then(pageCambiarDatos.methods.CargarListas);
        },
        CargarListas: function ([pDataTipoDeDocumentoDeIdentidad, pDataGenero]) {
            pageCambiarDatos.data.listaTipoDeDocumentoIdentidad = pDataTipoDeDocumentoDeIdentidad == null ? [] : pDataTipoDeDocumentoDeIdentidad.map(x => x);
            pageCambiarDatos.data.listaGenero = pDataGenero == null ? [] : pDataGenero.map(x => x);

            let vListaTipoDeDocumentoDeIdentidad = pDataTipoDeDocumentoDeIdentidad == null ? [] : pDataTipoDeDocumentoDeIdentidad.map(x => Object.assign(x, { id: x.CodigoFila, text: x.DescripcionCorta }));
            $("#cbo-tipodedocumento").select2({ data: vListaTipoDeDocumentoDeIdentidad });
            let vListaGenero = pDataGenero == null ? [] : pDataGenero.map(x => Object.assign(x, { id: x.CodigoFila, text: x.DescripcionCorta }));
            $("#cbo-genero").select2({ data: vListaGenero });

            pageCambiarDatos.methods.ObtenerUsuario();

        },
        ValidarFormulario: function () {
            $('#frm-actualizar').validate({
                rules: {
                    tipodedocumento: {
                        required: true
                    },
                    numdocumento: {
                        required: true,
                    },
                    nombres: {
                        required: true
                    },
                    apellidopaterno: {
                        required: true
                    },
                    apellidomaterno: {
                        required: true
                    },
                    correoelectronico: {
                        required: true
                    },
                    telefonocelular: {
                        required: true
                    },
                    genero: {
                        required: true
                    }
                },
                messages: {
                    tipodedocumento: {
                        required: 'Ingrese Tipo Documento'
                    },
                    numdocumento: {
                        required: 'Ingrese N° Documento'
                    },
                    nombres: {
                        required: 'Ingrese Nombres'
                    },
                    apellidopaterno: {
                        required: 'Ingrese Apellido Paterno'
                    },
                    apellidomaterno: {
                        required: 'Ingrese Apellido Materno'
                    },
                    correoelectronico: {
                        required: 'Ingrese Correo Electrónico'
                    },
                    telefonocelular: {
                        required: 'Ingrese Teléfono Celular'
                    },
                    genero: {
                        required: 'Seleccione Género'
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

                    pageCambiarDatos.methods.GuardarFormulario();
                }
            });
        },
        GuardarFormulario: function () {
            let vIdTipoDocumento = $("#cbo-tipodedocumento").val();
            let vNumDocumento = $("#txt-numdocumento").val();
            let vNombres = $("#txt-nombres").val();
            let vApellidoPaterno = $("#txt-apellidopaterno").val();
            let vApellidoMaterno = $("#txt-apellidomaterno").val();
            let vCorreoElectronico = $("#txt-correoelectronico").val();
            let vTelefonoCelular = $("#txt-telefonocelular").val();
            let vTelefonoFijo = $("#txt-telefonofijo").val();
            let vIdGenero = $("#cbo-genero").val();
            let ID_Usuario = $('#ID_Usuario').val();

            let vData = {};
            vData = {};
            vData.IdUsuario = ID_Usuario;
            vData.IdTipoDocumento = vIdTipoDocumento;
            vData.NumDocumento = vNumDocumento;
            vData.Nombres = vNombres;
            vData.ApellidoPaterno = vApellidoPaterno;
            vData.ApellidoMaterno = vApellidoMaterno;
            vData.Correo = vCorreoElectronico;
            vData.Celular = vTelefonoCelular;
            vData.TelefonoFijo = vTelefonoFijo;
            vData.IdGenero = vIdGenero;

            let vUrl = `https://localhost:44355/api/usuario/actualizar-usuario`;

            let vInit = {};
            vInit.method = "POST";
            vInit.headers = {};
            vInit.headers["Content-Type"] = "application/json";
            vInit.body = JSON.stringify(vData);

            fetch(vUrl, vInit)
                .then(x => x.json())
                .then(pageCambiarDatos.methods.GuardarFormularioResponse);
        },
        GuardarFormularioResponse: function (pData) {
            if (pData == true) {
                pageCambiarDatos.sweetAlert.swalDefaultSuccess('Se actualizo correctamente.');
                setTimeout("window.location.href = '/'", 1000);
            }
            else {
                pageCambiarDatos.sweetAlert.swalDefaultError('Hubo un error al actualizar.');
            }

        },

    }
};