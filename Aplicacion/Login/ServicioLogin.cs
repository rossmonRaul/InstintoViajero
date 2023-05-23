using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.Login;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.Login
{
    public class ServicioLogin : IServicioLogin
    {

        private readonly IRepositorioLogin repositorioLogin;

        public ServicioLogin(IRepositorioLogin repositorioLogin)
        {
            this.repositorioLogin = repositorioLogin;
        }

        public async Task<DtoLogin> IniciarSesionUsuario(string usuario, string contrasena)
        {
            return await this.repositorioLogin.IniciarSesionUsuario(usuario, contrasena);
        }
    }
}
