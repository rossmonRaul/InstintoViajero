using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.ActividadPlanta;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]

    public class ActividadPlantaController : Controller
    {
        private readonly IServicioActividadPlanta servicioActividadPlanta;

        public ActividadPlantaController(IServicioActividadPlanta servicioActividadPlanta)
        {
            this.servicioActividadPlanta = servicioActividadPlanta;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarActividadPlanta(EntitiActividadPlanta entitiActividadPlanta)
        {
            return Json(await this.servicioActividadPlanta.InsertarActividadPlanta(entitiActividadPlanta));
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarActividadPlanta(EntitiActividadPlanta entitiActividadPlanta)
        {

            return Json(await this.servicioActividadPlanta.ActualizarActividadPlanta(entitiActividadPlanta));
        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarActividadPlanta(int idActividadPlanta)
        {
            return Json(await this.servicioActividadPlanta.EliminarActividadPlanta(idActividadPlanta));
        }

        [HttpGet("[action]/{idActividadPlanta}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleActividadPlantaID(int idActividadPlanta)
        {
            try
            {
                return Json(await this.servicioActividadPlanta.ObtenerDetalleActividadPlantaID(idActividadPlanta));
            }
            catch (Exception ex)
            {

                return Json($"Error: {ex.Message}");
            }

        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerActividadesPlantas()
        {
            return Json(await this.servicioActividadPlanta.ObtenerActividadesPlantas());
        }
    }
}
