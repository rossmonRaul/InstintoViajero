using Microsoft.AspNetCore.Mvc;
using Dominio.Entity;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using Dominio.Interfaces.Aplicacion.EstadoPlan;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class EstadoPlanController : Controller
    {
        private readonly IServicioEstadoPlan servicioEstadoPlan;
        public EstadoPlanController(IServicioEstadoPlan servicioEstadoPlan)
        {
            this.servicioEstadoPlan = servicioEstadoPlan;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarEstadoPlan(EntityEstadoPlan entitiEstadoPlan)
        {
            try
            {
                return Json(await this.servicioEstadoPlan.InsertarEstadoPlan(entitiEstadoPlan));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarEstadoPlan(EntityEstadoPlan entitiEstadoPlan)
        {
            try
            {
                return Json(await this.servicioEstadoPlan.ActualizarEstadoPlan(entitiEstadoPlan));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }

        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarEstadoPlan(int idEstadoPlan)
        {

            return Json(await this.servicioEstadoPlan.EliminarEstadoPlan(idEstadoPlan));
        }


        [HttpGet("[action]/{idEstadoPlan}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleEstadoPlan(int idEstadoPlan)
        {
            return Json(await this.servicioEstadoPlan.ObtenerDetalleEstadoPlan(idEstadoPlan));
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerEstadosPlan()
        {
            return Json(await this.servicioEstadoPlan.ObtenerEstadosPlan());
        }
    }
}
