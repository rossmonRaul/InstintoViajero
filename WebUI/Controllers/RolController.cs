using Dominio.Interfaces.Aplicacion.Rol;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class RolController : Controller
    {

        private readonly IServicioRol servicioRol;

        public RolController(IServicioRol servicioRol)
        {
            this.servicioRol = servicioRol;
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerRoles()
        {
            return Json(await this.servicioRol.ObtenerRoles());
        }
    }
}
