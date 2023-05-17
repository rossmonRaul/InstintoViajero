
using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.Reporte;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class ReporteController : Controller
    {

        private readonly IServicioReporte servicioReporte;

        public ReporteController(IServicioReporte servicioReporte)
        {
            this.servicioReporte = servicioReporte;
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ReporteAcumulativoMensual(string fechaI, string fechaF)
        {
            
            DateTime fechaInicio = Convert.ToDateTime(fechaI);
            DateTime fechaFinal= Convert.ToDateTime(fechaF);
            EntitiReporte reporte = new EntitiReporte
            {
                FechaInicio = fechaInicio,
                FechaFin = fechaFinal
            };
            return Json(await this.servicioReporte.ReporteAcumulativoMensual(reporte));
        }
        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ReporteProductos(string fechai, string fechaf, int idproducto)
        {
            try
            {
                DateTime fechaInicio = Convert.ToDateTime(fechai);
                DateTime fechaFinal = Convert.ToDateTime(fechaf);
                EntitiReporte reporte = new EntitiReporte
                {
                    FechaInicio = fechaInicio,
                    FechaFin = fechaFinal,
                    idProducto = idproducto

                };
                return Json(await this.servicioReporte.ReporteProductos(reporte));
            }
            catch (Exception ex)
            {

                return Json($"Error: {ex.Message}");
            }
            
        }
    }
}
