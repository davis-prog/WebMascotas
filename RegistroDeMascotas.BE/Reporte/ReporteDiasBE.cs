using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.BE.Reporte
{
    public class ReporteDiasBE
    { 
        public int Id_Mascotas { get; set; }
        public string Nombre { get; set; }
        public string FechaPerdida { get; set; }
        public string FechaEncontrado { get; set; }
        public int DifDias { get; set; }
        public string DesDistrito { get; set; }
        public string Estado { get; set; } 

        public bool? check { get; set; }
    }
}
