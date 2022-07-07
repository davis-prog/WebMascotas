using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RegistroDeMascotas.web.App_Start
{
    public class FilterConfig
    { 
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new Core.Filter.CustomAuthorizeAttribute());
        }
    }
}