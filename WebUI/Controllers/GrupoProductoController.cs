using Dominio.Interfaces.Aplicacion.GrupoProducto;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class GrupoProductoController : Controller
    {
        private readonly IServicioGrupoProducto servicioGrupoProducto;

        public GrupoProductoController(IServicioGrupoProducto servicioGrupoProducto)
        {
            this.servicioGrupoProducto = servicioGrupoProducto;
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerGrupoProductos()
        {
            return Json(await this.servicioGrupoProducto.ObtenerGrupoProductos());
        }
    }
}
