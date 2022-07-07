using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.BE
{
    public class TablaGenericaBE
    {
        public int IdGenerica { get; set; }
        public int CodigoTabla { get; set; }
        public int CodigoFila { get; set; }
        public string DescripcionCorta { get; set; }
        public string Valor1 { get; set; }
        public bool Estado { get; set; }



    }
}
