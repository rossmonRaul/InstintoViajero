using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.EncabezadoProduccionDiaria;
using Dominio.Interfaces.Aplicacion.Planta;
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

    public class EncabezadoProduccionDiariaController : Controller
    {

        private readonly IServicioEncabezadoProduccionDiaria servicioEncabezadoProduccion;

        public EncabezadoProduccionDiariaController(IServicioEncabezadoProduccionDiaria servicioEncabezadoProduccion)
        {
            this.servicioEncabezadoProduccion = servicioEncabezadoProduccion;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarEncabezadoProduccionDiaria(EntitiEncabezadoProduccionDiaria entitiEncabezadoProduccion)
        {
            try
            {
                return Json(await this.servicioEncabezadoProduccion.InsertarEncabezadoProduccionDiaria(entitiEncabezadoProduccion));
            }
            catch (Exception ex)
            {
                return Json(ex.Message);
            }

        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarEncabezadoProduccionDiaria(EntitiEncabezadoProduccionDiaria entitiEncabezadoProduccion)
        {
            return Json(await this.servicioEncabezadoProduccion.ActualizarEncabezadoProduccionDiaria(entitiEncabezadoProduccion));
        }


        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerEncabezadoProduccionDiaria(int idPlanta, DateTime? Fecha, int idProducto)
        {
            try
            {
                return Json(await this.servicioEncabezadoProduccion.ObtenerEncabezadoProduccionDiaria(idPlanta, Fecha, idProducto));
            }
            catch (Exception ex)
            {

                return Json($"Error: {ex.Message}");
            }

        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerProducciones(int idPlanta, DateTime? Fecha)
        {
            try
            {
                return Json(await this.servicioEncabezadoProduccion.ObtenerProducciones(idPlanta, Fecha));
            }
            catch (Exception ex)
            {

                return Json($"Error: {ex.Message}");
            }

        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerProduccionDiariaPorID(int idEncabezadoProduccionDiaria)
        {
            try
            {
                return Json(await this.servicioEncabezadoProduccion.ObtenerProduccionDiariaPorID(idEncabezadoProduccionDiaria));
            }
            catch (Exception ex)
            {

                return Json($"Error: {ex.Message}");
            }

        }

    }
}
