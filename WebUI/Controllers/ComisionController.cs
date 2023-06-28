using Microsoft.AspNetCore.Mvc;
using Dominio.Entity;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using Dominio.Interfaces.Aplicacion.Comision;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class ComisionController : Controller
    {
        private readonly IServicioComision servicioComision;
        public ComisionController(IServicioComision servicioComision)
        {
            this.servicioComision = servicioComision;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarComision(EntityComision entitiComision)
        {
            try
            {
                return Json(await this.servicioComision.InsertarComision(entitiComision));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarComision(EntityComision entitiComision)
        {
            try
            {
                return Json(await this.servicioComision.ActualizarComision(entitiComision));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }

        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarComision(int idComision)
        {

            return Json(await this.servicioComision.EliminarComision(idComision));
        }


        [HttpGet("[action]/{idComision}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleComision(int idComision)
        {
            return Json(await this.servicioComision.ObtenerDetalleComision(idComision));
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerComisiones()
        {
            return Json(await this.servicioComision.ObtenerComisiones());
        }
    }
}
