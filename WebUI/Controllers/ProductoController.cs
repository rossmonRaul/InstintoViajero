using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.Producto;
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

    public class ProductoController : Controller
    {

        private readonly IServicioProducto servicioProducto;

        public ProductoController(IServicioProducto servicioProducto)
        {
            this.servicioProducto = servicioProducto;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarProducto(EntityProducto entitiProducto)
        {
            return Json(await this.servicioProducto.InsertarProducto(entitiProducto));
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarProducto(EntityProducto entitiProducto)
        {
            return Json(await this.servicioProducto.ActualizarProducto(entitiProducto));
        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarProducto(int idProducto)
        {
            return Json(await this.servicioProducto.EliminarProducto(idProducto));
        }

        [HttpGet("[action]/{idProducto}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleProductoID(int idProducto)
        {
            try
            {
                return Json(await this.servicioProducto.ObtenerDetalleProductoID(idProducto));
            }
            catch (Exception ex)
            {
                return Json($"Error: {ex.Message}");
            }
        }

        [HttpGet("[action]/{nombre}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleProductoNombre(string nombre)
        {
            return Json(await this.servicioProducto.ObtenerDetalleProductoNombre(nombre));
        }


        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerProductos()
        {
            return Json(await this.servicioProducto.ObtenerProductoes());
        }
    }
}
