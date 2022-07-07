
const pageCambiarContrasenia = {
    init: function () {
        pageCambiarContrasenia.methods.ObtenerListas();
        pageCambiarContrasenia.methods.ValidarFormulario();
        pageCambiarContrasenia.sweetAlert.Init();

        $('#btn-cancelar').click(pageCambiarContrasenia.events.btnCancelarClick)
    },
    data: {
        listaPreguntaDeSeguridad: []
    },
    events: {
        btnCancelarClick: function () {
             
            $('#frm-actualizar')[0].reset();
            $("#cbo-preguntadeseguridad").select2("val", "1");

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
        swalDefaultQuestion: function (title) {
            this.Init().fire({
                icon: 'question',
                title: title
            })
        },
    },
    methods: {
        ObtenerListas: function () {

            let vUrlListaPreguntaDeSeguridad = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/8`;
            Promise.all([
                fetch(vUrlListaPreguntaDeSeguridad)
            ]).then(x => Promise.all(x.map(r => r.json())))
                .then(pageCambiarContrasenia.methods.CargarListas)



        },
        CargarListas: function ([pDataPreguntaDeSeguridad]) {
            pageCambiarContrasenia.data.listaPreguntaDeSeguridad = pDataPreguntaDeSeguridad == null ? [] : pDataPreguntaDeSeguridad.map(x => x);

            let vListaPreguntaDeSeguridad = pDataPreguntaDeSeguridad == null ? [] : pDataPreguntaDeSeguridad.map(x => Object.assign(x, { id: x.CodigoFila, text: x.DescripcionCorta }));
            $("#cbo-preguntadeseguridad").select2({
                data: vListaPreguntaDeSeguridad
            });

        },
        ValidarFormulario: function () {
            $('#frm-actualizar').validate({
                rules: {
                    preguntadeseguridad: {
                        required: true
                    },
                    respuestadeseguridad: {
                        required: true
                    },
                    contrasenia: {
                        required: true
                    },
                    repetircontrasenia: {
                        required: true
                    },
                },
                messages: {
                    preguntadeseguridad: {
                        required: 'Seleccione Pregunta de Seguridad'
                    },
                    respuestadeseguridad: {
                        required: 'Ingrese Respuesta de Seguridad'
                    },
                    contrasenia: {
                        required: 'Ingrese Contraseña'
                    },
                    repetircontrasenia: {
                        required: 'Ingrese Repetir Contraseña'
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

                    let vContrasenia = $("#txt-contrasenia").val();
                    let vReContrasenia = $("#txt-repetircontrasenia").val();

                    if (vContrasenia != vReContrasenia) {
                        pageCambiarContrasenia.sweetAlert.swalDefaultInfo("Las contraseñas no coinciden.");
                        return;
                    }

                    pageCambiarContrasenia.methods.GuardarFormulario();
                }
            });

        },
        GuardarFormulario: function () {
            let vIdPreguntaSeguridad = $("#cbo-preguntadeseguridad").val();
            let vRespuestaSeguridad = $("#txt-respuestadeseguridad").val();
            let vContrasenia = $("#txt-contrasenia").val();
            let vReContrasenia = $("#txt-repetircontrasenia").val();
            let ID_Usuario = $('#ID_Usuario').val();

            let vData = {};
            vData = {};
            vData.IdUsuario = ID_Usuario; // falta recuperar esto valor de login 
            vData.Contrasenia = vContrasenia;
            vData.ReContrasenia = vReContrasenia;
            vData.IdPreguntaSeguridad = vIdPreguntaSeguridad;
            vData.RespuestaSeguridad = vRespuestaSeguridad;

            let vUrl = `https://localhost:44355/api/usuario/actualizar-credenciales`;
            let vInit = {};
            vInit.method = "POST";
            vInit.headers = {};
            vInit.headers["Content-Type"] = "application/json";
            vInit.body = JSON.stringify(vData);

            fetch(vUrl, vInit)
                .then(x => x.json())
                .then(pageCambiarContrasenia.methods.GuardarFormularioResponse);
        },
        GuardarFormularioResponse: function (pData) {
            if (pData.estado && pData.mensaje == "") {
                pageCambiarContrasenia.sweetAlert.swalDefaultSuccess('Se actualizo correctamente.');
                setTimeout("window.location.href = '/'", 100);
            } else if (!pData.estado && pData.mensaje != "") {
                pageCambiarContrasenia.sweetAlert.swalDefaultInfo(pData.mensaje);
            }
            else pageCambiarContrasenia.sweetAlert.swalDefaultError('Hubo un error al actualizar.');
        }
    }
}