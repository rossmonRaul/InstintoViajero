using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.DetalleProduccionDiaria
{
    public interface IServicioDetalleProduccionDiaria
    {
        Task<DtoDatosSP> InsertarDetalleProduccionDiaria(List<EntitiDetalleProduccionDiaria> entitiDetalleProduccionDiaria);

        Task<DtoDatosSP> ActualizarDetalleProduccionDiaria(List<EntitiDetalleProduccionDiaria> entitiDetalleProduccionDiaria);

        Task<List<DtoDetalleProduccionDiaria>> ObtenerDetalleProduccionDiaria(int idEncabezadoProduccionDiaria);
    }
}
