using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RegistroDeMascotas.web.Controllers
{
    public class ReporteController : Controller
    {
        // GET: Reporte
        public ActionResult ReportesMascotas()
        {
            return View();
        }
    }
}