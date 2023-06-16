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
    public class RepositorioFormasDePago : IRepositorioFormasDePago
    {
        private readonly IContextoBD contextoBD;

        public RepositorioFormasDePago(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }
        public async Task<DtoDatosSP> ActualizarFormasDePago(EntityFormasDePago entityFormasDePago)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("id", entityFormasDePago.Id);
                data.Add("CodFormaDePago", entityFormasDePago.CodFormaDePago);
                data.Add("Descripcion", entityFormasDePago.Descripcion);                

                string query = "SPActualizarFormasDePago";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarFormasDePago(int idFormasDePago)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("ID", idFormasDePago);
                string query = "SPEliminarFormasDePago";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> InsertarFormasDePago(EntityFormasDePago entityFormasDePago)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                
                data.Add("CodFormaDePago", entityFormasDePago.CodFormaDePago);
                data.Add("Descripcion", entityFormasDePago.Descripcion);
                string query = "SPInsertarFormasDePago";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoFormasDePago> ObtenerDetalleFormasDePagoID(int idFormasDePago)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("id", idFormasDePago);
                string query = "SPObtenerDetalleFormasDePagoID";

                return await this.contextoBD.ObtenerDato<DtoFormasDePago>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoFormasDePago> ObtenerDetalleFormasDePagoNombre(string nombre)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                //data.Add("Nombre", nombre);
                string query = "SPObtenerDetalleFormasDePagoNombre";

                return await this.contextoBD.ObtenerDato<DtoFormasDePago>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoFormasDePago>> ObtenerFormasDePago()
        {
            try
            {
                string query = "SPObtenerFormasDePagos";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoFormasDePago>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
