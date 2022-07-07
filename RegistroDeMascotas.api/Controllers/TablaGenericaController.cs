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
    [RoutePrefix("api/tabla-generica")]
    public class TablaGenericaController : ApiController
    {
        TablaGenericaBL tablaGenericaBL = new TablaGenericaBL();

        [Route("obtener-datos-genericos/{pCodigoTabla:int}")]
        [HttpGet]
        public IHttpActionResult ObtenerDatosGenericos(int pCodigoTabla)
        {
            List<TablaGenericaBE> vlista = tablaGenericaBL.ObtenerDatosGenericos(pCodigoTabla);
            return Ok(vlista);
        }

        [Route("registrar-tabla-generica")]
        [HttpPost]
        public IHttpActionResult RegistrarTablaGenerica(TablaGenericaBE tablaGenerica)
        {
            bool vSeGuardo = tablaGenericaBL.RegistrarTablaGenerica(tablaGenerica);
            return Ok(vSeGuardo);
        }
    }
}
