using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.TipoMaterial;
using Dominio.Interfaces.Infraestrutura.BaseDatos;

namespace Aplicacion.TipoMaterial
{
    public class ServicioTipoMaterial : IServicioTipoMaterial
    {
        private readonly IRepositorioTipoMaterial repositorioTipoMaterial;

        public ServicioTipoMaterial(IRepositorioTipoMaterial repositorioTipoMaterial)
        {
            this.repositorioTipoMaterial = repositorioTipoMaterial;
        }

        public async Task<DtoDatosSP> InsertarTipoMaterial(EntitiTipoMaterial entitiTipoMaterial)
        {
            return await this.repositorioTipoMaterial.InsertarTipoMaterial(entitiTipoMaterial);
        }

        public async Task<DtoDatosSP> ActualizarTipoMaterial(EntitiTipoMaterial entitiTipoMaterial)
        {
            return await this.repositorioTipoMaterial.ActualizarTipoMaterial(entitiTipoMaterial);
        }

        public async Task<DtoDatosSP> EliminarTipoMaterial(int idTipoMaterial)
        {
            return await this.repositorioTipoMaterial.EliminarTipoMaterial(idTipoMaterial);
        }

        public async Task<DtoTipoMaterial> ObtenerDetalleTipoMaterialID(int idTipoMaterial)
        {
            return await this.repositorioTipoMaterial.ObtenerDetalleTipoMaterialID(idTipoMaterial);
        }

        public async Task<DtoTipoMaterial> ObtenerDetalleTipoMaterialNombre(string nombre)
        {
            return await this.repositorioTipoMaterial.ObtenerDetalleTipoMaterialNombre(nombre);
        }

        public async Task<List<DtoTipoMaterial>> ObtenerTipoMateriales()
        {
            return await this.repositorioTipoMaterial.ObtenerTipoMateriales();
        }
    }
}
