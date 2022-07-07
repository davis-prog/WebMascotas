using RegistroDeMascotas.BE;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.DA
{
    public class MascotaDA
    {
        public bool RegistrarMascota(MascotaBE pRegistro, SqlConnection pCn, SqlTransaction pTr, out int poMascotaId)
        {
            bool vSeGuardo = false;
            poMascotaId = 0;

            using (SqlCommand vCmd = new SqlCommand("usp_registrar_mascota", pCn))
            {
                vCmd.Transaction = pTr;
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Id_Usuario", pRegistro.IdUsuario);
                vCmd.Parameters.AddWithValue("@DIP_Autogenerado", pRegistro.DIPAuto);
                vCmd.Parameters.AddWithValue("@Nombre", pRegistro.Nombre);
                vCmd.Parameters.AddWithValue("@IdGenero", pRegistro.IdGenero);
                vCmd.Parameters.AddWithValue("@IdColor", pRegistro.IdColor);
                vCmd.Parameters.AddWithValue("@IdTamanio", pRegistro.IdTamanio);
                vCmd.Parameters.AddWithValue("@IdRaza", pRegistro.IdRaza);
                vCmd.Parameters.AddWithValue("@IdCola", pRegistro.IdCola);
                vCmd.Parameters.AddWithValue("@IdOrejas", pRegistro.IdOrejas);
                vCmd.Parameters.AddWithValue("@Edad", pRegistro.Edad);
                vCmd.Parameters.AddWithValue("@DescripcionAdicional", pRegistro.DescripcionAdicional);
                vCmd.Parameters.Add(new SqlParameter { ParameterName = "@Id_Mascotas", SqlDbType = System.Data.SqlDbType.Int, Direction = System.Data.ParameterDirection.Output });

                int vFilasAfectadas = vCmd.ExecuteNonQuery();
                vSeGuardo = vFilasAfectadas > 0;
                if (vSeGuardo) poMascotaId = (int)vCmd.Parameters["@Id_Mascotas"].Value;

            }

            return vSeGuardo;
        }

        public bool ActualizarMascota(MascotaBE pRegistro, SqlConnection pCn, SqlTransaction pTr)
        {
            bool vSeGuardo = false;

            using (SqlCommand vCmd = new SqlCommand("usp_actualizar_mascota", pCn))
            {
                vCmd.Transaction = pTr;
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Id_Mascotas", pRegistro.IdMascotas);
                vCmd.Parameters.AddWithValue("@Id_Usuario", pRegistro.IdUsuario);
                vCmd.Parameters.AddWithValue("@Nombre", pRegistro.Nombre);
                vCmd.Parameters.AddWithValue("@IdGenero", pRegistro.IdGenero);
                vCmd.Parameters.AddWithValue("@IdColor", pRegistro.IdColor);
                vCmd.Parameters.AddWithValue("@IdTamanio", pRegistro.IdTamanio);
                vCmd.Parameters.AddWithValue("@IdRaza", pRegistro.IdRaza);
                vCmd.Parameters.AddWithValue("@IdCola", pRegistro.IdCola);
                vCmd.Parameters.AddWithValue("@IdOrejas", pRegistro.IdOrejas);
                vCmd.Parameters.AddWithValue("@Edad", pRegistro.Edad);
                vCmd.Parameters.AddWithValue("@DescripcionAdicional", pRegistro.DescripcionAdicional);

                int vFilasAfectadas = vCmd.ExecuteNonQuery();
                vSeGuardo = vFilasAfectadas > 0;
            }

            return vSeGuardo;
        }

        public bool EliminarMascota(MascotaBE pRegistro, SqlConnection pCn, SqlTransaction pTr)
        {
            bool vSeGuardo = false;

            using (SqlCommand vCmd = new SqlCommand("usp_eliminar_mascotas", pCn))
            {
                vCmd.Transaction = pTr;
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Id_Mascotas", pRegistro.IdMascotas);

                int vFilasAfectadas = vCmd.ExecuteNonQuery();
                vSeGuardo = vFilasAfectadas > 0;
            }

            return vSeGuardo;
        }

        public bool RegistrarImagenes(ImagenesBE pImagenes, SqlConnection pCn, SqlTransaction pTr)
        {
            bool vSeGuardo = false;

            using (SqlCommand vCmd = new SqlCommand("usp_registrar_imagenes_mascota", pCn))
            {
                vCmd.Transaction = pTr;
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Id_Mascotas", pImagenes.Id_Mascotas);
                vCmd.Parameters.AddWithValue("@NombreArchivo", pImagenes.NombreArchivo);
                vCmd.Parameters.AddWithValue("@Foto", pImagenes.Foto);
                vCmd.Parameters.AddWithValue("@ImagenPrincipal", pImagenes.ImagenPrincipal);

                int vFilasAfectadas = vCmd.ExecuteNonQuery();
                vSeGuardo = vFilasAfectadas > 0;

            }

            return vSeGuardo;
        }

        public void EliminarImagenesMascota(int IdMascotas, SqlConnection pCn, SqlTransaction pTr)
        {
            using (SqlCommand vCmd = new SqlCommand("usp_eliminar_imagenes_mascotas", pCn))
            {
                vCmd.Transaction = pTr;
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Id_Mascotas", IdMascotas);

                int vFilasAfectadas = vCmd.ExecuteNonQuery();
            }
        }

        public bool ReportarMascota(ReportarMascotaBE pRegistro, SqlConnection pCn, SqlTransaction pTr, out int pIdReportarMascota)
        {
            bool vSeGuardo = false;
            pIdReportarMascota = 0;

            using (SqlCommand vCmd = new SqlCommand("usp_registrar_reportar_mascota", pCn))
            {
                vCmd.Transaction = pTr;
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Id_Mascotas", pRegistro.Id_Mascotas);
                vCmd.Parameters.AddWithValue("@CheckPerdida", pRegistro.CheckPerdida);
                vCmd.Parameters.AddWithValue("@pFechaPerdida", pRegistro.FechaPerdida);
                vCmd.Parameters.AddWithValue("@pFechaEncontrado", pRegistro.FechaEncontrado);
                vCmd.Parameters.AddWithValue("@Direccion", pRegistro.Direccion);
                vCmd.Parameters.AddWithValue("@IdDistrito", pRegistro.IdDistrito);
                vCmd.Parameters.AddWithValue("@DetPerdida", pRegistro.DetPerdida);
                vCmd.Parameters.Add(new SqlParameter { ParameterName = "@Id_ReportarMascota", SqlDbType = System.Data.SqlDbType.Int, Direction = System.Data.ParameterDirection.Output });

                int vFilasAfectadas = vCmd.ExecuteNonQuery();
                vSeGuardo = vFilasAfectadas > 0;
                if (vSeGuardo) pIdReportarMascota = (int)vCmd.Parameters["@Id_ReportarMascota"].Value;

            }

            return vSeGuardo;
        }

        public void EliminarContactosMascota(int pIdReportarMascota, SqlConnection pCn, SqlTransaction pTr)
        {
            using (SqlCommand vCmd = new SqlCommand("usp_eliminar_contactos_mascotas", pCn))
            {
                vCmd.Transaction = pTr;
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@IdReportarMascota", pIdReportarMascota);

                int vFilasAfectadas = vCmd.ExecuteNonQuery();
            }
        }

        public bool RegistrarContacto(ContactoBE contactoBE, SqlConnection pCn, SqlTransaction pTr)
        {
            bool vSeGuardo = false;

            using (SqlCommand vCmd = new SqlCommand("usp_registrar_contacto_mascota", pCn))
            {
                vCmd.Transaction = pTr;
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Id_ReportarMascota", contactoBE.Id_ReportarMascota);
                vCmd.Parameters.AddWithValue("@IdRedSocial", contactoBE.IdRedSocial);
                vCmd.Parameters.AddWithValue("@RedSocial", contactoBE.RedSocial);

                int vFilasAfectadas = vCmd.ExecuteNonQuery();
                vSeGuardo = vFilasAfectadas > 0;

            }

            return vSeGuardo;
        }

        public List<MascotaBE> ListarMascotaRegistrada(int pIdUsuario, SqlConnection pCn)
        {
            List<MascotaBE> vLista = null;
            using (SqlCommand vCmd = new SqlCommand("usp_listar_mascotas_registradas", pCn))
            {
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Id_Usuario", pIdUsuario);
                using (SqlDataReader vDr = vCmd.ExecuteReader())
                {
                    if (vDr.HasRows)
                    {
                        vLista = new List<MascotaBE>();
                        while (vDr.Read())
                        {
                            MascotaBE vItem = new MascotaBE();
                            vItem.IdMascotas = (int)vDr["Id_Mascotas"];
                            vItem.IdUsuario = (int)vDr["Id_Usuario"];
                            vItem.DIPAuto = (string)vDr["DIP_Autogenerado"];
                            vItem.Nombre = (string)vDr["Nombre"];
                            vItem.IdGenero = (int)vDr["IdGenero"];
                            vItem.DesGenero = (string)vDr["DesGenero"];
                            vItem.IdColor = (int)vDr["IdColor"];
                            vItem.DesColor = (string)vDr["DesColor"];
                            vItem.IdTamanio = (int)vDr["IdTamanio"];
                            vItem.DesTamanio = (string)vDr["DesTamanio"];
                            vItem.IdRaza = (int)vDr["IdRaza"];
                            vItem.DesRaza = (string)vDr["DesRaza"];
                            vItem.IdCola = (int)vDr["IdCola"];
                            vItem.DesCola = (string)vDr["DesCola"];
                            vItem.IdOrejas = (int)vDr["IdOrejas"];
                            vItem.DesOrejas = (string)vDr["DesOrejas"];
                            vItem.Edad = (string)vDr["Edad"];
                            vItem.DescripcionAdicional = (string)vDr["DescripcionAdicional"];
                            var imagen = new ImagenesBE()
                            {
                                Id_Imagenes = (int)vDr["Id_Imagenes"],
                                NombreArchivo = (string)vDr["NombreArchivo"],
                                Foto = (string)vDr["Foto"],
                            };
                            vItem.Fotos = new List<ImagenesBE>();
                            vItem.Fotos.Add(imagen);
                            vLista.Add(vItem);
                        }
                    }
                }
                return vLista;
            }
        }

        public List<UsuarioBE> ListarMascotasEncontradas(MascotaBE pFiltro, SqlConnection pCn)
        {
            List<UsuarioBE> vLista = null;
            using (SqlCommand vCmd = new SqlCommand("usp_listar_mascotas_encontrada", pCn))
            {
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@IdGenero", pFiltro.IdGenero);
                vCmd.Parameters.AddWithValue("@IdColor", pFiltro.IdColor);
                vCmd.Parameters.AddWithValue("@IdTamanio", pFiltro.IdTamanio);
                vCmd.Parameters.AddWithValue("@IdRaza", pFiltro.IdRaza);
                vCmd.Parameters.AddWithValue("@IdCola", pFiltro.IdCola);
                vCmd.Parameters.AddWithValue("@IdOrejas", pFiltro.IdOrejas);
                vCmd.Parameters.AddWithValue("@DescripcionAdicional", pFiltro.DescripcionAdicional);
                vCmd.Parameters.AddWithValue("@NombreMascota", pFiltro.Nombre);
                vCmd.Parameters.AddWithValue("@DipAuto", pFiltro.DIPAuto);

                using (SqlDataReader vDr = vCmd.ExecuteReader())
                {
                    if (vDr.HasRows)
                    {
                        vLista = new List<UsuarioBE>();
                        while (vDr.Read())
                        {
                            UsuarioBE vItem = new UsuarioBE();
                            vItem.IdUsuario = (int)vDr["Id_Usuario"];

                            vItem.Mascota = new MascotaBE();
                            vItem.Mascota.IdMascotas = (int)vDr["Id_Mascotas"];
                            vItem.Mascota.DIPAuto = (string)vDr["DIP_Autogenerado"];
                            vItem.Mascota.Nombre = (string)vDr["Nombre"];
                            vItem.Mascota.IdGenero = (int)vDr["IdGenero"];
                            vItem.Mascota.DesGenero = (string)vDr["DesGenero"];
                            vItem.Mascota.IdColor = (int)vDr["IdColor"];
                            vItem.Mascota.DesColor = (string)vDr["DesColor"];
                            vItem.Mascota.IdTamanio = (int)vDr["IdTamanio"];
                            vItem.Mascota.DesTamanio = (string)vDr["DesTamanio"];
                            vItem.Mascota.IdRaza = (int)vDr["IdRaza"];
                            vItem.Mascota.DesRaza = (string)vDr["DesRaza"];
                            vItem.Mascota.IdCola = (int)vDr["IdCola"];
                            vItem.Mascota.DesCola = (string)vDr["DesCola"];
                            vItem.Mascota.IdOrejas = (int)vDr["IdOrejas"];
                            vItem.Mascota.DesOrejas = (string)vDr["DesOrejas"];
                            vItem.Mascota.Edad = (string)vDr["Edad"];
                            vItem.Mascota.DescripcionAdicional = (string)vDr["DescripcionAdicional"];
                            var imagen = new ImagenesBE()
                            {
                                Id_Imagenes = (int)vDr["Id_Imagenes"],
                                NombreArchivo = (string)vDr["NombreArchivo"],
                                Foto = (string)vDr["Foto"],
                            };
                            vItem.Mascota.Fotos = new List<ImagenesBE>();
                            vItem.Mascota.Fotos.Add(imagen);

                            vItem.Mascota.ReportarMascota = new ReportarMascotaBE();
                            vItem.Mascota.ReportarMascota.Id_ReportarMascota = (int)vDr["Id_ReportarMascota"];
                            vItem.Mascota.ReportarMascota.FechaPerdida = (string)vDr["FechaPerdida"];
                            vItem.Mascota.ReportarMascota.FechaEncontrado = (string)vDr["FechaEncontrado"];
                            vItem.Mascota.ReportarMascota.IdDistrito = (int)vDr["IdDistrito"];
                            vItem.Mascota.ReportarMascota.DesDistrito = (string)vDr["DesDistrito"];
                            vItem.Mascota.ReportarMascota.Direccion = (string)vDr["Direccion"];
                            vItem.Mascota.ReportarMascota.CheckPerdida = (bool)vDr["CheckPerdida"];
                            vItem.Mascota.ReportarMascota.DetPerdida = (string)vDr["DetPerdida"];

                            vLista.Add(vItem);
                        }
                    }
                }
                return vLista;
            }
        }

        public List<UsuarioBE> ListarMascotasPerdidas(MascotaBE pFiltro, SqlConnection pCn)
        {
            List<UsuarioBE> vLista = null;
            using (SqlCommand vCmd = new SqlCommand("usp_listar_mascotas_perdidas", pCn))
            {
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@IdGenero", pFiltro.IdGenero);
                vCmd.Parameters.AddWithValue("@IdColor", pFiltro.IdColor);
                vCmd.Parameters.AddWithValue("@IdTamanio", pFiltro.IdTamanio);
                vCmd.Parameters.AddWithValue("@IdRaza", pFiltro.IdRaza);
                vCmd.Parameters.AddWithValue("@IdCola", pFiltro.IdCola);
                vCmd.Parameters.AddWithValue("@IdOrejas", pFiltro.IdOrejas);
                vCmd.Parameters.AddWithValue("@DescripcionAdicional", pFiltro.DescripcionAdicional);
                vCmd.Parameters.AddWithValue("@NombreMascota", pFiltro.Nombre);
                vCmd.Parameters.AddWithValue("@DipAuto", pFiltro.DIPAuto);

                using (SqlDataReader vDr = vCmd.ExecuteReader())
                {
                    if (vDr.HasRows)
                    {
                        vLista = new List<UsuarioBE>();
                        while (vDr.Read())
                        {
                            UsuarioBE vItem = new UsuarioBE();
                            vItem.IdUsuario = (int)vDr["Id_Usuario"];

                            vItem.Mascota = new MascotaBE();
                            vItem.Mascota.IdMascotas = (int)vDr["Id_Mascotas"];
                            vItem.Mascota.DIPAuto = (string)vDr["DIP_Autogenerado"];
                            vItem.Mascota.Nombre = (string)vDr["Nombre"];
                            vItem.Mascota.IdGenero = (int)vDr["IdGenero"];
                            vItem.Mascota.DesGenero = (string)vDr["DesGenero"];
                            vItem.Mascota.IdColor = (int)vDr["IdColor"];
                            vItem.Mascota.DesColor = (string)vDr["DesColor"];
                            vItem.Mascota.IdTamanio = (int)vDr["IdTamanio"];
                            vItem.Mascota.DesTamanio = (string)vDr["DesTamanio"];
                            vItem.Mascota.IdRaza = (int)vDr["IdRaza"];
                            vItem.Mascota.DesRaza = (string)vDr["DesRaza"];
                            vItem.Mascota.IdCola = (int)vDr["IdCola"];
                            vItem.Mascota.DesCola = (string)vDr["DesCola"];
                            vItem.Mascota.IdOrejas = (int)vDr["IdOrejas"];
                            vItem.Mascota.DesOrejas = (string)vDr["DesOrejas"];
                            vItem.Mascota.Edad = (string)vDr["Edad"];
                            vItem.Mascota.DescripcionAdicional = (string)vDr["DescripcionAdicional"];
                            var imagen = new ImagenesBE()
                            {
                                Id_Imagenes = (int)vDr["Id_Imagenes"],
                                NombreArchivo = (string)vDr["NombreArchivo"],
                                Foto = (string)vDr["Foto"],
                            };
                            vItem.Mascota.Fotos = new List<ImagenesBE>();
                            vItem.Mascota.Fotos.Add(imagen);

                            vItem.Mascota.ReportarMascota = new ReportarMascotaBE();
                            vItem.Mascota.ReportarMascota.Id_ReportarMascota = (int)vDr["Id_ReportarMascota"];
                            vItem.Mascota.ReportarMascota.FechaPerdida = (string)vDr["FechaPerdida"];
                            vItem.Mascota.ReportarMascota.FechaEncontrado = (string)vDr["FechaEncontrado"];
                            vItem.Mascota.ReportarMascota.IdDistrito = (int)vDr["IdDistrito"];
                            vItem.Mascota.ReportarMascota.DesDistrito = (string)vDr["DesDistrito"]; 
                            vItem.Mascota.ReportarMascota.Direccion = (string)vDr["Direccion"];
                            vItem.Mascota.ReportarMascota.CheckPerdida = (bool)vDr["CheckPerdida"];
                            vItem.Mascota.ReportarMascota.DetPerdida = (string)vDr["DetPerdida"];

                            vLista.Add(vItem);
                        }
                    }
                }
                return vLista;
            }
        }


        public UsuarioBE ObtenerDetalleMascota(int pIdMascota, SqlConnection pCn)
        {
            List<UsuarioBE> vEntidad = null;
            using (SqlCommand vCmd = new SqlCommand("usp_obtener_datos_mascotas_detalle", pCn))
            {
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Id_Mascotas", pIdMascota);
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
                            vItem.Nombres = (string)vDr["NombreContacto"];
                            vItem.Celular = (int)vDr["Celular"];
                            vItem.Correo = (string)vDr["Correo"];
                            // datos de la mascota
                            vItem.Mascota = new MascotaBE();
                            vItem.Mascota.IdMascotas = (int)vDr["Id_Mascotas"];
                            vItem.Mascota.IdUsuario = (int)vDr["Id_Usuario"];
                            vItem.Mascota.DIPAuto = (string)vDr["DIP_Autogenerado"];
                            vItem.Mascota.Nombre = (string)vDr["Nombre"];
                            vItem.Mascota.IdGenero = (int)vDr["IdGenero"];
                            vItem.Mascota.DesGenero = (string)vDr["DesGenero"];
                            vItem.Mascota.IdColor = (int)vDr["IdColor"];
                            vItem.Mascota.DesColor = (string)vDr["DesColor"];
                            vItem.Mascota.IdTamanio = (int)vDr["IdTamanio"];
                            vItem.Mascota.DesTamanio = (string)vDr["DesTamanio"];
                            vItem.Mascota.IdRaza = (int)vDr["IdRaza"];
                            vItem.Mascota.DesRaza = (string)vDr["DesRaza"];
                            vItem.Mascota.IdCola = (int)vDr["IdCola"];
                            vItem.Mascota.DesCola = (string)vDr["DesCola"];
                            vItem.Mascota.IdOrejas = (int)vDr["IdOrejas"];
                            vItem.Mascota.DesOrejas = (string)vDr["DesOrejas"];
                            vItem.Mascota.Edad = (string)vDr["Edad"];
                            vItem.Mascota.DescripcionAdicional = (string)vDr["DescripcionAdicional"];
                            var imagen = new ImagenesBE()
                            {
                                NombreArchivo = (string)vDr["NombreArchivo"],
                                Foto = (string)vDr["Foto"],
                                ImagenPrincipal = (int)vDr["ImagenPrincipal"]
                            };
                            vItem.Mascota.Fotos = new List<ImagenesBE>();
                            vItem.Mascota.Fotos.Add(imagen);

                            vItem.Mascota.ReportarMascota = new ReportarMascotaBE();
                            vItem.Mascota.ReportarMascota.Id_ReportarMascota = (int)vDr["Id_ReportarMascota"];
                            vItem.Mascota.ReportarMascota.FechaPerdida = (string)vDr["FechaPerdida"];
                            vItem.Mascota.ReportarMascota.FechaEncontrado = (string)vDr["FechaEncontrado"];
                            vItem.Mascota.ReportarMascota.IdDistrito = (int)vDr["IdDistrito"];
                            vItem.Mascota.ReportarMascota.Direccion = (string)vDr["Direccion"];
                            vItem.Mascota.ReportarMascota.CheckPerdida = (bool)vDr["CheckPerdida"];
                            vItem.Mascota.ReportarMascota.DetPerdida = (string)vDr["DetPerdida"];


                            vEntidad.Add(vItem);
                        }
                    }
                }
                return vEntidad.FirstOrDefault();
            }
        }

        public List<ContactoBE> ObtenerContatosMascota(int pIdMascota, SqlConnection pCn)
        {
            List<ContactoBE> vLista = null;
            using (SqlCommand vCmd = new SqlCommand("usp_obtener_datos_mascotas_detalle_redsocial", pCn))
            {
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Id_Mascotas", pIdMascota);
                using (SqlDataReader vDr = vCmd.ExecuteReader())
                {
                    if (vDr.HasRows)
                    {
                        vLista = new List<ContactoBE>();
                        while (vDr.Read())
                        {
                            ContactoBE vItem = new ContactoBE();
                            vItem.Id_Contacto = (int)vDr["Id_Contacto"];
                            vItem.IdRedSocial = (int)vDr["IdRedSocial"];
                            vItem.DesRedSocial = (string)vDr["DesRedSocial"];
                            vItem.RedSocial = (string)vDr["RedSocial"];

                            vLista.Add(vItem);
                        }
                    }
                }
                return vLista;
            }
        }



    }
}
