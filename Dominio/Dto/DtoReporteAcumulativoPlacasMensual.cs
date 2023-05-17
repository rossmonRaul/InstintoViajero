using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    //SE REALIZA UN Dto para cada  reporte pensando en que cada uno púede retornar cosas diferentes en un futuro
    public class DtoReporteAcumulativoPlacasMensual
    {
        public string  dato { get; set; }
        public string  planta { get; set; }
    }
}
