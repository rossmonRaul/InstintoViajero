using Microsoft.AspNetCore.Mvc;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.Persona;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using Dominio.Interfaces.Aplicacion.Vendedor;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class VendedorController : Controller
    {
        private readonly IServicioVendedor servicioVendedor;
        public VendedorController(IServicioVendedor servicioVendedor)
        {
            this.servicioVendedor = servicioVendedor;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarVendedor(EntityVendedor entitiVendedor)
        {
            try
            {
                return Json(await this.servicioVendedor.InsertarVendedor(entitiVendedor));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarVendedor(EntityVendedor entitiVendedor)
        {
            try
            {
                return Json(await this.servicioVendedor.ActualizarVendedor(entitiVendedor));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }

        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarVendedor(int idVendedor)
        {
            return Json(await this.servicioVendedor.EliminarVendedor(idVendedor));
        }

        [HttpGet("[action]/{idVendedor}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleVendedor(int idVendedor)
        {
            return Json(await this.servicioVendedor.ObtenerDetalleVendedor(idVendedor));
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerVendedores()
        {
            return Json(await this.servicioVendedor.ObtenerVendedores());
        }
     
    }
}
