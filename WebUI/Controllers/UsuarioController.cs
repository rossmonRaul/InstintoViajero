using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.Usuario;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class UsuarioController : Controller
    {

        private readonly IServicioUsuario servicioUsuario;
        public UsuarioController(IServicioUsuario servicioUsuario)
        {
            this.servicioUsuario = servicioUsuario;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarUsuario(EntitiUsuario entitiUsuario)
        {
            try
            {
                return Json(await this.servicioUsuario.InsertarUsuario(entitiUsuario));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarUsuario(EntitiUsuario entitiPlanta)
        {
            try
            {
                return Json(await this.servicioUsuario.ActualizarUsuario(entitiPlanta));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }

        }

        [HttpDelete("[action]")]
        [Authorize]
        public async Task<JsonResult> EliminarUsuario(int idUsuario)
        {
            return Json(await this.servicioUsuario.EliminarUsuario(idUsuario));
        }

        [HttpGet("[action]/{idUsuario}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleUsuarioID(int idUsuario)
        {
            return Json(await this.servicioUsuario.ObtenerDetalleUsuarioID(idUsuario));
        }

        [HttpGet("[action]/{nombre}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleUsuarioNombre(string nombre)
        {
            return Json(await this.servicioUsuario.ObtenerDetalleUsuarioNombre(nombre));
        }


        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ObtenerUsuarios()
        {
            return Json(await this.servicioUsuario.ObtenerUsuarios());
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarContrasenhaTemporal(EntitiUsuario entitiPlanta)
        {
            try
            {
                return Json(await this.servicioUsuario.ActualizarContrasenhaTemporal(entitiPlanta));
            }
            catch (System.Exception ex)
            {
                throw ex;
            }

        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarContrasenha(int idUsuario, string contrasena )
        {
            try
            {
                return Json(await this.servicioUsuario.ActualizarContrasenha(idUsuario, contrasena));
            }
            catch (System.Exception ex)
            {
                throw ex;
            }

        }

    }
}
