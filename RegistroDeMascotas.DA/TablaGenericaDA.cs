using RegistroDeMascotas.BE;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.DA
{
    public class TablaGenericaDA
    {
        public List<TablaGenericaBE> ObtenerDatosGenericos(int pCodigoTabla, SqlConnection pCn)
        {
            List<TablaGenericaBE> vLista = null;
            using (SqlCommand vCmd = new SqlCommand("usp_obtener_datos_genericos", pCn))
            {
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@CodigoTabla", pCodigoTabla);
                using (SqlDataReader vDr = vCmd.ExecuteReader())
                {
                    if (vDr.HasRows)
                    {
                        vLista = new List<TablaGenericaBE>();
                        while (vDr.Read())
                        {
                            TablaGenericaBE vItem = new TablaGenericaBE();
                            vItem.IdGenerica = (int)vDr["Id_Generica"];
                            vItem.CodigoTabla = (int)vDr["CodigoTabla"];
                            vItem.CodigoFila = (int)vDr["CodigoFila"];
                            vItem.DescripcionCorta = (string)vDr["DescripcionCorta"];
                            vItem.Valor1 = (string)vDr["Valor1"];
                            vItem.Estado = (bool)vDr["Estado"];
                            vLista.Add(vItem);


                        }
                    }
                }
                return vLista;
            }
        }

        public bool RegistrarTablaGenerica(TablaGenericaBE pRegistro, SqlConnection pCn, SqlTransaction pTr)
        {
            bool vSeGuardo = false;

            using (SqlCommand vCmd = new SqlCommand("usp_registrar_tabla_generica", pCn))
            {
                vCmd.Transaction = pTr;
                vCmd.CommandType = System.Data.CommandType.StoredProcedure;
                vCmd.Parameters.AddWithValue("@CodigoTabla", pRegistro.CodigoTabla);
                vCmd.Parameters.AddWithValue("@DescripcionCorta", pRegistro.DescripcionCorta);

                int vFilasAfectadas = vCmd.ExecuteNonQuery();
                vSeGuardo = vFilasAfectadas > 0;
            }

            return vSeGuardo;
        }

    }
}