using RegistroDeMascotas.BE.Reporte;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.DA
{
    public class ReporteDA
    {

        public List<ReporteDistritosBE> ObtenerReportePerdidos(int? pAnio, SqlConnection pCn)
        {
            List<ReporteDistritosBE> vLista = null;
            using (SqlCommand vCmd = new SqlCommand("usp_obtener_reporte_perdidas", pCn))
            {
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Anio", pAnio);

                using (SqlDataReader vDr = vCmd.ExecuteReader())
                {
                    if (vDr.HasRows)
                    {
                        vLista = new List<ReporteDistritosBE>();
                        while (vDr.Read())
                        {
                            ReporteDistritosBE vItem = new ReporteDistritosBE();
                            vItem.Distrito = (string)vDr["DesDistrito"];
                            vItem.Estado = (string)vDr["Estado"];
                            vItem.TotalMascotas = (int)vDr["TotalMascotas"];
                            vItem.Anio = (int)vDr["Anio"];
                            vItem.Color = (string)vDr["Color"];

                            vLista.Add(vItem);
                        }
                    }
                }
                return vLista;
            }
        }

        public List<ReporteDistritosBE> ObtenerReporteEncontrados(int? pAnio, SqlConnection pCn)
        {
            List<ReporteDistritosBE> vLista = null;
            using (SqlCommand vCmd = new SqlCommand("usp_obtener_reporte_encontradas", pCn))
            {
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Anio", pAnio);
                using (SqlDataReader vDr = vCmd.ExecuteReader())
                {
                    if (vDr.HasRows)
                    {
                        vLista = new List<ReporteDistritosBE>();
                        while (vDr.Read())
                        {
                            ReporteDistritosBE vItem = new ReporteDistritosBE();
                            vItem.Distrito = (string)vDr["DesDistrito"];
                            vItem.Estado = (string)vDr["Estado"];
                            vItem.TotalMascotas = (int)vDr["TotalMascotas"];
                            vItem.Anio = (int)vDr["Anio"];
                            vItem.Color = (string)vDr["Color"];

                            vLista.Add(vItem);
                        }
                    }
                }
                return vLista;
            }
        }

        public List<ReporteDiasBE> ObtenerReporteDias(bool? check, SqlConnection pCn)
        {
            List<ReporteDiasBE> vLista = null;
            using (SqlCommand vCmd = new SqlCommand("usp_obtener_reporte_dias", pCn))
            {
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@check", check);

                using (SqlDataReader vDr = vCmd.ExecuteReader())
                {
                    if (vDr.HasRows)
                    {
                        vLista = new List<ReporteDiasBE>();
                        while (vDr.Read())
                        {
                            ReporteDiasBE vItem = new ReporteDiasBE();
                            vItem.Id_Mascotas = (int)vDr["Id_Mascotas"];
                            vItem.Nombre = (string)vDr["Nombre"];
                            vItem.FechaPerdida = (string)vDr["FechaPerdida"];
                            vItem.FechaEncontrado = (string)vDr["FechaEncontrado"];
                            vItem.DifDias = (int)vDr["DifDias"];
                            vItem.DesDistrito = (string)vDr["DesDistrito"];
                            vItem.Estado = (string)vDr["Estado"];
                            vLista.Add(vItem);
                        }
                    }
                }
                return vLista;
            }
        }

        public List<ReporteMesesBE> ObtenerReporteMesesE(int? pAnio, SqlConnection pCn)
        {
            List<ReporteMesesBE> vLista = null;
            using (SqlCommand vCmd = new SqlCommand("usp_obtener_reporte_meses_E", pCn))
            {
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Anio", pAnio);
                using (SqlDataReader vDr = vCmd.ExecuteReader())
                {
                    if (vDr.HasRows)
                    {
                        vLista = new List<ReporteMesesBE>();
                        while (vDr.Read())
                        {
                            ReporteMesesBE vItem = new ReporteMesesBE();
                            vItem.Estado = (string)vDr["Estado"];
                            vItem.TotalMascotas = (int)vDr["TotalMascotas"];
                            vItem.Anio = (int)vDr["Anio"];
                            vItem.Mes = (string)vDr["Periodo"];
                            vLista.Add(vItem);
                        }
                    }
                }
                return vLista;
            }
        }

        public List<ReporteMesesBE> ObtenerReporteMesesP(int? pAnio, SqlConnection pCn)
        {
            List<ReporteMesesBE> vLista = null;
            using (SqlCommand vCmd = new SqlCommand("usp_obtener_reporte_meses_P", pCn))
            {
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@Anio", pAnio);
                using (SqlDataReader vDr = vCmd.ExecuteReader())
                {
                    if (vDr.HasRows)
                    {
                        vLista = new List<ReporteMesesBE>();
                        while (vDr.Read())
                        {
                            ReporteMesesBE vItem = new ReporteMesesBE();
                            vItem.Estado = (string)vDr["Estado"];
                            vItem.TotalMascotas = (int)vDr["TotalMascotas"];
                            vItem.Anio = (int)vDr["Anio"];
                            vItem.Mes = (string)vDr["Periodo"];
                            vLista.Add(vItem);
                        }
                    }
                }
                return vLista;
            }
        }

        public List<ReporteTotalesBE> ObtenerReporteTotales(SqlConnection pCn)
        {
            List<ReporteTotalesBE> vLista = null;
            using (SqlCommand vCmd = new SqlCommand("usp_obtener_reporte_totales", pCn))
            {
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                using (SqlDataReader vDr = vCmd.ExecuteReader())
                {
                    if (vDr.HasRows)
                    {
                        vLista = new List<ReporteTotalesBE>();
                        while (vDr.Read())
                        {
                            ReporteTotalesBE vItem = new ReporteTotalesBE();
                            vItem.Columna = (string)vDr["Columna"];
                            vItem.Total = (int)vDr["Total"];
                            vLista.Add(vItem);
                        }
                    }
                }
                return vLista;
            }
        }

    }
}
