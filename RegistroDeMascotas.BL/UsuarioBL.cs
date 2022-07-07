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
    public class UsuarioBL : BaseBL
    {
        UsuarioDA usuarioDA = new UsuarioDA();
        CredencialDA credencialDA = new CredencialDA();
        MascotaDA mascotaDA = new MascotaDA();

        public bool RegistrarUsuario(UsuarioBE pRegistro)
        {
            bool vSeGuardo = false;

            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    using (SqlTransaction vTr = vCn.BeginTransaction())
                    {


                        vSeGuardo = usuarioDA.RegistrarUsuario(pRegistro, vCn, vTr, out int vUsuarioId);
                        if (vSeGuardo && pRegistro.Credencial != null)
                        {
                            pRegistro.Credencial.IdUsuario = vUsuarioId;
                            vSeGuardo = credencialDA.RegistrarCredencial(pRegistro.Credencial, vCn, vTr);
                        }
                        if (vSeGuardo && pRegistro.Mascota != null)
                        {
                            pRegistro.Mascota.IdUsuario = vUsuarioId;
                            vSeGuardo = mascotaDA.RegistrarMascota(pRegistro.Mascota, vCn, vTr, out int poMascotaId);

                            if (vSeGuardo && pRegistro.Mascota.Fotos.Count() > 0)
                            {
                                foreach (var item in pRegistro.Mascota.Fotos)
                                {
                                    var entityI = new ImagenesBE()
                                    {
                                        Id_Mascotas = poMascotaId,
                                        NombreArchivo = item.NombreArchivo,
                                        Foto = item.Foto,
                                        ImagenPrincipal = item.ImagenPrincipal
                                    };
                                    vSeGuardo = mascotaDA.RegistrarImagenes(entityI, vCn, vTr);
                                }
                            }
                        }

                        if (vSeGuardo) vTr.Commit();
                        else vTr.Rollback();
                    }
                    vCn.Close();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return vSeGuardo;
        }

        public bool ActualizarCredenciales(CredencialBE pCredencial, out string Mensaje)
        {
            bool vSeGuardo = false;
            Mensaje = string.Empty;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    using (SqlTransaction vTr = vCn.BeginTransaction())
                    {

                        vSeGuardo = credencialDA.Actualizarcredencial(pCredencial, vCn, vTr, out string poMensaje);
                        Mensaje = poMensaje;
                        if (vSeGuardo)
                        {
                            vTr.Commit();
                        }
                        else vTr.Rollback();
                    }
                    vCn.Close();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return vSeGuardo;
        }

        public bool ActualizarUsuario(UsuarioBE pRegistro)
        {
            bool vSeGuardo = false;

            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    using (SqlTransaction vTr = vCn.BeginTransaction())
                    {


                        vSeGuardo = usuarioDA.ActualizarUsuario(pRegistro, vCn, vTr);
                       
                        if (vSeGuardo) vTr.Commit();
                        else vTr.Rollback();
                    }
                    vCn.Close();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return vSeGuardo;
        }
        
        public UsuarioBE ObtenerDatosUsuario(int pIdUsuario)
        {
            UsuarioBE vlista = null;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    vlista = usuarioDA.ObtenerDatosUsuario(pIdUsuario, vCn);
                    vCn.Close();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return vlista;
        }


    }
}
