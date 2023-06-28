using Microsoft.AspNetCore.Mvc;
using Dominio.Entity;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using Dominio.Interfaces.Aplicacion.Cuota;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class CuotaController : Controller
    {
        private readonly IServicioCuota servicioCuota;
        public CuotaController(IServicioCuota servicioCuota)
        {
            this.servicioCuota = servicioCuota;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarCuota(EntityCuota entitiCuota)
        {
            try
            {
                return Json(await this.servicioCuota.InsertarCuota(entitiCuota));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarCuota(EntityCuota entitiCuota)
        {
            try
            {
                return Json(await this.servicioCuota.ActualizarCuota(entitiCuota));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }

        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarCuota(int idCuota)
        {

            return Json(await this.servicioCuota.EliminarCuota(idCuota));
        }


        [HttpGet("[action]/{idCuota}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleCuota(int idCuota)
        {
            return Json(await this.servicioCuota.ObtenerDetalleCuota(idCuota));
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerCuotas()
        {
            return Json(await this.servicioCuota.ObtenerCuotas());
        }

    }
}
