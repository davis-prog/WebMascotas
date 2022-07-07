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
    [RoutePrefix("api/mascota")]
    public class MascotaController : ApiController
    {
        MascotaBL mascotaBL = new MascotaBL();

        [Route("registrar-mascota")]
        [HttpPost]
        public IHttpActionResult RegistrarMascota(MascotaBE mascota)
        {
            bool vSeGuardo = mascotaBL.RegistrarMascota(mascota);
            return Ok(vSeGuardo);
        }
         
        [Route("actualizar-mascota")]
        [HttpPost]
        public IHttpActionResult ActualizarMascota(MascotaBE mascota)
        {
            bool vSeGuardo = mascotaBL.ActualizarMascota(mascota);
            return Ok(vSeGuardo);
        }

        [Route("eliminar-mascota")]
        [HttpPost]
        public IHttpActionResult EliminarMascota(MascotaBE mascota)
        {
            bool vSeGuardo = mascotaBL.EliminarMascota(mascota);
            return Ok(vSeGuardo);
        }

        [Route("reportar-mascota")]
        [HttpPost]
        public IHttpActionResult ReportarMascota(ReportarMascotaBE reportarMascota)
        {
            bool vSeGuardo = mascotaBL.ReportarMascota(reportarMascota);
            return Ok(vSeGuardo);
        }

        [Route("listar-mascota-registrada/{pIdUsuario:int}")]
        [HttpGet]
        public IHttpActionResult ListarMascotaRegistrada(int pIdUsuario)
        {
            var listaMascotas = mascotaBL.ListarMascotaRegistrada(pIdUsuario);
            return Ok(listaMascotas);
        }

        [Route("listar-mascotas-encontradas")]
        [HttpPost]
        public IHttpActionResult ListarMascotasEncontradas(MascotaBE mascota)
        {
            var listaMascotas = mascotaBL.ListarMascotasEncontradas(mascota);
            return Ok(listaMascotas);
        }

        [Route("listar-mascotas-perdidas")]
        [HttpPost]
        public IHttpActionResult ListarMascotasPerdidas(MascotaBE mascota)
        {
            var listaMascotas = mascotaBL.ListarMascotasPerdidas(mascota);
            return Ok(listaMascotas);
        }

        [Route("obtener-detalles-mascota/{pIdMascota:int}")]
        [HttpGet]
        public IHttpActionResult ObtenerDetalleMascota(int pIdMascota)
        {
            var MascotaxUsuario = mascotaBL.ObtenerDetalleMascota(pIdMascota);
            return Ok(MascotaxUsuario);
        }

        [Route("obtener-contactos-mascota/{pIdMascota:int}")]
        [HttpGet]
        public IHttpActionResult ObtenerContatosMascota(int pIdMascota)
        {
            var MascotaxUsuario = mascotaBL.ObtenerContatosMascota(pIdMascota);
            return Ok(MascotaxUsuario);
        }


    }
}
