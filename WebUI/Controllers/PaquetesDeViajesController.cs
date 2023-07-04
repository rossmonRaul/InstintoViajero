using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.PaquetesDeViajes;
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

    public class PaquetesDeViajesController : Controller
    {

        private readonly IServicioPaquetesDeViajes servicioPaquetesDeViajes;

        public PaquetesDeViajesController(IServicioPaquetesDeViajes servicioPaquetesDeViajes)
        {
            this.servicioPaquetesDeViajes = servicioPaquetesDeViajes;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarPaquetesDeViajes(EntityPaquetesDeViajes entityPaquetesDeViajes)
        {
            return Json(await this.servicioPaquetesDeViajes.InsertarPaquetesDeViajes(entityPaquetesDeViajes));
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarPaquetesDeViajes(EntityPaquetesDeViajes entityPaquetesDeViajes)
        {
            return Json(await this.servicioPaquetesDeViajes.ActualizarPaquetesDeViajes(entityPaquetesDeViajes));
        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarPaquetesDeViajes(int idPaquetesDeViajes)
        {
            return Json(await this.servicioPaquetesDeViajes.EliminarPaquetesDeViajes(idPaquetesDeViajes));
        }

        [HttpGet("[action]/{idPaquetesDeViajes}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetallePaquetesDeViajesID(int idPaquetesDeViajes)
        {
            try
            {
                return Json(await this.servicioPaquetesDeViajes.ObtenerDetallePaquetesDeViajesID(idPaquetesDeViajes));
            }
            catch (Exception ex)
            {
                return Json($"Error: {ex.Message}");
            }
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerPaquetesDeViajes()
        {
            try
            {
                return Json(await this.servicioPaquetesDeViajes.ObtenerPaquetesDeViajes());
            }
            catch (Exception ex)
            {
                return Json($"Error: {ex.Message}");
            }
            
        }
        
    }
}
