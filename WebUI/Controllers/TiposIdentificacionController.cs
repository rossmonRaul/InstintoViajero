using Dominio.Interfaces.Aplicacion.TiposIdentificacion;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class TiposIdentificacionController : Controller
    {

        private readonly IServicioTiposIdentificacion servicioTiposIdentificacion;

        public TiposIdentificacionController(IServicioTiposIdentificacion servicioTiposIdentificacion)
        {
            this.servicioTiposIdentificacion = servicioTiposIdentificacion;
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerTiposIdentificacion()
        {
            return Json(await this.servicioTiposIdentificacion.ObtenerTiposIdentificacion());
        }
    }
}
