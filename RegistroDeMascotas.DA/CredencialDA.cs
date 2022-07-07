using RegistroDeMascotas.BE;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.DA
{
    public class CredencialDA
    {
        public bool RegistrarCredencial(CredencialBE pRegistro, SqlConnection pCn, SqlTransaction pTr)
        {
            bool vSeGuardo = false;

            using (SqlCommand vCmd = new SqlCommand("usp_registrar_credenciales", pCn))
            {
                vCmd.Transaction = pTr;
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Id_Usuario", pRegistro.IdUsuario);
                vCmd.Parameters.AddWithValue("@Contrasenia", pRegistro.Contrasenia);
                vCmd.Parameters.AddWithValue("@ReContrasenia", pRegistro.ReContrasenia);
                vCmd.Parameters.AddWithValue("@IdPreguntaSeguridad", pRegistro.IdPreguntaSeguridad);
                vCmd.Parameters.AddWithValue("@RptaSeguridad", pRegistro.RespuestaSeguridad);

                int vFilasAfectadas = vCmd.ExecuteNonQuery();
                vSeGuardo = vFilasAfectadas > 0;
            }

            return vSeGuardo;
        }

        public bool Actualizarcredencial(CredencialBE pRegistro, SqlConnection pCn, SqlTransaction pTr, out string poMensaje)
        {
            bool vSeGuardo = false;
            poMensaje = string.Empty;


            using (SqlCommand vCmd = new SqlCommand("usp_actualizar_credenciales", pCn))
            {
                vCmd.Transaction = pTr;
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Id_Usuario", pRegistro.IdUsuario);
                vCmd.Parameters.AddWithValue("@Contrasenia", pRegistro.Contrasenia);
                vCmd.Parameters.AddWithValue("@ReContrasenia", pRegistro.ReContrasenia);
                vCmd.Parameters.AddWithValue("@IdPreguntaSeguridad", pRegistro.IdPreguntaSeguridad);
                vCmd.Parameters.AddWithValue("@RptaSeguridad", pRegistro.RespuestaSeguridad);
                vCmd.Parameters.Add(new SqlParameter { ParameterName = "@Mensaje", SqlDbType = System.Data.SqlDbType.VarChar, Size = 100, Direction = System.Data.ParameterDirection.Output });

                int vFilasAfectadas = vCmd.ExecuteNonQuery();
                vSeGuardo = vFilasAfectadas > 0;
                poMensaje = (string)vCmd.Parameters["@Mensaje"].Value;

            }

            return vSeGuardo;
        }
    }
}
