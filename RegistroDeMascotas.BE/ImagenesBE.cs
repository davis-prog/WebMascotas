using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.BE
{
    public class ImagenesBE
    {
        public int Id_Imagenes { get; set; }
        public int Id_Mascotas { get; set; }
        public string NombreArchivo { get; set; }
        public string Foto { get; set; }
        public int ImagenPrincipal { get; set; }
    }
}
