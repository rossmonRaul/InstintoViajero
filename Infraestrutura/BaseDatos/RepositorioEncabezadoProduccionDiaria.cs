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
    public class RepositorioEncabezadoProduccionDiaria : IRepositorioEncabezadoProduccionDiaria
    {
        private readonly IContextoBD contextoBD;

        public RepositorioEncabezadoProduccionDiaria(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarEncabezadoProduccionDiaria(EntitiEncabezadoProduccionDiaria entitiEncabezadoProduccion)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEncabezadoProduccionDiaria", entitiEncabezadoProduccion.IdEncabezadoProduccionDiaria);
                data.Add("HoraInicio", entitiEncabezadoProduccion.HoraInicio);
                data.Add("HoraFinal", entitiEncabezadoProduccion.HoraFinal);
                data.Add("IdPLanta", entitiEncabezadoProduccion.IdPlanta);
                data.Add("IdProducto", entitiEncabezadoProduccion.IdProducto);
                data.Add("Fecha", entitiEncabezadoProduccion.Fecha);
                data.Add("Estatus", entitiEncabezadoProduccion.estatus);
                string query = "SPInsertarEncabezadoProduccionDiaria";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarEncabezadoProduccionDiaria(EntitiEncabezadoProduccionDiaria entitiEncabezadoProduccion)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEncabezadoProduccionDiaria", entitiEncabezadoProduccion.IdEncabezadoProduccionDiaria);
                data.Add("HoraInicio", entitiEncabezadoProduccion.HoraInicio);
                data.Add("HoraFinal", entitiEncabezadoProduccion.HoraFinal);
                data.Add("Estatus", entitiEncabezadoProduccion.estatus);
                string query = "SPActualizarEncabezadoProduccionDiaria";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoEncabezadoProduccionDiaria> ObtenerEncabezadoProduccionDiaria(int idPlanta, DateTime? Fecha, int idProducto)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdPlanta", idPlanta);
                data.Add("Fecha", Fecha);
                data.Add("IdProducto", idProducto);
                string query = "SPObtenerEncabezadoProduccionDiariaActivos";

                return await this.contextoBD.ObtenerDato<DtoEncabezadoProduccionDiaria>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoEncabezadoProduccionDiaria>> ObtenerProducciones(int idPlanta, DateTime? Fecha)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdPLanta", idPlanta);
                data.Add("Fecha", Fecha);
                string query = "SPObtenerEncabezadoProduccionDiariaRpt";

                return await this.contextoBD.ObtenerListaDeDatos<DtoEncabezadoProduccionDiaria>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoEncabezadoProduccionDiaria> ObtenerProduccionDiariaPorID(int idEncabezadoProduccionDiaria)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEncabezadoProduccionDiaria", idEncabezadoProduccionDiaria);
                string query = "SPObtenerEncabezadoProduccionDiariaPorID";

                return await this.contextoBD.ObtenerDato<DtoEncabezadoProduccionDiaria>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
