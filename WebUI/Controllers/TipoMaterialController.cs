using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.TipoMaterial;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]

    public class TipoMaterialController : Controller
    {
        private readonly IServicioTipoMaterial servicioTipoMaterial;

        public TipoMaterialController(IServicioTipoMaterial servicioTipoMaterial)
        {
            this.servicioTipoMaterial = servicioTipoMaterial;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarTipoMaterial(EntitiTipoMaterial entitiTipoMaterial)
        {
            return Json(await this.servicioTipoMaterial.InsertarTipoMaterial(entitiTipoMaterial));
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarTipoMaterial(EntitiTipoMaterial entitiTipoMaterial)
        {

            return Json(await this.servicioTipoMaterial.ActualizarTipoMaterial(entitiTipoMaterial));
        }

        [HttpDelete("[action]/{idTipoMaterial}")]
        [Authorize]
        public async Task<JsonResult> EliminarTipoMaterial(int idTipoMaterial)
        {
            return Json(await this.servicioTipoMaterial.EliminarTipoMaterial(idTipoMaterial));
        }

        [HttpGet("[action]/{idTipoMaterial}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleTipoMaterialID(int idTipoMaterial)
        {
            return Json(await this.servicioTipoMaterial.ObtenerDetalleTipoMaterialID(idTipoMaterial));
        }

        [HttpGet("[action]/{nombre}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleTipoMaterialNombre(string nombre)
        {
            return Json(await this.servicioTipoMaterial.ObtenerDetalleTipoMaterialNombre(nombre));
        }


        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerTipoMateriales()
        {
            return Json(await this.servicioTipoMaterial.ObtenerTipoMateriales());
        }
    }
}
