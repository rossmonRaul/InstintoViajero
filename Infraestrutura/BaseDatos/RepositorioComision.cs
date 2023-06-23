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
    public class RepositorioComision : IRepositorioComision
    {
        private readonly IContextoBD contextoBD;

        public RepositorioComision(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarComision(EntityComision entityComision)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdRol ", entityComision.idRol);
                data.Add("PorcentajeComision ", entityComision.porcentajeComision);
                data.Add("Descripcion", entityComision.descripcion);
                data.Add("Estado", entityComision.estado);
                data.Add("Usuario", "1");
                string query = "SPInsertarComision";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarComision(EntityComision entityComision)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdComision", entityComision.idComision);
                data.Add("IdRol", entityComision.idRol);
                data.Add("PorcentajeComision", entityComision.porcentajeComision);
                data.Add("Descripcion", entityComision.descripcion);
                data.Add("Estado", entityComision.estado);
                data.Add("Usuario", "1");
                string query = "SPActualizarComision";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarComision(int idComision)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdComision", idComision);
                data.Add("Usuario", "1"); //cambiar logica para guardar usuario
                string query = "SPEliminarComision";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoComisiones> ObtenerDetalleComision(int idComision)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdComision", idComision);
                string query = "SPObtenerDetalleComision";

                return await this.contextoBD.ObtenerDato<DtoComisiones>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoComisiones>> ObtenerComisiones()
        {
            try
            {
                string query = "SPObtenerComisiones";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoComisiones>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
