using RegistroDeMascotas.BE;
using RegistroDeMascotas.DA;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.BL
{
    public class IniciarSesionBL : BaseBL
    {
        IniciarSesionDA iniciarSesionDA = new IniciarSesionDA();

        public UsuarioBE IniciarSesion(IniciarSesionBE pCredencial)
        {
            var Entidad = new UsuarioBE();
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    Entidad = iniciarSesionDA.IniciarSesion(pCredencial, vCn);
                    vCn.Close();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return Entidad;
        }
    }
}
