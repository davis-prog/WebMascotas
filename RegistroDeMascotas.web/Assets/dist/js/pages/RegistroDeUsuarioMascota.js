
const pageRegistroDeUsuarioMascota = {

    init: function () {

        pageRegistroDeUsuarioMascota.methods.ObtenerListas();
        pageRegistroDeUsuarioMascota.methods.ValidarFormulario();
        pageRegistroDeUsuarioMascota.sweetAlert.Init();

        $("#btn-continuar").click(pageRegistroDeUsuarioMascota.events.btnContinuarClick);
        $("#btn-regresar").click(pageRegistroDeUsuarioMascota.events.btnRegresarClick);

        $("#txt-foto").change(pageRegistroDeUsuarioMascota.events.changeImagenClick);
        $('#btn-cancelar').click(pageRegistroDeUsuarioMascota.events.btnCancelarClick);
         
     },
    data: {
        listaTipoDeDocumentoIdentidad: [],
        listaPreguntaDeSeguridad: [],
        listaGenero: [],
        listaGeneroMascota: [],
        listaColor: [],
        listaTamanio: [],
        listaRaza: [],
        listaCola: [],
        listaOrejas: [],
        listaFotos: [],
        vFotosMascota: [],
    },
    events: {
        btnContinuarClick: function () {
            let vFormularioEsValido = $("#frm-registro").valid();
            if (vFormularioEsValido) {

                let vContrasenia = $("#txt-contrasenia").val();
                let vReContrasenia = $("#txt-repetircontraseña").val();
                if (vContrasenia != vReContrasenia) {
                    pageRegistroDeUsuarioMascota.sweetAlert.swalDefaultInfo("Las contraseñas no coinciden.")
                    return;
                }

                let vNumDocumento = $("#txt-numdocumento").val();
                let numAle = Math.random() * 1000 + 1;
                let num = Math.round(numAle);
                let Did = vNumDocumento + '-' + num
                $('#txt-DIP').val(Did);

                stepper.next(); 
                //$("a[href='#custom-tabs-one-profile']").tab("show");
            }
            else return;
        },
        btnRegresarClick: function () {
            stepper.previous();
        },
        btnCancelarClick: function () {
            $('#frm-registro')[0].reset();
            //$("#cbo-preguntadeseguridad").select2("val", "1");
            setTimeout("window.location.href = '/Login/RegistroDeUsuarioMascota'", 100);

        },
        changeImagenClick: function () {
            pageRegistroDeUsuarioMascota.data.vFotosMascota = [];

            for (var i = 0; i < $(this).get(0).files.length; ++i) {
                var filename = $(this).get(0).files[i].name;
                var file = $(this).prop('files')[i];
                var response = function (result, nomArchivo, contador) {
                    var obj = {
                        NombreArchivo: nomArchivo,
                        Foto: result,
                        ImagenPrincipal: contador == 0 ? 1 : 0
                    };
                    pageRegistroDeUsuarioMascota.data.vFotosMascota.push(obj);
                }
                pageRegistroDeUsuarioMascota.methods.fileToBase64(file, response, filename, i);
            }

            //console.log(pageRegistroDeUsuarioMascota.data.vFotosMascota);
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
        swalDefaultQuestion: function (title) {
            this.Init().fire({
                icon: 'question',
                title: title
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

            let vUrlListaTipoDeDocumentoIdentidad = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/9`;
            let vUrlListaPreguntaDeSeguridad = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/8`;
            let vUrlListaGenero = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/1`;
            let vUrlListaGeneroMascota = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/2`;
            let vUrlListaColor = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/3`;
            let vUrlListaTamanio = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/4`;
            let vUrlListaRaza = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/5`;
            let vUrlListaCola = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/6`;
            let vUrlListaOrejas = `https://localhost:44355/api/tabla-generica/obtener-datos-genericos/7`;
            Promise.all([
                fetch(vUrlListaTipoDeDocumentoIdentidad),
                fetch(vUrlListaPreguntaDeSeguridad),
                fetch(vUrlListaGenero),
                fetch(vUrlListaGeneroMascota),
                fetch(vUrlListaColor),
                fetch(vUrlListaTamanio),
                fetch(vUrlListaRaza),
                fetch(vUrlListaCola),
                fetch(vUrlListaOrejas)
            ]).then(x => Promise.all(x.map(r => r.json())))
                .then(pageRegistroDeUsuarioMascota.methods.CargarListas)



        },
        CargarListas: function ([pDataTipoDeDocumentoDeIdentidad, pDataPreguntaDeSeguridad, pDataGenero, pDataGeneroMascota, pDataColor, pDataTamanio, pDataRaza, pDataCola, pDataOrejas]) {
            pageRegistroDeUsuarioMascota.data.listaTipoDeDocumentoIdentidad = pDataTipoDeDocumentoDeIdentidad == null ? [] : pDataTipoDeDocumentoDeIdentidad.map(x => x);
            pageRegistroDeUsuarioMascota.data.listaPreguntaDeSeguridad = pDataPreguntaDeSeguridad == null ? [] : pDataPreguntaDeSeguridad.map(x => x);
            pageRegistroDeUsuarioMascota.data.listaGenero = pDataGenero == null ? [] : pDataGenero.map(x => x);
            pageRegistroDeUsuarioMascota.data.listaGeneroMascota = pDataGeneroMascota == null ? [] : pDataGeneroMascota.map(x => x);
            pageRegistroDeUsuarioMascota.data.listaColor = pDataColor == null ? [] : pDataColor.map(x => x);
            pageRegistroDeUsuarioMascota.data.listaTamanio = pDataTamanio == null ? [] : pDataTamanio.map(x => x);
            pageRegistroDeUsuarioMascota.data.listaRaza = pDataRaza == null ? [] : pDataRaza.map(x => x);
            pageRegistroDeUsuarioMascota.data.listaCola = pDataCola == null ? [] : pDataCola.map(x => x);
            pageRegistroDeUsuarioMascota.data.listaOrejas = pDataOrejas == null ? [] : pDataOrejas.map(x => x);

            let vListaTipoDeDocumentoDeIdentidad = pDataTipoDeDocumentoDeIdentidad == null ? [] : pDataTipoDeDocumentoDeIdentidad.map(x => Object.assign(x, { id: x.CodigoFila, text: x.DescripcionCorta }));
            $("#cbo-tipodedocumento").select2({ data: vListaTipoDeDocumentoDeIdentidad });
            let vListaPreguntaDeSeguridad = pDataPreguntaDeSeguridad == null ? [] : pDataPreguntaDeSeguridad.map(x => Object.assign(x, { id: x.CodigoFila, text: x.DescripcionCorta }));
            $("#cbo-preguntadeseguridad").select2({ data: vListaPreguntaDeSeguridad });
            let vListaGenero = pDataGenero == null ? [] : pDataGenero.map(x => Object.assign(x, { id: x.CodigoFila, text: x.DescripcionCorta }));
            $("#cbo-genero").select2({ data: vListaGenero });
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



        },
        ValidarFormulario: function () {
            $('#frm-registro').validate({
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
                    contrasenia: {
                        required: true
                    },
                    repetircontraseña: {
                        required: true
                    },
                    preguntadeseguridad: {
                        required: true
                    },
                    respuestadeseguridad: {
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
                    },
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
                    //foto: {
                    //    required: true
                    //},
                    DIP: {
                        required: true
                    },
                    descripmascota: {
                        required: true
                    },  
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
                    contrasenia: {
                        required: 'Ingrese Contraseña'
                    },
                    repetircontraseña: {
                        required: 'Ingrese Repetir Contraseña'
                    },
                    preguntadeseguridad: {
                        required: 'Seleccione Pregunta de Seguridad'
                    },
                    respuestadeseguridad: {
                        required: 'Ingrese Respuesta de Seguridad'
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
                    //foto: {
                    //    required: 'Ingrese Foto'
                    //},
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

                    pageRegistroDeUsuarioMascota.methods.GuardarFormulario();
                }
            });
        },
        GuardarFormulario: function () {
            let vIdTipoDocumento = $("#cbo-tipodedocumento").val();
            let vNumDocumento = $("#txt-numdocumento").val();
            let vNombres = $("#txt-nombres").val();
            let vApellidoPaterno = $("#txt-apellidopaterno").val();
            let vApellidoMaterno = $("#txt-apellidomaterno").val();
            let vContrasenia = $("#txt-contrasenia").val();
            let vReContrasenia = $("#txt-repetircontraseña").val();
            let vIdPreguntaSeguridad = $("#cbo-preguntadeseguridad").val();
            let vRespuestaSeguridad = $("#txt-respuestadeseguridad").val();
            let vCorreoElectronico = $("#txt-correoelectronico").val();
            let vTelefonoCelular = $("#txt-telefonocelular").val();
            let vTelefonoFijo = $("#txt-telefonofijo").val();
            let vIdGenero = $("#cbo-genero").val();
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



            let vData = {};
            vData = {};
            vData.IdTipoDocumento = vIdTipoDocumento;
            vData.NumDocumento = vNumDocumento;
            vData.Nombres = vNombres;
            vData.ApellidoPaterno = vApellidoPaterno;
            vData.ApellidoMaterno = vApellidoMaterno;
            vData.Correo = vCorreoElectronico;
            vData.Celular = vTelefonoCelular;
            vData.TelefonoFijo = vTelefonoFijo;
            vData.IdGenero = vIdGenero;
            vData.Credencial = {};
            vData.Credencial.Contrasenia = vContrasenia;
            vData.Credencial.ReContrasenia = vReContrasenia;
            vData.Credencial.IdPreguntaSeguridad = vIdPreguntaSeguridad;
            vData.Credencial.RespuestaSeguridad = vRespuestaSeguridad;
            vData.Mascota = {};
            vData.Mascota.DIPAuto = vDip;
            vData.Mascota.Nombre = vNombreMascota;
            vData.Mascota.IdGenero = vIdGeneroMascota;
            vData.Mascota.IdColor = vIdColorMascota;
            vData.Mascota.IdTamanio = vIdTamanioMascota;
            vData.Mascota.IdRaza = vIdRazaMascota;
            vData.Mascota.IdCola = vIdColaMascota;
            vData.Mascota.IdOrejas = vIdOrejaMascota;
            vData.Mascota.Edad = vEdadMascota;
            vData.Mascota.DescripcionAdicional = vDescripcionMascota;
            vData.Mascota.Fotos = [];
            if (pageRegistroDeUsuarioMascota.data.vFotosMascota.length != 0) {
                vData.Mascota.Fotos = pageRegistroDeUsuarioMascota.data.vFotosMascota;
            } else {
                pageRegistroDeUsuarioMascota.sweetAlert.swalDefaultInfo('Seleccione al menos una foto.');
                return;
            }


            let vUrl = `https://localhost:44355/api/usuario/registrar-usuario`;

            let vInit = {};
            vInit.method = "POST";
            vInit.headers = {};
            vInit.headers["Content-Type"] = "application/json";
            vInit.body = JSON.stringify(vData);

            fetch(vUrl, vInit)
                .then(x => x.json())
                .then(pageRegistroDeUsuarioMascota.methods.GuardarFormularioResponse);
        },
        GuardarFormularioResponse: function (pData) {
            if (pData == true) {
                pageRegistroDeUsuarioMascota.sweetAlert.swalDefaultSuccess('Se guardó correctamente.');

                pageRegistroDeUsuarioMascota.methods.IniciarSesion();
            }
            else {
                pageRegistroDeUsuarioMascota.sweetAlert.swalDefaultError('Hubo un error al guardar.');
            }

        },
        IniciarSesion: function () {
            // iniciar session aqui 
            setTimeout("window.location.href = '/Account/Login'", 100);
        }
    }


}



