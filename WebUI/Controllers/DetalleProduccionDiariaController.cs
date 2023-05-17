using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.DetalleProduccionDiaria;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class DetalleProduccionDiariaController : Controller
    {

        public readonly IServicioDetalleProduccionDiaria servicioDetalleProduccionDiaria;

        public DetalleProduccionDiariaController(IServicioDetalleProduccionDiaria servicioDetalleProduccionDiaria)
        {
            this.servicioDetalleProduccionDiaria = servicioDetalleProduccionDiaria;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarDetalleProduccionDiaria(List<EntitiDetalleProduccionDiaria> entitiDetalleProduccionDiaria)
        {
            try
            {
                return Json(await this.servicioDetalleProduccionDiaria.InsertarDetalleProduccionDiaria(entitiDetalleProduccionDiaria));
            }
            catch (System.Exception ex)
            {

                return Json(ex.Message);
            }


        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarDetalleProduccionDiaria(List<EntitiDetalleProduccionDiaria> entitiDetalleProduccionDiaria)
        {
            return Json(await this.servicioDetalleProduccionDiaria.ActualizarDetalleProduccionDiaria(entitiDetalleProduccionDiaria));
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleProduccionDiaria(int idEncabezadoProduccionDiaria)
        {
            return Json(await this.servicioDetalleProduccionDiaria.ObtenerDetalleProduccionDiaria(idEncabezadoProduccionDiaria));
        }
    }
}
