using RegistroDeMascotas.BE.Reporte;
using RegistroDeMascotas.DA;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.BL
{
    public class ReporteBL : BaseBL
    {
        ReporteDA reporteDA = new ReporteDA();

        public List<ReporteDistritosBE> ObtenerReportePerdidos(int? pAnio)
        {
            List<ReporteDistritosBE> vlista = null;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    vlista = reporteDA.ObtenerReportePerdidos(pAnio, vCn);
                    vCn.Close();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return vlista;
        }
         
        public List<ReporteDistritosBE> ObtenerReporteEncontrados(int? pAnio)
        {
            List<ReporteDistritosBE> vlista = null;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    vlista = reporteDA.ObtenerReporteEncontrados(pAnio, vCn);
                    vCn.Close();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return vlista;
        }

        public List<ReporteDiasBE> ObtenerReporteDias(bool? check)
        {
            List<ReporteDiasBE> vlista = null;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    vlista = reporteDA.ObtenerReporteDias(check, vCn);
                    vCn.Close();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return vlista;
        }

        public List<ReporteMesesBE> ObtenerReporteMesesE(int? pAnio)
        {
            List<ReporteMesesBE> vlista = null;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    vlista = reporteDA.ObtenerReporteMesesE(pAnio, vCn);
                    vCn.Close();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return vlista;
        }

        public List<ReporteMesesBE> ObtenerReporteMesesP(int? pAnio)
        {
            List<ReporteMesesBE> vlista = null;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    vlista = reporteDA.ObtenerReporteMesesP(pAnio, vCn);
                    vCn.Close();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return vlista;
        }

        public List<ReporteTotalesBE> ObtenerReporteTotales()
        {
            List<ReporteTotalesBE> vlista = null;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    vlista = reporteDA.ObtenerReporteTotales( vCn);
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
