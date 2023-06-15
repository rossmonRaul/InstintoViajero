using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.FormasDePago;
using Dominio.Interfaces.Aplicacion.Surcusal;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebUI.Controllers
{

    [Route("{controller}")]
    [ApiController]

    public class FormasDePagoController : Controller
    {

        private readonly IServicioFormasDePago servicioFormasDePago;

        public FormasDePagoController(IServicioFormasDePago servicioFormasDePago)
        {
            this.servicioFormasDePago = servicioFormasDePago;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarFormasDePago(EntityFormasDePago entityFormasDePago)
        {
            return Json(await this.servicioFormasDePago.InsertarFormasDePago(entityFormasDePago));
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarFormasDePago(EntityFormasDePago entityFormasDePago)
        {
            return Json(await this.servicioFormasDePago.ActualizarFormasDePago(entityFormasDePago));
        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarFormasDePago(int idFormasDePago)
        {
            return Json(await this.servicioFormasDePago.EliminarFormasDePago(idFormasDePago));
        }

        [HttpGet("[action]/{idFormasDePago}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleFormasDePagoID(int idFormasDePago)
        {
            try
            {
                return Json(await this.servicioFormasDePago.ObtenerDetalleFormasDePagoID(idFormasDePago));
            }
            catch (Exception ex)
            {
                return Json($"Error: {ex.Message}");
            }
        }

        [HttpGet("[action]/{nombre}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleFormasDePagoNombre(string nombre)
        {
            return Json(await this.servicioFormasDePago.ObtenerDetalleFormasDePagoNombre(nombre));
        }


        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerFormasDePagos()
        {
            return Json(await this.servicioFormasDePago.ObtenerFormasDePago());
        }
        
    }
}
