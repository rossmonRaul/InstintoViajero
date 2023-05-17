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
    public class RepositorioTotalesProduccionDiaria : IRepositorioTotalProduccionDiaria
    {
        private readonly IContextoBD contextoBD;

        public RepositorioTotalesProduccionDiaria(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarTotalesProduccionDiaria(EntitiTotalesProduccionDiaria entitiTotalesProduccionDiaria)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEncabezadoProduccionDiaria", entitiTotalesProduccionDiaria.idEncabezadoProduccionDiaria);
                data.Add("PlacasTotales", entitiTotalesProduccionDiaria.placasTotales);
                data.Add("UnidadesTotales", entitiTotalesProduccionDiaria.unidadesTotales);
                data.Add("CubosTotales", entitiTotalesProduccionDiaria.cubosTotales);
                data.Add("MermaTotal", entitiTotalesProduccionDiaria.mermaTotal);
                data.Add("MezclasPerdidas", entitiTotalesProduccionDiaria.mezclasPerdidas);
                data.Add("NumeroMezclas", entitiTotalesProduccionDiaria.numeroMezclas);
                data.Add("Cemento", entitiTotalesProduccionDiaria.cemento);
                data.Add("CantidadColor", entitiTotalesProduccionDiaria.cantidadColor);
                //data.Add("IdObservacionesMantenimiento", entitiTotalesProduccionDiaria.idObservacionesMantenimiento);
                data.Add("Color", entitiTotalesProduccionDiaria.color);
                data.Add("Aditivo", entitiTotalesProduccionDiaria.aditivo);

                string query = "SPInsertarTotalesProduccionDiaria";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarTotalesProduccionDiaria(EntitiTotalesProduccionDiaria entitiTotalesProduccionDiaria)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdTotalesProduccionDiaria", entitiTotalesProduccionDiaria.idTotalesProduccionDiaria);
                data.Add("PlacasTotales", entitiTotalesProduccionDiaria.placasTotales);
                data.Add("UnidadesTotales", entitiTotalesProduccionDiaria.unidadesTotales);
                data.Add("CubosTotales", entitiTotalesProduccionDiaria.cubosTotales);
                data.Add("MermaTotal", entitiTotalesProduccionDiaria.mermaTotal);
                data.Add("MezclasPerdidas", entitiTotalesProduccionDiaria.mezclasPerdidas);
                data.Add("NumeroMezclas", entitiTotalesProduccionDiaria.numeroMezclas);
                data.Add("Cemento", entitiTotalesProduccionDiaria.cemento);
                data.Add("CantidadColor", entitiTotalesProduccionDiaria.cantidadColor);
                //data.Add("IdObservacionesMantenimiento", entitiTotalesProduccionDiaria.idObservacionesMantenimiento);
                data.Add("Color", entitiTotalesProduccionDiaria.color);
                data.Add("Aditivo", entitiTotalesProduccionDiaria.aditivo);

                string query = "SPActualizarTotalesProduccionDiaria";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoTotalesProduccionDiaria>> ObtenerTotalProduccionDiaria(string fecha, int idPlanta, int idProducto)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("fecha", fecha);
                data.Add("idPlanta", idPlanta);
                data.Add("idProducto", idProducto);
                string query = "SPObtenerTotalesProduccionDiaria";

                return await this.contextoBD.ObtenerListaDeDatos<DtoTotalesProduccionDiaria>(query, data);
            }
            catch (Exception)
            {
                throw;
            }

        }
    }
}
