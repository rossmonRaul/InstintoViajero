using Microsoft.AspNetCore.Mvc;
using Dominio.Entity;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using Dominio.Interfaces.Aplicacion.Plazo;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class PlazoController : Controller
    {
        private readonly IServicioPlazo servicioPlazo;
        public PlazoController(IServicioPlazo servicioPlazo)
        {
            this.servicioPlazo = servicioPlazo;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarPlazo(EntityPlazo entitiPlazo)
        {
            try
            {
                return Json(await this.servicioPlazo.InsertarPlazo(entitiPlazo));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarPlazo(EntityPlazo entitiPlazo)
        {
            try
            {
                return Json(await this.servicioPlazo.ActualizarPlazo(entitiPlazo));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }

        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarPlazo(int idPlazo)
        {

            return Json(await this.servicioPlazo.EliminarPlazo(idPlazo));
        }


        [HttpGet("[action]/{idPlazo}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetallePlazo(int idPlazo)
        {
            return Json(await this.servicioPlazo.ObtenerDetallePlazo(idPlazo));
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerPlazos()
        {
            return Json(await this.servicioPlazo.ObtenerPlazos());
        }

    }
}
