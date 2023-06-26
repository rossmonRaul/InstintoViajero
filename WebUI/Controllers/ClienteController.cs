using Microsoft.AspNetCore.Mvc;
using Dominio.Entity;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using Dominio.Interfaces.Aplicacion.Cliente;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class ClienteController : Controller
    {
        private readonly IServicioCliente servicioCliente;
        public ClienteController(IServicioCliente servicioCliente)
        {
            this.servicioCliente = servicioCliente;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarCliente(EntityCliente entitiCliente)
        {
            try
            {
                return Json(await this.servicioCliente.InsertarCliente(entitiCliente));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarCliente(EntityCliente entitiCliente)
        {
            try
            {
                return Json(await this.servicioCliente.ActualizarCliente(entitiCliente));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }

        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarCliente(int idCliente)
        {

            return Json(await this.servicioCliente.EliminarCliente(idCliente));
        }


        [HttpGet("[action]/{idCliente}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleCliente(int idCliente)
        {
            return Json(await this.servicioCliente.ObtenerDetalleCliente(idCliente));
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerClientes()
        {
            return Json(await this.servicioCliente.ObtenerClientes());
        }

    }
}
