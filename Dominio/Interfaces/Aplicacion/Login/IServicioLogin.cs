using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Login
{
    public interface IServicioLogin
    {
        Task<DtoLogin> IniciarSesionUsuario(string usuario, string contrasena);

    }
}
