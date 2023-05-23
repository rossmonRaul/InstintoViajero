using Dominio.Entity;
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

    public class SucursalController : Controller
    {
      
        private readonly IServicioSucursal servicioSucursal;

        public SucursalController(IServicioSucursal servicioSucursal)
        {
            this.servicioSucursal = servicioSucursal;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarSucursal(EntitySucursal entitiSucursal)
        {
            return Json(await this.servicioSucursal.InsertarSucursal(entitiSucursal));
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarSucursal(EntitySucursal entitiSucursal)
        {           
            return Json(await this.servicioSucursal.ActualizarSucursal(entitiSucursal));
        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarSucursal(int idSucursal)
        {
            return Json(await this.servicioSucursal.EliminarSucursal(idSucursal));
        }

        [HttpGet("[action]/{idSucursal}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleSucursalID(int idSucursal)
        {
            try
            {
                return Json(await this.servicioSucursal.ObtenerDetalleSucursalID(idSucursal));
            }
            catch (Exception ex)
            {
                return Json($"Error: {ex.Message}");
            }            
        }

        [HttpGet("[action]/{nombre}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleSucursalNombre(string nombre)
        {
            return Json(await this.servicioSucursal.ObtenerDetalleSucursalNombre(nombre));
        }


        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerSucursales()
        {
            return Json(await this.servicioSucursal.ObtenerSucursales());
        }
    }
}
