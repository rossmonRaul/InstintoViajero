using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Infraestrutura.BaseDatos;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioEstadoPlan : IRepositorioEstadoPlan
    {
        private readonly IContextoBD contextoBD;

        public RepositorioEstadoPlan(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarEstadoPlan(EntityEstadoPlan entityEstadoPlan)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("CodEstadoPlan ", entityEstadoPlan.codEstadoPlan);
                data.Add("DescEstadoPlan ", entityEstadoPlan.descEstadoPlan);             
                data.Add("Estado", entityEstadoPlan.estado);
                data.Add("Usuario", "1");
                string query = "SPInsertarEstadoPlan";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarEstadoPlan(EntityEstadoPlan entityEstadoPlan)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdEstadoPlan", entityEstadoPlan.idEstadoPlan);
                data.Add("CodEstadoPlan", entityEstadoPlan.codEstadoPlan);
                data.Add("DescEstadoPlan", entityEstadoPlan.descEstadoPlan);
                data.Add("Estado", entityEstadoPlan.estado);
                data.Add("Usuario", "1");               
                string query = "SPActualizarEstadoPlan";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarEstadoPlan(int idEstadoPlan)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEstadoPlan", idEstadoPlan);
                data.Add("Usuario", "1"); //cambiar logica para guardar usuario
                string query = "SPEliminarEstadoPlan";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoEstadoPlan> ObtenerDetalleEstadoPlan(int idEstadoPlan)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEstadoPlan", idEstadoPlan);
                string query = "SPObtenerDetalleEstadoPlan";

                return await this.contextoBD.ObtenerDato<DtoEstadoPlan>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoEstadoPlan>> ObtenerEstadosPlan()
        {
            try
            {
                string query = "SPObtenerEstadosPlan";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoEstadoPlan>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
