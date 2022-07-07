using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RegistroDeMascotas.web.Controllers
{
    public class MascotaController : Controller
    {
        // GET: Mascota
        public ActionResult ListarMascota()
        {
            return View();
        }

        public ActionResult ListarMascotasEncontradas()
        {
            return View();
        }

        public ActionResult ListarMascotasPerdidas()
        {
            return View();
        }

         
    }
}