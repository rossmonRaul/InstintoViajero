
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
    public class RepositorioReporte : IRepositorioReporte
    {
        private readonly IContextoBD contextoBD;

        public RepositorioReporte(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }
        public async Task <List<DtoReporteAcumulativoPlacasMensual>> ReporteAcumulativoMensual(EntitiReporte reporte)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("FechaInicio", reporte.FechaInicio);
                data.Add("FechaFinal", reporte.FechaFin);
                string query = "SPRptAcumulativoPlacasMensual";

                return await this.contextoBD.ObtenerListaDeDatos<DtoReporteAcumulativoPlacasMensual>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public async Task<List<DtoReporteCementoPorPlacasProductos>> ReporteProductos(EntitiReporte reporte)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("FechaInicio", reporte.FechaInicio);
                data.Add("FechaFinal", reporte.FechaFin);
                data.Add("IdProducto", reporte.idProducto);
                string query = "SPRptCementoPorUnidadProductos";

                return await this.contextoBD.ObtenerListaDeDatos<DtoReporteCementoPorPlacasProductos>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
