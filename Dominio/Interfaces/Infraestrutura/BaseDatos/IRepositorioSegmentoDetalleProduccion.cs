using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioSegmentoDetalleProduccion
    {
        Task<DtoDatosSP> InsertarSegmentoDetalleProduccionDiaria(EntitiSegmentoDetalleProduccion entitiSegmentoDetalle);

        Task<DtoDatosSP> ActualizarSegmentoDetalleProduccionDiaria(EntitiSegmentoDetalleProduccion entitiSegmentoDetalle);


        Task<List<DtoSegmentoDetalleProduccion>> ObtenerSegementoDetalleProduccionDiaria(int idEncabezadoProduccion);
    }
}
