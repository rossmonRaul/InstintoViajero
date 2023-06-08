using Microsoft.AspNetCore.Mvc;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.Persona;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class PersonaController : Controller
    {
        private readonly IServicioPersona servicioPersona;
        public PersonaController(IServicioPersona servicioPersona)
        {
            this.servicioPersona = servicioPersona;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarPersona(EntityPersona entityPersona)
        {
            try
            {
                return Json(await this.servicioPersona.InsertarPersona(entityPersona));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarPersona(EntityPersona entityPersona)
        {
            try
            {
                return Json(await this.servicioPersona.ActualizarPersona(entityPersona));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }

        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarPersona(int idPersona)
        {
            return Json(await this.servicioPersona.EliminarPersona(idPersona));
        }

        [HttpGet("[action]/{idPersona}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetallePersona(int idPersona)
        {
            return Json(await this.servicioPersona.ObtenerDetallePersona(idPersona));
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerPersonas()
        {
            return Json(await this.servicioPersona.ObtenerPersonas());
        }
     
    }
}
