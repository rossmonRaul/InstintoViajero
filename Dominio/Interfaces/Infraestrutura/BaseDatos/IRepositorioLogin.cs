using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioLogin
    {
        Task<DtoLogin> IniciarSesionUsuario(string usuario, string contrasena);

    }
}
