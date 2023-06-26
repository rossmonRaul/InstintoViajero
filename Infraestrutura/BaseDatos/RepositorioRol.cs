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
    public class RepositorioRol : IRepositorioRol
    {
        private readonly IContextoBD contextoBD;

        public RepositorioRol(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarRol(EntityRol entityRol)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("Descripcion", entityRol.descripcion);
                data.Add("Usuario", "1");
                data.Add("Estado", entityRol.estado);

                string query = "SPInsertarRol";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarRol(EntityRol entityRol)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdRol", entityRol.idRol);
                data.Add("Descripcion", entityRol.descripcion);
                data.Add("Usuario", "1");
                data.Add("Estado", entityRol.estado);

                string query = "SPActualizarRol";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarRol(int idRol)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdRol", idRol);
                data.Add("Usuario", "1"); //cambiar  para guardar usuario
                string query = "SPEliminarRol";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoRol> ObtenerDetalleRol(int idRol)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdRol", idRol);
                string query = "SPObtenerDetalleRol";

                return await this.contextoBD.ObtenerDato<DtoRol>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoRol>> ObtenerRoles()
        {
            try
            {
                string query = "SPObtenerRoles";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoRol>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
