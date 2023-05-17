using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Infraestrutura.BaseDatos;


namespace Infraestrutura.BaseDatos
{
    public class RepositorioActividadPlanta : IRepositorioActividadPlanta
    {
        private readonly IContextoBD contextoBD;

        public RepositorioActividadPlanta(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarActividadPlanta(EntitiActividadPlanta entitiActividadPlanta)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("OBSERVACION", entitiActividadPlanta.observacion);
                data.Add("Estado", entitiActividadPlanta.estado);
                data.Add("IdPlanta", entitiActividadPlanta.idPlanta);
                string query = "SPInsertarActividadPlanta";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarActividadPlanta(EntitiActividadPlanta entitiActividadPlanta)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdActividadPlanta", entitiActividadPlanta.idActividadPlanta);
                data.Add("OBSERVACION", entitiActividadPlanta.observacion);
                data.Add("Estado", entitiActividadPlanta.estado);
                data.Add("IdPlanta", entitiActividadPlanta.idPlanta);
                string query = "SPActualizarActividadPlanta";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarActividadPlanta(int idActividadPlanta)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdActividadPlanta", idActividadPlanta);
                string query = "SPEliminarActividadPlanta";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoActividadPlanta> ObtenerDetalleActividadPlantaID(int idActividadPlanta)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdActividadPlanta", idActividadPlanta);
                string query = "SPObtenerDetalleActividadPlantaID";

                return await this.contextoBD.ObtenerDato<DtoActividadPlanta>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoActividadPlanta>> ObtenerActividadesPlantas()
        {
            try
            {
                string query = "SPObtenerActividadPlantas";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoActividadPlanta>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
