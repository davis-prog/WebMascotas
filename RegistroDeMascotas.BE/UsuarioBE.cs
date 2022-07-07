using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.BE
{
    public class UsuarioBE
    {
         
        public int IdUsuario { get; set; }
        public int IdTipoDocumento { get; set; }
        public string NumDocumento { get; set; }
        public string Nombres { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string Correo { get; set; }
        public int Celular { get; set; }
        public int TelefonoFijo { get; set; }
        public int IdGenero { get; set; }
        public CredencialBE Credencial { get; set; }
        public MascotaBE Mascota { get; set; }
    }
}
