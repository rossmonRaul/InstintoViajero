using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioTotalProduccionDiaria
    {
        Task<DtoDatosSP> InsertarTotalesProduccionDiaria(EntitiTotalesProduccionDiaria entitiTotalesProduccionDiaria);

        Task<DtoDatosSP> ActualizarTotalesProduccionDiaria(EntitiTotalesProduccionDiaria entitiTotalesProduccionDiaria);
        Task<List<DtoTotalesProduccionDiaria>> ObtenerTotalProduccionDiaria(string fecha, int idPlanta, int idProducto);
    }
}
