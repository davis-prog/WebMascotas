using RegistroDeMascotas.BE;
using RegistroDeMascotas.BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RegistroDeMascotas.api.Controllers
{
    [RoutePrefix("api/usuario")]
    public class UsuarioController : ApiController
    {
        UsuarioBL usuarioBL = new UsuarioBL();
        

        [Route("registrar-usuario")]
        [HttpPost]
        public IHttpActionResult RegistrarUsuario(UsuarioBE pRegistro)
        {
            bool vSeGuardo = usuarioBL.RegistrarUsuario(pRegistro);
            return Ok(vSeGuardo);
        }

        [Route("actualizar-credenciales")]
        [HttpPost]
        public IHttpActionResult ActualizarCredenciales(CredencialBE pCredencial)
        {
            bool vSeGuardo = usuarioBL.ActualizarCredenciales(pCredencial, out string Mensaje);

            var json = new
            {
                estado = vSeGuardo,
                mensaje = Mensaje
            };

            return Ok(json);
        }

        [Route("actualizar-usuario")]
        [HttpPost]
        public IHttpActionResult ActualizarUsuario(UsuarioBE pRegistro)
        {
            bool vSeGuardo = usuarioBL.ActualizarUsuario(pRegistro); 
            return Ok(vSeGuardo);
        }

        [Route("obtener-datos-usuario/{pIdUsuario:int}")]
        [HttpGet]
        public IHttpActionResult ObtenerDatosUsuario(int pIdUsuario)
        {
            var Usuario = usuarioBL.ObtenerDatosUsuario(pIdUsuario);
            return Ok(Usuario);
        }


    }
}
