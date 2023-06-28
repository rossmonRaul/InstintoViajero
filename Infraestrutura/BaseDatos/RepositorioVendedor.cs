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
    public class RepositorioVendedor : IRepositorioVendedor
    {
        private readonly IContextoBD contextoBD;

        public RepositorioVendedor(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarVendedor(EntityVendedor entityVendedor)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdPersona", entityVendedor.idPersona);
                data.Add("IdSucursal", entityVendedor.idSucursal);
                data.Add("CodVendedor", entityVendedor.codVendedor);
                data.Add("FechaContratacion", entityVendedor.fechaContratacion);
                data.Add("Estado", entityVendedor.estado);
                string query = "SPInsertarVendedor";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarVendedor(EntityVendedor entityVendedor)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdVendedor", entityVendedor.idVendedor);
                data.Add("IdPersona", entityVendedor.idPersona);
                data.Add("IdSucursal", entityVendedor.idSucursal);
                data.Add("CodVendedor", entityVendedor.codVendedor);
                data.Add("FechaContratacion", entityVendedor.fechaContratacion);
                data.Add("Estado", entityVendedor.estado);
                string query = "SPActualizarVendedor";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarVendedor(int idVendedor)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdVendedor", idVendedor);
                string query = "SPEliminarVendedor";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoVendedor> ObtenerDetalleVendedor(int idVendedor)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdVendedor", idVendedor);
                string query = "SPObtenerDetalleVendedor";

                return await this.contextoBD.ObtenerDato<DtoVendedor>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoVendedor>> ObtenerVendedores()
        {
            try
            {
                string query = "SPObtenerVendedores";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoVendedor>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }

}

