using RegistroDeMascotas.BE;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.DA
{
    public class IniciarSesionDA
    {
        public UsuarioBE IniciarSesion(IniciarSesionBE pRegistro, SqlConnection pCn)
        {
            List<UsuarioBE> vLista = null;


            using (SqlCommand vCmd = new SqlCommand("usp_iniciar_session", pCn))
            {
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@NumDocumento", pRegistro.NumDocumento);
                vCmd.Parameters.AddWithValue("@Contrasenia", pRegistro.Contrasenia);
                using (SqlDataReader vDr = vCmd.ExecuteReader())
                {
                    if (vDr.HasRows)
                    {
                        vLista = new List<UsuarioBE>();
                        while (vDr.Read())
                        {
                            UsuarioBE vItem = new UsuarioBE();
                            vItem.IdUsuario = (int)vDr["Id_Usuario"];
                            vItem.NumDocumento = (string)vDr["NumDocumento"];
                            vItem.Nombres = (string)vDr["Nombres"];  
                            vItem.IdGenero = (int)vDr["IdGenero"]; 
                            vLista.Add(vItem); 
                        }
                        return vLista.FirstOrDefault(); 
                    }
                }

            }

            return null;

        }
    }
}
