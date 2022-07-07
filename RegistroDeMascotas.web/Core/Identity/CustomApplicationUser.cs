using Microsoft.AspNet.Identity;
using RegistroDeMascotas.BE;

namespace RegistroDeMascotas.web.Core.Identity
{
    public class CustomApplicationUser : IUser
    {
        public string Id { get; }
        public string UserName { get; set; }
        public string NumDocumento { get; }


        //public IEnumerable<Entities.Menu> ListaMenu {get;set;}
        public UsuarioBE Usuario { get; set; }
        //public Common.Response<IEnumerable< Entities.Menu>> Menu { get; set; }


        public CustomApplicationUser(UsuarioBE usuario)
        {
            Usuario = usuario;
            //Menu = menu;

            if (usuario != null)
            {
                Id = usuario.IdUsuario.ToString();
                UserName = usuario.Nombres;
                NumDocumento = usuario.NumDocumento;
                //ListaMenu = menu.Data;
            }
            else
            {
                // Valores por defecto, lo cuales no tendran relevancia, puesto que la aplicación no iniciará sesión.
                Id = "01";
                UserName = "USER";
                NumDocumento = "0";
                //ListaMenu = new List<Entities.Menu>();
            }
        }


    }
}