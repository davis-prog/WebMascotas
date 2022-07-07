using RegistroDeMascotas.BE;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.DA
{
    public class UsuarioDA
    {
        public bool RegistrarUsuario(UsuarioBE pRegistro, SqlConnection pCn, SqlTransaction pTr, out int poUsuarioId)
        {
            bool vSeGuardo = false;
            poUsuarioId = 0;

            using (SqlCommand vCmd = new SqlCommand("usp_registrar_usuario", pCn))
            {
                vCmd.Transaction = pTr;
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@IdTipoDocumento", pRegistro.IdTipoDocumento);
                vCmd.Parameters.AddWithValue("@NumDocumento", pRegistro.NumDocumento);
                vCmd.Parameters.AddWithValue("@Nombres", pRegistro.Nombres);
                vCmd.Parameters.AddWithValue("@ApePaterno", pRegistro.ApellidoPaterno);
                vCmd.Parameters.AddWithValue("@ApeMaterno", pRegistro.ApellidoMaterno);
                vCmd.Parameters.AddWithValue("@Correo", pRegistro.Correo);
                vCmd.Parameters.AddWithValue("@Celular", pRegistro.Celular);
                vCmd.Parameters.AddWithValue("@TelefonoFijo", pRegistro.TelefonoFijo);
                vCmd.Parameters.AddWithValue("@IdGenero", pRegistro.IdGenero);
                vCmd.Parameters.Add(new SqlParameter { ParameterName = "@Id_Usuario", SqlDbType = System.Data.SqlDbType.Int, Direction = System.Data.ParameterDirection.Output });

                int vFilasAfectadas = vCmd.ExecuteNonQuery();
                vSeGuardo = vFilasAfectadas > 0;

                if (vSeGuardo) poUsuarioId = (int)vCmd.Parameters["@Id_Usuario"].Value;
            }

            return vSeGuardo;
        }

        public bool ActualizarUsuario(UsuarioBE pRegistro, SqlConnection pCn, SqlTransaction pTr)
        {
            bool vSeGuardo = false;

            using (SqlCommand vCmd = new SqlCommand("usp_actualizar_usuario", pCn))
            {
                vCmd.Transaction = pTr;
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Id_Usuario", pRegistro.IdUsuario);
                vCmd.Parameters.AddWithValue("@Nombres", pRegistro.Nombres);
                vCmd.Parameters.AddWithValue("@ApePaterno", pRegistro.ApellidoPaterno);
                vCmd.Parameters.AddWithValue("@ApeMaterno", pRegistro.ApellidoMaterno);
                vCmd.Parameters.AddWithValue("@Correo", pRegistro.Correo);
                vCmd.Parameters.AddWithValue("@Celular", pRegistro.Celular);
                vCmd.Parameters.AddWithValue("@TelefonoFijo", pRegistro.TelefonoFijo);
                vCmd.Parameters.AddWithValue("@IdGenero", pRegistro.IdGenero);

                int vFilasAfectadas = vCmd.ExecuteNonQuery();
                vSeGuardo = vFilasAfectadas > 0;
            }

            return vSeGuardo;
        }

        public UsuarioBE ObtenerDatosUsuario(int pIdUsuario, SqlConnection pCn)
        {
            List<UsuarioBE> vEntidad = null;
            using (SqlCommand vCmd = new SqlCommand("usp_obtener_datos_usuario", pCn))
            {
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Id_Usuario", pIdUsuario);
                using (SqlDataReader vDr = vCmd.ExecuteReader())
                {
                    if (vDr.HasRows)
                    {
                        vEntidad = new List<UsuarioBE>();
                        while (vDr.Read())
                        {
                            UsuarioBE vItem = new UsuarioBE();
                            // datos del contacto
                            vItem.IdUsuario = (int)vDr["Id_Usuario"];
                            vItem.IdTipoDocumento = (int)vDr["IdTipoDocumento"];
                            vItem.NumDocumento = (string)vDr["NumDocumento"];
                            vItem.Nombres = (string)vDr["Nombres"]; 
                            vItem.ApellidoPaterno = (string)vDr["ApePaterno"];
                            vItem.ApellidoMaterno = (string)vDr["ApeMaterno"]; 
                            vItem.Celular = (int)vDr["Celular"];
                            vItem.Correo = (string)vDr["Correo"];
                            vItem.TelefonoFijo = (int)vDr["TelefonoFijo"];
                            vItem.IdGenero = (int)vDr["IdGenero"]; 
                            vEntidad.Add(vItem);
                        }
                    }
                }
                return vEntidad.FirstOrDefault();
            }
        }


    }
}
