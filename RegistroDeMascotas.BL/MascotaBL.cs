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
    public class MascotaBL : BaseBL
    {
        MascotaDA mascotaDA = new MascotaDA();

        public bool RegistrarMascota(MascotaBE mascotaBE)
        {
            bool vSeGuardo = false;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    using (SqlTransaction vTr = vCn.BeginTransaction())
                    {
                        if (mascotaBE != null)
                        {
                            vSeGuardo = mascotaDA.RegistrarMascota(mascotaBE, vCn, vTr, out int poMascotaId);

                            if (vSeGuardo && mascotaBE.Fotos.Count() > 0)
                            {
                                foreach (var item in mascotaBE.Fotos)
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

        public bool ActualizarMascota(MascotaBE mascotaBE)
        {
            bool vSeGuardo = false;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    using (SqlTransaction vTr = vCn.BeginTransaction())
                    {
                        if (mascotaBE != null)
                        {
                            vSeGuardo = mascotaDA.ActualizarMascota(mascotaBE, vCn, vTr);

                            if (vSeGuardo && mascotaBE.Fotos.Count() > 0)
                            {
                                mascotaDA.EliminarImagenesMascota(mascotaBE.IdMascotas, vCn, vTr);

                                foreach (var item in mascotaBE.Fotos)
                                {
                                    var entityI = new ImagenesBE()
                                    {
                                        Id_Mascotas = mascotaBE.IdMascotas,
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

        public bool EliminarMascota(MascotaBE mascotaBE)
        {
            bool vSeGuardo = false;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    using (SqlTransaction vTr = vCn.BeginTransaction())
                    {
                        if (mascotaBE != null)
                        {
                            vSeGuardo = mascotaDA.EliminarMascota(mascotaBE, vCn, vTr); 
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
         
        public bool ReportarMascota(ReportarMascotaBE reportarMascotaBE)
        {
            bool vSeGuardo = false;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    using (SqlTransaction vTr = vCn.BeginTransaction())
                    {
                        if (reportarMascotaBE != null)
                        {
                            vSeGuardo = mascotaDA.ReportarMascota(reportarMascotaBE, vCn, vTr, out int pIdReportarMascota);

                            if (vSeGuardo && reportarMascotaBE.Contactos.Count() > 0)
                            {
                                mascotaDA.EliminarContactosMascota(pIdReportarMascota, vCn, vTr);

                                foreach (var item in reportarMascotaBE.Contactos)
                                {
                                    var contactoBE = new ContactoBE()
                                    {
                                        Id_ReportarMascota = pIdReportarMascota,
                                        RedSocial = item.RedSocial,
                                        IdRedSocial = item.IdRedSocial
                                    };
                                    vSeGuardo = mascotaDA.RegistrarContacto(contactoBE, vCn, vTr);
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

        public List<MascotaBE> ListarMascotaRegistrada(int pIdUsuario)
        {
            List<MascotaBE> vlista = null;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    vlista = mascotaDA.ListarMascotaRegistrada(pIdUsuario, vCn);
                    vCn.Close();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return vlista;
        }

        public List<UsuarioBE> ListarMascotasEncontradas(MascotaBE mascotaBE)
        {
            List<UsuarioBE> vlista = null;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    vlista = mascotaDA.ListarMascotasEncontradas(mascotaBE, vCn);
                    vCn.Close();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return vlista;
        }

        public List<UsuarioBE> ListarMascotasPerdidas(MascotaBE mascotaBE)
        {
            List<UsuarioBE> vlista = null;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    vlista = mascotaDA.ListarMascotasPerdidas(mascotaBE, vCn);
                    vCn.Close();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return vlista;
        }


        public UsuarioBE ObtenerDetalleMascota(int pIdMascota)
        {
            UsuarioBE usuario = null;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    usuario = mascotaDA.ObtenerDetalleMascota(pIdMascota, vCn);
                    vCn.Close();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return usuario;
        }

        public List<ContactoBE> ObtenerContatosMascota(int pIdMascota)
        {
            List<ContactoBE> vlista = null;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    vlista = mascotaDA.ObtenerContatosMascota(pIdMascota, vCn);
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
