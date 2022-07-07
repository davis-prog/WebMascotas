using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.BE
{
    public class CredencialBE
    {
        public int IdCredencial { get; set; }
        public int IdUsuario { get; set; }
        public string Contrasenia { get; set; }
        public string ReContrasenia { get; set; }
        public int IdPreguntaSeguridad { get; set; }
        public string RespuestaSeguridad { get; set; }
    }
}
