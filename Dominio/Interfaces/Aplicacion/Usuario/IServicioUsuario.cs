using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Usuario
{
    public interface IServicioUsuario
    {
        Task<DtoDatosSP> InsertarUsuario(EntityUsuario entitiUsuario);

        Task<DtoDatosSP> ActualizarUsuario(EntityUsuario entitiUsuario);

        Task<DtoDatosSP> EliminarUsuario(int idUsuario);

        Task<DtoUsuario> ObtenerDetalleUsuarioID(int idUsuario);

        Task<DtoUsuario> ObtenerDetalleUsuarioNombre(string nombre);

        Task<List<DtoUsuario>> ObtenerUsuarios();
        Task<DtoDatosSP> ActualizarContrasenhaTemporal(EntityUsuario entitiUsuario);

        Task<DtoDatosSP> ActualizarContrasenha(int idUsuario, string contrasena);

    }
}