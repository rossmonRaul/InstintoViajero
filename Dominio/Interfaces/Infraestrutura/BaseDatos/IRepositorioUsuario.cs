using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioUsuario
    {
        Task<DtoDatosSP> InsertarUsuario(EntitiUsuario entitiUsuario);

        Task<DtoDatosSP> ActualizarUsuario(EntitiUsuario entitiUsuario);

        Task<DtoDatosSP> EliminarUsuario(int idUsuario);

        Task<DtoUsuario> ObtenerDetalleUsuarioID(int idUsuario);

        Task<DtoUsuario> ObtenerDetalleUsuarioNombre(string nombre);

        Task<List<DtoUsuario>> ObtenerUsuarios();
        Task<DtoDatosSP> ActualizarContrasenhaTemporal(EntitiUsuario entitiUsuario);

        Task<DtoDatosSP> ActualizarContrasenha(int idUsuario, string contrasena);
    }
}