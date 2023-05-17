using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Infraestrutura.BaseDatos;

namespace Infraestrutura.BaseDatos
{

    public class RepositorioSegmentoDetalleProduccion : IRepositorioSegmentoDetalleProduccion
    {
        private readonly IContextoBD contextoBD;

        public RepositorioSegmentoDetalleProduccion(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarSegmentoDetalleProduccionDiaria(EntitiSegmentoDetalleProduccion entitiSegmentoDetalle)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEncabezadoProduccionDiaria", entitiSegmentoDetalle.IdEncabezadoProduccionDiaria);
                data.Add("PlacaInicio", entitiSegmentoDetalle.PlacaInicio);
                data.Add("PlacaFinal", entitiSegmentoDetalle.PlacaFinal);
                data.Add("Conteo", entitiSegmentoDetalle.Conteo);
                data.Add("IdTurno", entitiSegmentoDetalle.IdTurno);
                string query = "SPInsertarsConteoPlacasPorTurno";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public async Task<DtoDatosSP> ActualizarSegmentoDetalleProduccionDiaria(EntitiSegmentoDetalleProduccion entitiSegmentoDetalle)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdSegmentosDetallesProduccionesDiarias", entitiSegmentoDetalle.IdSegmentosDetallesProduccionesDiarias);
                data.Add("IdTurno", entitiSegmentoDetalle.IdTurno);
                data.Add("PlacaInicio", entitiSegmentoDetalle.PlacaInicio);
                data.Add("PlacaFinal", entitiSegmentoDetalle.PlacaFinal);
                data.Add("Conteo", entitiSegmentoDetalle.Conteo);
                string query = "SPActualizarConteoPlacasPorTurno";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoSegmentoDetalleProduccion>> ObtenerSegementoDetalleProduccionDiaria(int idEncabezadoProduccion)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEncabezadoProduccionDiaria", idEncabezadoProduccion);
                string query = "SPObtenerConteoPlacasPorTurno";

                return await this.contextoBD.ObtenerListaDeDatos<DtoSegmentoDetalleProduccion>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
