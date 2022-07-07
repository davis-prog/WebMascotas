using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.BE
{
    public class MascotaBE
    {
        public int IdMascotas { get; set; }
        public int IdUsuario { get; set; }
        public string DIPAuto { get; set; }
        public string Nombre { get; set; }
        public int? IdGenero { get; set; }
        public int? IdColor { get; set; }
        public int? IdTamanio { get; set; }
        public int? IdRaza { get; set; }
        public int? IdCola { get; set; }
        public int? IdOrejas { get; set; }
        public string Edad { get; set; }
        public string DescripcionAdicional { get; set; }
        public List<ImagenesBE> Fotos { get; set; }
        public string DesGenero { get; set; }
        public string DesColor { get; set; }
        public string DesTamanio { get; set; }
        public string DesRaza { get; set; }
        public string DesCola { get; set; }
        public string DesOrejas { get; set; }

        public ReportarMascotaBE ReportarMascota { get; set; }
 
    }
}
