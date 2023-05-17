using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.Producto;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
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
        public async Task<JsonResult> InsertarProducto(EntitiProducto entitiProducto)
        {
            return Json(await this.servicioProducto.InsertarProducto(entitiProducto));
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerUltimoProductoInsertado()
        {
            return Json(await this.servicioProducto.ObtenerUltimoProductoInsertado());
        }

        [HttpPost("[action]/idproducto/{idproducto}/item/{item}")]
        [Authorize]
        public async Task<JsonResult> InsertarTipoMaterialProducto(int idProducto, int item)
        {
            return Json(await this.servicioProducto.InsertarTipoMaterialProducto(idProducto, item));
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarProducto(EntitiProducto entitiProducto)
        {

            return Json(await this.servicioProducto.ActualizarProducto(entitiProducto));
        }

        [HttpPut("[action]/idTipoMaterialProducto/{idTipoMaterialProducto}/estado/{estado}")]
        [Authorize]
        public async Task<JsonResult> ActualizarTipoMaterialProducto(int idTipoMaterialProducto, int estado)
        {
            
            return Json(await this.servicioProducto.ActualizarTipoMaterialProducto(idTipoMaterialProducto, estado));
        }

        [HttpDelete("[action]/{idProducto}")]
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

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerProductos()
        {
            return Json(await this.servicioProducto.ObtenerProductos());
        }

        [HttpGet("[action]/{idProducto}")]
        [Authorize]
        public async Task<JsonResult> ObtenerTipoMaterialProducto(int idProducto)
        {
            try
            {
                return Json(await this.servicioProducto.ObtenerTipoMaterialProducto(idProducto));
            }
            catch (Exception ex)
            {

                return Json($"Error: {ex.Message}");
            }
        }




    }
}
