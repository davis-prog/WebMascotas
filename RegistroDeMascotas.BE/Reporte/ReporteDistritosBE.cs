using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.BE.Reporte
{
    public class ReporteDistritosBE
    {
        public string Distrito { get; set; }
        public string Estado { get; set; }
        public int TotalMascotas { get; set; } 
        public int Anio { get; set; }
        public string Color { get; set; }
        public string Periodo { get; set; }

    }
}
