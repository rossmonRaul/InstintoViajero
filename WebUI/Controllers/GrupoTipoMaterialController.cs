using Dominio.Interfaces.Aplicacion.GrupoTipoMaterial;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class GrupoTipoMaterialController : Controller
    {
        private readonly IServicioGrupoTipoMaterial servicioGrupoTipoMaterial;

        public GrupoTipoMaterialController(IServicioGrupoTipoMaterial servicioGrupoTipoMaterial)
        {
            this.servicioGrupoTipoMaterial = servicioGrupoTipoMaterial;
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerGrupoTiposMaterial()
        {
            return Json(await this.servicioGrupoTipoMaterial.ObtenerGrupoTiposMaterial());
        }
    }
}
