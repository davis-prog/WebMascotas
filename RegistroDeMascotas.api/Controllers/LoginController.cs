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
    [RoutePrefix("api/login")]
    public class LoginController : ApiController
    {
        IniciarSesionBL iniciarSesionBL = new IniciarSesionBL();

        [Route("validar-usuario")]
        [HttpPost]
        public IHttpActionResult IniciarSesion(IniciarSesionBE iniciarSesion)
        { 
            var usuarioBE = iniciarSesionBL.IniciarSesion(iniciarSesion); 
            return Ok(usuarioBE);
        }
    }
}
