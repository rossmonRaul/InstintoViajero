using Dominio.Interfaces.Aplicacion.Horario;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class HorarioController : Controller
    {

        private readonly IServicioHorario servicioHorario;

        public HorarioController(IServicioHorario servicioHorario)
        {
            this.servicioHorario = servicioHorario;
        }

        [HttpGet("[action]")]
        public async Task<JsonResult> ObtenerHorarios()
        {
            return Json(await this.servicioHorario.ObtenerHorarios());
        }
    }
}
