using Microsoft.AspNetCore.Mvc;
using Dominio.Entity;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using Dominio.Interfaces.Aplicacion.Regalia;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class RegaliaController : Controller
    {
        private readonly IServicioRegalia servicioRegalia;
        public RegaliaController(IServicioRegalia servicioRegalia)
        {
            this.servicioRegalia = servicioRegalia;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarRegalia(EntityRegalia entitiRegalia)
        {
            try
            {
                return Json(await this.servicioRegalia.InsertarRegalia(entitiRegalia));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarRegalia(EntityRegalia entitiRegalia)
        {
            try
            {
                return Json(await this.servicioRegalia.ActualizarRegalia(entitiRegalia));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }

        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarRegalia(int idRegalia)
        {

            return Json(await this.servicioRegalia.EliminarRegalia(idRegalia));
        }


        [HttpGet("[action]/{idRegalia}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleRegalia(int idRegalia)
        {
            return Json(await this.servicioRegalia.ObtenerDetalleRegalia(idRegalia));
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerRegalias()
        {
            return Json(await this.servicioRegalia.ObtenerRegalias());
        }

    }
}
