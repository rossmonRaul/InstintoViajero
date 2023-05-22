using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioUsuario : IRepositorioUsuario
    {
        private readonly IContextoBD contextoBD;

        public RepositorioUsuario(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarUsuario(EntitiUsuario entitiUsuario)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdRol", entitiUsuario.idRol);
                data.Add("CoreoElectronico", entitiUsuario.coreoElectronico);
                data.Add("ContrasenaTemporal", entitiUsuario.contrasenaTemporal);
                data.Add("IdSucursal", entitiUsuario.idSucursal);
                data.Add("Identificacion", entitiUsuario.identificacion);
                data.Add("IdTipoIdentificacion", entitiUsuario.idTipoIdentificacion);
                data.Add("Nombre", entitiUsuario.nombre);
                data.Add("PrimerApellido", entitiUsuario.primerApellido);
                data.Add("SegundoApellido", entitiUsuario.segundoApellido);
                data.Add("FechaNacimiento", entitiUsuario.fechaNacimiento);
                data.Add("Direccion", entitiUsuario.direccion);
                data.Add("Telefono", entitiUsuario.telefono);
                string query = "SPInsertarUsuario";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarUsuario(EntitiUsuario entitiUsuario)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdUsuario", entitiUsuario.idUsuario);
                data.Add("IdPersona", entitiUsuario.idPersona);
                data.Add("IdRol", entitiUsuario.idRol);
                data.Add("CoreoElectronico", entitiUsuario.coreoElectronico);
                data.Add("IdSucursal", entitiUsuario.idSucursal);
                data.Add("Identificacion", entitiUsuario.identificacion);
                data.Add("IdTipoIdentificacion", entitiUsuario.idTipoIdentificacion);
                data.Add("Nombre", entitiUsuario.nombre);
                data.Add("PrimerApellido", entitiUsuario.primerApellido);
                data.Add("SegundoApellido", entitiUsuario.segundoApellido);
                data.Add("FechaNacimiento", entitiUsuario.fechaNacimiento);
                data.Add("Direccion", entitiUsuario.direccion);
                data.Add("Telefono", entitiUsuario.telefono);

                string query = "SPActualizarUsuario";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarUsuario(int idUsuario)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("idUsuario", idUsuario);
                string query = "SPEliminarUsuario";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoUsuario> ObtenerDetalleUsuarioID(int idUsuario)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdUsuario", idUsuario);
                string query = "SPObtenerDetalleUsuarioID";

                return await this.contextoBD.ObtenerDato<DtoUsuario>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoUsuario> ObtenerDetalleUsuarioNombre(string nombre)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("Nombre", nombre);
                string query = "SPObtenerDetalleUsuarioNombre";

                return await this.contextoBD.ObtenerDato<DtoUsuario>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoUsuario>> ObtenerUsuarios()
        {
            try
            {
                string query = "SPObtenerUsuarios";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoUsuario>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarContrasenhaTemporal(EntitiUsuario entitiUsuario)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdUsuario", entitiUsuario.idUsuario);
                data.Add("ContrasenaTemporal", entitiUsuario.contrasenaTemporal);

                string query = "SPActualizarContrasenaTemporal";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarContrasenha(int idUsuario, string contrasena)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdUsuario", idUsuario);
                data.Add("ContrasenaTemporal", contrasena);

                string query = "SPActualizarContrasena";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
