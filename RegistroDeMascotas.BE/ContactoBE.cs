using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.BE
{
    public class ContactoBE
    {
        public int Id_Contacto { get; set; }
        public int Id_ReportarMascota { get; set; }
        public int IdRedSocial { get; set; }
        public string RedSocial { get; set; }
        public string DesRedSocial { get; set; }
    }
}
