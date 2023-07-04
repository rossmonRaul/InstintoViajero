using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.ClubDeViaje;
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

    public class ClubDeViajeController : Controller
    {

        private readonly IServicioClubDeViaje servicioClubDeViaje;

        public ClubDeViajeController(IServicioClubDeViaje servicioClubDeViaje)
        {
            this.servicioClubDeViaje = servicioClubDeViaje;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarClubDeViaje(EntityClubDeViaje entityClubDeViaje)
        {
            return Json(await this.servicioClubDeViaje.InsertarClubDeViaje(entityClubDeViaje));
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarClubDeViaje(EntityClubDeViaje entityClubDeViaje)
        {
            return Json(await this.servicioClubDeViaje.ActualizarClubDeViaje(entityClubDeViaje));
        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarClubDeViaje(int idClubDeViaje)
        {
            return Json(await this.servicioClubDeViaje.EliminarClubDeViaje(idClubDeViaje));
        }

        [HttpGet("[action]/{idClubDeViaje}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleClubDeViajeID(int idClubDeViaje)
        {
            try
            {
                return Json(await this.servicioClubDeViaje.ObtenerDetalleClubDeViajeID(idClubDeViaje));
            }
            catch (Exception ex)
            {
                return Json($"Error: {ex.Message}");
            }
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerClubDeViaje()
        {
            try
            {
                return Json(await this.servicioClubDeViaje.ObtenerClubDeViaje());
            }
            catch (Exception ex)
            {
                return Json($"Error: {ex.Message}");
            }
            
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerTiposDeCuentas()
        {
            try
            {
                return Json(await this.servicioClubDeViaje.ObtenerTiposDeCuentas());
            }
            catch (Exception ex)
            {
                return Json($"Error: {ex.Message}");
            }

        }
        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerTiposDeTarjetas()
        {
            try
            {
                return Json(await this.servicioClubDeViaje.ObtenerTiposDeTarjetas());
            }
            catch (Exception ex)
            {
                return Json($"Error: {ex.Message}");
            }

        }
        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerFrecuenciasDePago()
        {
            try
            {
                return Json(await this.servicioClubDeViaje.ObtenerFrecuenciasDePago());
            }
            catch (Exception ex)
            {
                return Json($"Error: {ex.Message}");
            }

        }

    }
}
