using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.Usuario;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.Usuario
{
    public class ServicioUsuario : IServicioUsuario
    {
        private readonly IRepositorioUsuario repositorioUsuario;

        public ServicioUsuario(IRepositorioUsuario repositorioUsuario)
        {
            this.repositorioUsuario = repositorioUsuario;
        }

        public async Task<DtoDatosSP> InsertarUsuario(EntitiUsuario entitiUsuario)
        {
            return await this.repositorioUsuario.InsertarUsuario(entitiUsuario);
        }

        public async Task<DtoDatosSP> ActualizarUsuario(EntitiUsuario entitiUsuario)
        {
            return await this.repositorioUsuario.ActualizarUsuario(entitiUsuario);
        }

        public async Task<DtoDatosSP> EliminarUsuario(int idUsuario)
        {
            return await this.repositorioUsuario.EliminarUsuario(idUsuario);
        }

        public async Task<DtoUsuario> ObtenerDetalleUsuarioID(int idUsuario)
        {
            return await this.repositorioUsuario.ObtenerDetalleUsuarioID(idUsuario);
        }

        public async Task<DtoUsuario> ObtenerDetalleUsuarioNombre(string nombre)
        {
            return await this.repositorioUsuario.ObtenerDetalleUsuarioNombre(nombre);
        }

        public async Task<List<DtoUsuario>> ObtenerUsuarios()
        {
            return await this.repositorioUsuario.ObtenerUsuarios();
        }

        public async Task<DtoDatosSP> ActualizarContrasenhaTemporal(EntitiUsuario entitiUsuario)
        {
            return await this.repositorioUsuario.ActualizarContrasenhaTemporal(entitiUsuario);
        }

        public async Task<DtoDatosSP> ActualizarContrasenha(int idUsuario, string contrasena)
        {
            return await this.repositorioUsuario.ActualizarContrasenha(idUsuario, contrasena);
        }
    }
}
