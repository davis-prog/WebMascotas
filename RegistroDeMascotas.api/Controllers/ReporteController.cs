using RegistroDeMascotas.BE.Reporte;
using RegistroDeMascotas.BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RegistroDeMascotas.api.Controllers
{
    [RoutePrefix("api/reporte")]
    public class ReporteController : ApiController
    {
        ReporteBL reporteBL = new ReporteBL();

        [Route("obtener-reporte-perdidos/{pAnio:int?}")]
        [HttpGet]
        public IHttpActionResult ObtenerReportePerdidos(int? pAnio)
        {
            if (pAnio == 0) pAnio = null;

            var reporte = reporteBL.ObtenerReportePerdidos(pAnio);
            return Ok(reporte);
        }

        [Route("obtener-reporte-encontrados/{pAnio:int?}")]
        [HttpGet]
        public IHttpActionResult ObtenerReporteEncontrados(int? pAnio)
        {
            if (pAnio == 0) pAnio = null;
            var reporte = reporteBL.ObtenerReporteEncontrados(pAnio);
            return Ok(reporte);
        }

        [Route("obtener-reporte-dias")]
        [HttpPost]
        public IHttpActionResult ObtenerReporteDias(ReporteDiasBE parametro)
        {
            var reporte = reporteBL.ObtenerReporteDias(parametro.check);
            return Ok(reporte);
        }

        [Route("obtener-reporte-meses-e/{pAnio:int?}")]
        [HttpGet]
        public IHttpActionResult ObtenerReporteMesesE(int? pAnio)
        {
            if (pAnio == 0) pAnio = null;
            var reporte = reporteBL.ObtenerReporteMesesE(pAnio);
            return Ok(reporte);
        }

        [Route("obtener-reporte-meses-p/{pAnio:int?}")]
        [HttpGet]
        public IHttpActionResult ObtenerReporteMesesP(int? pAnio)
        {
            if (pAnio == 0) pAnio = null;
            var reporte = reporteBL.ObtenerReporteMesesP(pAnio);
            return Ok(reporte);
        }

        [Route("obtener-reporte-totales")]
        [HttpGet]
        public IHttpActionResult ObtenerReporteTotales()
        {
            var reporte = reporteBL.ObtenerReporteTotales();
            return Ok(reporte);
        }





    }
}
