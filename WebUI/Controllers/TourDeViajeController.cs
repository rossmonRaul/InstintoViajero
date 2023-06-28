using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.TourDeViaje;
using Dominio.Interfaces.Aplicacion.Surcusal;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebUI.Controllers
{

    [Route("{controller}")]
    [ApiController]

    public class TourDeViajeController : Controller
    {

        private readonly IServicioTourDeViaje servicioTourDeViaje;

        public TourDeViajeController(IServicioTourDeViaje servicioTourDeViaje)
        {
            this.servicioTourDeViaje = servicioTourDeViaje;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarTourDeViaje(EntityTourDeViaje entityTourDeViaje)
        {
            return Json(await this.servicioTourDeViaje.InsertarTourDeViaje(entityTourDeViaje));
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarTourDeViaje(EntityTourDeViaje entityTourDeViaje)
        {
            return Json(await this.servicioTourDeViaje.ActualizarTourDeViaje(entityTourDeViaje));
        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarTourDeViaje(int idTourDeViaje)
        {
            return Json(await this.servicioTourDeViaje.EliminarTourDeViaje(idTourDeViaje));
        }

        [HttpGet("[action]/{idTourDeViaje}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleTourDeViajeID(int idTourDeViaje)
        {
            try
            {
                return Json(await this.servicioTourDeViaje.ObtenerDetalleTourDeViajeID(idTourDeViaje));
            }
            catch (Exception ex)
            {
                return Json($"Error: {ex.Message}");
            }
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerTourDeViaje()
        {
            try
            {
                return Json(await this.servicioTourDeViaje.ObtenerTourDeViaje());
            }
            catch (Exception ex)
            {
                return Json($"Error: {ex.Message}");
            }
            
        }
        
    }
}
