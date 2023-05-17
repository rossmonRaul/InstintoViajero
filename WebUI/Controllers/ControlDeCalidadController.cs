using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.ControlDeCalidad;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]

    public class ControlDeCalidadController : Controller
    {
        private readonly IServicioControlDeCalidad servicioControlDeCalidad;

        public ControlDeCalidadController(IServicioControlDeCalidad servicioControlDeCalidad)
        {
            this.servicioControlDeCalidad = servicioControlDeCalidad;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarControlDeCalidad(EntitiControlDeCalidad entitiControlDeCalidad)
        {
            return Json(await this.servicioControlDeCalidad.InsertarControlDeCalidad(entitiControlDeCalidad));
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarControlDeCalidad(EntitiControlDeCalidad entitiControlDeCalidad)
        {

            return Json(await this.servicioControlDeCalidad.ActualizarControlDeCalidad(entitiControlDeCalidad));
        }  

        [HttpGet("[action]/{idCalidad}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleControlDeCalidadID(int idCalidad)
        {
            try
            {
                return Json(await this.servicioControlDeCalidad.ObtenerDetalleControlDeCalidadID(idCalidad));
            }
            catch (Exception ex)
            {

                return Json($"Error: {ex.Message}");
            }

        }

        [HttpGet("[action]/{idProducto}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleControlDeCalidadPorProducto(int idProducto)
        {
            try
            {
                return Json(await this.servicioControlDeCalidad.ObtenerControlDeCalidadPorProducto(idProducto));
            }
            catch (Exception ex)
            {

                return Json($"Error: {ex.Message}");
            }

        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerControlDeCalidad()
        {
            return Json(await this.servicioControlDeCalidad.ObtenerControlDeCalidad());
        }
    }
}
