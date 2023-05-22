
using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.Reporte;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class ReporteController : Controller
    {

        private readonly IServicioReporte servicioReporte;

        public ReporteController(IServicioReporte servicioReporte)
        {
            this.servicioReporte = servicioReporte;
        }

   
    }
}
