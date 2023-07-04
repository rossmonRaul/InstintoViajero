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
    public class RepositorioTipoDeTelefono : IRepositorioTipoDeTelefono
    {
        private readonly IContextoBD contextoBD;

        public RepositorioTipoDeTelefono(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarTipoDeTelefono(EntityTipoDeTelefono entityTipoDeTelefono)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("Descripcion", entityTipoDeTelefono.descripcion);
                data.Add("Estado", entityTipoDeTelefono.estado);
                data.Add("Usuario", "1");
                string query = "SPInsertarTipoDeTelefono";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarTipoDeTelefono(EntityTipoDeTelefono entityTipoDeTelefono)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdTipoDeTelefono", entityTipoDeTelefono.idTipoDeTelefono);
                data.Add("Descripcion", entityTipoDeTelefono.descripcion);
                data.Add("Estado", entityTipoDeTelefono.estado);
                data.Add("Usuario", "1");
                string query = "SPActualizarTipoDeTelefono";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarTipoDeTelefono(int idTipoDeTelefono)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdTipoDeTelefono", idTipoDeTelefono);
                data.Add("Usuario", "1"); //cambiar logica para guardar usuario
                string query = "SPEliminarTipoDeTelefono";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoTipoDeTelefono> ObtenerDetalleTipoDeTelefono(int idTipoDeTelefono)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdTipoDeTelefono", idTipoDeTelefono);
                string query = "SPObtenerDetalleTipoDeTelefono";

                return await this.contextoBD.ObtenerDato<DtoTipoDeTelefono>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoTipoDeTelefono>> ObtenerTiposDeTelefono()
        {
            try
            {
                string query = "SPObtenerTiposDeTelefono";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoTipoDeTelefono>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
