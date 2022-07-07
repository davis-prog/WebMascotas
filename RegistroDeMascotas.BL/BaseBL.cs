using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.BL
{
    public class BaseBL
    {
        protected string cadenaConexion = ConfigurationManager.ConnectionStrings["cn"].ConnectionString;

    }
}
