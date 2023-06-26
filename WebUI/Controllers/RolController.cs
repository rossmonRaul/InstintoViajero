using Dominio.Entity;
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

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarRol(EntityRol entitiRol)
        {
            try
            {
                return Json(await this.servicioRol.InsertarRol(entitiRol));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarRol(EntityRol entitiRol)
        {
            try
            {
                return Json(await this.servicioRol.ActualizarRol(entitiRol));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }

        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarRol(int idRol)
        {

            return Json(await this.servicioRol.EliminarRol(idRol));
        }


        [HttpGet("[action]/{idRol}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleRol(int idRol)
        {
            return Json(await this.servicioRol.ObtenerDetalleRol(idRol));
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerRoles()
        {
            return Json(await this.servicioRol.ObtenerRoles());
        }
    }
}
