using Dominio.Entiti;
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

    public class PlantaController : Controller
    {
      
        private readonly IServicioPlanta servicioPlanta;

        public PlantaController(IServicioPlanta servicioPlanta)
        {
            this.servicioPlanta = servicioPlanta;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarPlanta(EntitiPlanta entitiPlanta)
        {
            return Json(await this.servicioPlanta.InsertarPlanta(entitiPlanta));
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarPlanta(EntitiPlanta entitiPlanta)
        {           
            return Json(await this.servicioPlanta.ActualizarPlanta(entitiPlanta));
        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult>EliminarPlanta(int idPlanta)
        {
            return Json(await this.servicioPlanta.EliminarPlanta(idPlanta));
        }

        [HttpGet("[action]/{idPlanta}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetallePlantaID(int idPlanta)
        {
            try
            {
                return Json(await this.servicioPlanta.ObtenerDetallePlantaID(idPlanta));
            }
            catch (Exception ex)
            {
                return Json($"Error: {ex.Message}");
            }            
        }

        [HttpGet("[action]/{nombre}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetallePlantaNombre(string nombre)
        {
            return Json(await this.servicioPlanta.ObtenerDetallePlantaNombre(nombre));
        }


        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerPlantas()
        {
            return Json(await this.servicioPlanta.ObtenerPlantas());
        }
    }
}
