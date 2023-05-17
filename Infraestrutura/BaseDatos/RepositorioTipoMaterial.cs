using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioTipoMaterial : IRepositorioTipoMaterial
    {
        private readonly IContextoBD contextoBD;

        public RepositorioTipoMaterial(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarTipoMaterial(EntitiTipoMaterial entitiTipoMaterial)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("Nombre", entitiTipoMaterial.nombre);
                data.Add("Descripcion", entitiTipoMaterial.descripcion);
                data.Add("Estado", entitiTipoMaterial.estado);
                data.Add("UnidadMedida", entitiTipoMaterial.unidadMedida);
                data.Add("IdGrupoMaterial", entitiTipoMaterial.idGrupoTipoMaterial);

                string query = "SPInsertarTipoMaterial";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarTipoMaterial(EntitiTipoMaterial entitiTipoMaterial)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdTipoMaterial", entitiTipoMaterial.idTipoMaterial);
                data.Add("Nombre", entitiTipoMaterial.nombre);
                data.Add("Descripcion", entitiTipoMaterial.descripcion);
                data.Add("Estado", entitiTipoMaterial.estado);
                data.Add("UnidadMedida", entitiTipoMaterial.unidadMedida);
                data.Add("IdGrupoMaterial", entitiTipoMaterial.idGrupoTipoMaterial);

                string query = "SPActualizarTipoMaterial";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarTipoMaterial(int idTipoMaterial)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("idTipoMaterial", idTipoMaterial);
                string query = "SPEliminarTipoMaterial";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoTipoMaterial> ObtenerDetalleTipoMaterialID(int idTipoMaterial)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("idTipoMaterial", idTipoMaterial);
                string query = "SPObtenerDetalleTipoMaterialID";

                return await this.contextoBD.ObtenerDato<DtoTipoMaterial>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoTipoMaterial> ObtenerDetalleTipoMaterialNombre(string nombre)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("Nombre", nombre);
                string query = "SPObtenerDetalleTipoMaterialNombre";

                return await this.contextoBD.ObtenerDato<DtoTipoMaterial>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoTipoMaterial>> ObtenerTipoMateriales()
        {
            try
            {
                string query = "SPObtenerTipoMateriales";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoTipoMaterial>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
