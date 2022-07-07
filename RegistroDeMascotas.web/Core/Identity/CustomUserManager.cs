using Microsoft.AspNet.Identity;
using System.Threading.Tasks;

namespace RegistroDeMascotas.web.Core.Identity
{
    public class CustomUserManager : UserManager<CustomApplicationUser>
    {
        public CustomUserManager() : base(new CustomUserStore<CustomApplicationUser>())
        {
        }

        public override Task<CustomApplicationUser> FindAsync(string userName, string password)
        {
            var taskInvoke = Task<CustomApplicationUser>.Factory.StartNew(() =>
            {
                var credential = new 
                {
                    NumDocumento = userName,
                    Contrasenia = password
                };

                 
                var auth = new Core.Authorization();
                var result = auth.Authorize(credential);

                return new CustomApplicationUser(result.Result);

            });

            return taskInvoke;
        }
    }



   
}