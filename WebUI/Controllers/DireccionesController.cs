using Dominio.Interfaces.Aplicacion.Producto;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebUI.Controllers
{

    [Route("{controller}")]
    [ApiController]

    public class DireccionesController : Controller
    {

        private readonly IServicioDirecciones servicioDirecciones;

        public DireccionesController(IServicioDirecciones servicioDirecciones)
        {
            this.servicioDirecciones = servicioDirecciones;
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerProvincias()
        {
            return Json(await this.servicioDirecciones.ObtenerProvincias());
        }


        [HttpGet("[action]/{idProvincia}")]
        [Authorize]
        public async Task<JsonResult> ObtenerCantones(int idProvincia)
        {
            return Json(await this.servicioDirecciones.ObtenerCantones(idProvincia));
        }


        [HttpGet("[action]/{idCanton}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDistritos(int idCanton)
        {
            return Json(await this.servicioDirecciones.ObtenerDistritos(idCanton));
        }

    }
}
