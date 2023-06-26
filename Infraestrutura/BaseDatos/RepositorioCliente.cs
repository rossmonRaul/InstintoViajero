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
    public class RepositorioCliente : IRepositorioCliente
    {
        private readonly IContextoBD contextoBD;

        public RepositorioCliente(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarCliente(EntityCliente entityCliente)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdPersona", entityCliente.idPersona);
                data.Add("Usuario", "1");
                data.Add("Estado", entityCliente.estado);

                string query = "SPInsertarCliente";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarCliente(EntityCliente entityCliente)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdCliente", entityCliente.idCliente);
                data.Add("IdPersona", entityCliente.idPersona);
                data.Add("Usuario", "1");
                data.Add("Estado", entityCliente.estado);

                string query = "SPActualizarCliente";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarCliente(int idCliente)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdCliente", idCliente);
                data.Add("Usuario", "1"); //cambiar logica para guardar usuario
                string query = "SPEliminarCliente";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoCliente> ObtenerDetalleCliente(int idCliente)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdCliente", idCliente);
                string query = "SPObtenerDetalleCliente";

                return await this.contextoBD.ObtenerDato<DtoCliente>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoCliente>> ObtenerClientes()
        {
            try
            {
                string query = "SPObtenerClientes";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoCliente>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }

}

