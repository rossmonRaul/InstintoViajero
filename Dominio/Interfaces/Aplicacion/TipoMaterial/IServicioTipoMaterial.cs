using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.TipoMaterial
{
    public interface IServicioTipoMaterial
    {
        Task<DtoDatosSP> InsertarTipoMaterial(EntitiTipoMaterial entitiTipoMaterial);

        Task<DtoDatosSP> ActualizarTipoMaterial(EntitiTipoMaterial entitiTipoMaterial);

        Task<DtoDatosSP> EliminarTipoMaterial(int idTipoMaterial);

        Task<DtoTipoMaterial> ObtenerDetalleTipoMaterialID(int idTipoMaterial);

        Task<DtoTipoMaterial> ObtenerDetalleTipoMaterialNombre(string nombre);

        Task<List<DtoTipoMaterial>> ObtenerTipoMateriales();
    }
}
