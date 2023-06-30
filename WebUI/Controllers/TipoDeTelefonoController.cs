using Microsoft.AspNetCore.Mvc;
using Dominio.Entity;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using Dominio.Interfaces.Aplicacion.TipoDeTelefono;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class TipoDeTelefonoController : Controller
    {
        private readonly IServicioTipoDeTelefono servicioTipoDeTelefono;
        public TipoDeTelefonoController(IServicioTipoDeTelefono servicioTipoDeTelefono)
        {
            this.servicioTipoDeTelefono = servicioTipoDeTelefono;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarTipoDeTelefono(EntityTipoDeTelefono entitiTipoDeTelefono)
        {
            try
            {
                return Json(await this.servicioTipoDeTelefono.InsertarTipoDeTelefono(entitiTipoDeTelefono));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarTipoDeTelefono(EntityTipoDeTelefono entitiTipoDeTelefono)
        {
            try
            {
                return Json(await this.servicioTipoDeTelefono.ActualizarTipoDeTelefono(entitiTipoDeTelefono));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }

        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarTipoDeTelefono(int idTipoDeTelefono)
        {

            return Json(await this.servicioTipoDeTelefono.EliminarTipoDeTelefono(idTipoDeTelefono));
        }


        [HttpGet("[action]/{idTipoDeTelefono}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleTipoDeTelefono(int idTipoDeTelefono)
        {
            return Json(await this.servicioTipoDeTelefono.ObtenerDetalleTipoDeTelefono(idTipoDeTelefono));
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerTiposDeTelefono()
        {
            return Json(await this.servicioTipoDeTelefono.ObtenerTiposDeTelefono());
        }
    }
}
