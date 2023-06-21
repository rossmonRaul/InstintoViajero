using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioDirecciones : IRepositorioDirecciones
    {
        private readonly IContextoBD contextoBD;

        public RepositorioDirecciones(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<List<DtoProvincia>> ObtenerProvincias()
        {
            try
            {
                string query = "SPObtenerProvincias";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoProvincia>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
        public async Task<List<DtoCanton>> ObtenerCantones(int idProvincia)
        {
            try
            {
                string query = "SPObtenerCantones";
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("id_provincia", idProvincia);

                var result = await this.contextoBD.ObtenerListaDeDatos<DtoCanton>(query, data);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
        public async Task<List<DtoDistrito>> ObtenerDistritos(int idCanton)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("id_canton", idCanton);
                string query = "SPObtenerDistritos";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoDistrito>(query, data);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
