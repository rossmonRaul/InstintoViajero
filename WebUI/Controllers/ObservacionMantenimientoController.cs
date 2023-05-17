using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.ObservacionMantenimiento;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;


namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class ObservacionMantenimientoController : Controller
    {
        private readonly IServicioObservacionMantenimiento servicioObservacionMantenimiento;

        public ObservacionMantenimientoController(IServicioObservacionMantenimiento servicioObservacionMantenimiento)
        {
            this.servicioObservacionMantenimiento = servicioObservacionMantenimiento;
        }

        [HttpPost("[action]")]
        public async Task<JsonResult> InsertarObservacionMantenimiento(List<EntitiObservacionMantenimiento> entitiObservacionMantenimiento)
        {
            return Json(await this.servicioObservacionMantenimiento.InsertarObservacionMantenimiento(entitiObservacionMantenimiento));
        }

        [HttpPut("[action]")]
        public async Task<JsonResult> ActualizarObservacionMantenimiento(List<EntitiObservacionMantenimiento> entitiObservacionMantenimiento)
        {

            return Json(await this.servicioObservacionMantenimiento.ActualizarObservacionMantenimiento(entitiObservacionMantenimiento));
        }

        [HttpDelete("[action]")]
        public async Task<JsonResult> EliminarObservacionMantenimiento(int idObservacionesMantenimiento)
        {
            return Json(await this.servicioObservacionMantenimiento.EliminarObservacionMantenimiento(idObservacionesMantenimiento));
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerObservacionMantenimientoPorEncabezado(int idEncabezadoProduccionDiaria)
        {
            try
            {
                return Json(await this.servicioObservacionMantenimiento.ObtenerObservacionMantenimientoPorEncabezado(idEncabezadoProduccionDiaria));
            }
            catch (Exception ex)
            {

                return Json($"Error: {ex.Message}");
            }

        }


        [HttpGet("[action]")]
        public async Task<JsonResult> ObtenerObservacionesMantenimiento()
        {
            return Json(await this.servicioObservacionMantenimiento.ObtenerObservacionesMantenimiento());
        }

        [HttpGet("[action]")]
        public async Task<JsonResult> ObtenerDetalleObservacionMantenimiento(int idObservacionesMantenimiento)
        {
            try
            {
                return Json(await this.servicioObservacionMantenimiento.ObtenerDetalleObservacionMantenimiento(idObservacionesMantenimiento));
            }
            catch (Exception ex)
            {

                return Json($"Error: {ex.Message}");
            }

        }
    }
}
