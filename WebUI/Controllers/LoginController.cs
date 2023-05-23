using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.Login;
using Dominio.Interfaces.WebUI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using WebUI.Procesos.JWT;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class LoginController : Controller
    {

        private readonly IServicioLogin servicioLogin;
        private readonly IJwtSecurity jwtSecurity;

        public LoginController(IServicioLogin servicioLogin, IJwtSecurity jwtSecurity)
        {
            this.servicioLogin = servicioLogin;
            this.jwtSecurity = jwtSecurity;
        }

        [HttpGet("[action]")]
        [AllowAnonymous]
        public async Task<JsonResult> IniciarSesionUsuario(string usuario, string contrasena)
        {
            try
            {
                DtoLogin login = await this.servicioLogin.IniciarSesionUsuario(usuario, contrasena);
                if (login == null || string.IsNullOrEmpty(login.nombre))
                    return Json(new DtoAccessToken());
                else
                {
                    return Json(this.jwtSecurity.Autentication(login));
                }                    
            }
            catch (Exception ex)
            {

                return Json($"Error: {ex.Message}");
            }

        }
    }
}
