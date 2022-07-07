using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.BE
{
    public class ReportarMascotaBE
    {
        public int Id_ReportarMascota { get; set; }
        public int Id_Mascotas { get; set; }
        public bool CheckPerdida { get; set; }
        public string FechaPerdida { get; set; }
        public string FechaEncontrado {get;set;}
        public string Direccion { get; set; }
        public int IdDistrito { get; set; }
        public string DetPerdida { get; set; }
        public string DesDistrito { get; set; }
        public List<ContactoBE> Contactos { get; set; }

        // datos adicionales
        //public int ID_Usuario { get; set; }
        //public string DesAdicional { get; set; }
        //public string Correo { get; set; }
    }
}
