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
    public class TablaGenericaBL : BaseBL
    {
        TablaGenericaDA tablaGenericaDA = new TablaGenericaDA();
        public List<TablaGenericaBE> ObtenerDatosGenericos(int pCodigoTabla)
        {
            List<TablaGenericaBE> vlista = null;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    vlista = tablaGenericaDA.ObtenerDatosGenericos(pCodigoTabla, vCn);
                    vCn.Close();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return vlista;

        }
        
        public bool RegistrarTablaGenerica(TablaGenericaBE tablaGenericaBE)
        {
            bool vSeGuardo = false;
            try
            {
                using (SqlConnection vCn = new SqlConnection(cadenaConexion))
                {
                    vCn.Open();
                    using (SqlTransaction vTr = vCn.BeginTransaction())
                    {
                        if (tablaGenericaBE != null)
                        {
                            vSeGuardo = tablaGenericaDA.RegistrarTablaGenerica(tablaGenericaBE, vCn, vTr);
                             
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


    }
}
