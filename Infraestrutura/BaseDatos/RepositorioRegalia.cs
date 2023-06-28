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
    public class RepositorioRegalia : IRepositorioRegalia
    {
        private readonly IContextoBD contextoBD;

        public RepositorioRegalia(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarRegalia(EntityRegalia entityRegalia)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("Descripcion ", entityRegalia.descripcion);
                data.Add("Estado", entityRegalia.estado);
                data.Add("Usuario", "1");
                string query = "SPInsertarRegalia";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarRegalia(EntityRegalia entityRegalia)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdRegalia", entityRegalia.idRegalia);
                data.Add("Descripcion", entityRegalia.descripcion);
                data.Add("Estado", entityRegalia.estado);
                data.Add("Usuario", "1");
                string query = "SPActualizarRegalia";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarRegalia(int idRegalia)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdRegalia", idRegalia);
                data.Add("Usuario", "1"); //cambiar logica para guardar usuario
                string query = "SPEliminarRegalia";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoRegalia> ObtenerDetalleRegalia(int idRegalia)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdRegalia", idRegalia);
                string query = "SPObtenerDetalleRegalia";

                return await this.contextoBD.ObtenerDato<DtoRegalia>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoRegalia>> ObtenerRegalias()
        {
            try
            {
                string query = "SPObtenerRegalias";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoRegalia>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
