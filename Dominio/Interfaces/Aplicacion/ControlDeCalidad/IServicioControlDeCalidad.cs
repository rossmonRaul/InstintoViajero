using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.ControlDeCalidad
{
    public interface IServicioControlDeCalidad
    {

        Task<DtoDatosSP> InsertarControlDeCalidad(EntitiControlDeCalidad entitiControlDeCalidad);

        Task<DtoDatosSP> ActualizarControlDeCalidad(EntitiControlDeCalidad entitiControlDeCalidad);

        Task<DtoControlDeCalidad> ObtenerDetalleControlDeCalidadID(int idCalidad);

        Task<List<DtoControlDeCalidad>> ObtenerControlDeCalidadPorProducto(int idProducto);

        Task<List<DtoControlDeCalidad>> ObtenerControlDeCalidad();
    }
}
