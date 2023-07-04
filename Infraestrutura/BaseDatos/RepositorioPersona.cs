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
    public class RepositorioPersona : IRepositorioPersona
    {
        private readonly IContextoBD contextoBD;

        public RepositorioPersona(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarPersona(EntityPersona entityPersona)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("Identificacion", entityPersona.identificacion);
                data.Add("IdTipoIdentificacion", entityPersona.idTipoIdentificacion);
                data.Add("Nombre", entityPersona.nombre);
                data.Add("PrimerApellido", entityPersona.primerApellido);
                data.Add("SegundoApellido", entityPersona.segundoApellido);
                data.Add("IdProvincia", entityPersona.IdProvincia);
                data.Add("IdCanton", entityPersona.IdCanton);
                data.Add("IdDistrito", entityPersona.IdDistrito);
                data.Add("Profesion", entityPersona.Profesion);
                data.Add("FechaNacimiento", entityPersona.fechaNacimiento);
                data.Add("Direccion", entityPersona.direccion);
                data.Add("Estado", entityPersona.estado);
                string query = "SPInsertarPersona";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarPersona(EntityPersona entityPersona)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdPersona", entityPersona.idPersona);
                data.Add("Identificacion", entityPersona.identificacion);
                data.Add("IdTipoIdentificacion", entityPersona.idTipoIdentificacion);
                data.Add("Nombre", entityPersona.nombre);
                data.Add("PrimerApellido", entityPersona.primerApellido);
                data.Add("SegundoApellido", entityPersona.segundoApellido);
                data.Add("IdProvincia", entityPersona.IdProvincia);
                data.Add("IdCanton", entityPersona.IdCanton);
                data.Add("IdDistrito", entityPersona.IdDistrito);
                data.Add("Profesion", entityPersona.Profesion);
                data.Add("FechaNacimiento", entityPersona.fechaNacimiento);
                data.Add("Direccion", entityPersona.direccion);
                data.Add("Estado", entityPersona.estado);
                string query = "SPActualizarPersona";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarPersona(int idPersona)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdPersona", idPersona);
                string query = "SPEliminarPersona";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoPersona> ObtenerDetallePersona(int idPersona)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdPersona", idPersona);
                string query = "SPObtenerDetallePersona";

                return await this.contextoBD.ObtenerDato<DtoPersona>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoPersona>> ObtenerPersonas()
        {
            try
            {
                string query = "SPObtenerPersonas";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoPersona>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
