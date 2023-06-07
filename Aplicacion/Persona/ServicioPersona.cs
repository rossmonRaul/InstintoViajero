using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.Persona;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.Persona
{
    public class ServicioPersona : IServicioPersona
    {
        private readonly IRepositorioPersona repositorioPersona;

        public ServicioPersona(IRepositorioPersona repositorioPersona)
        {
            this.repositorioPersona = repositorioPersona;
        }

        public async Task<DtoDatosSP> InsertarPersona(EntityPersona entityPersona)
        {
            return await this.repositorioPersona.InsertarPersona(entityPersona);
        }

        public async Task<DtoDatosSP> ActualizarPersona(EntityPersona entityPersona)
        {
            return await this.repositorioPersona.ActualizarPersona(entityPersona);
        }

        public async Task<DtoDatosSP> EliminarPersona(int idPersona)
        {
            return await this.repositorioPersona.EliminarPersona(idPersona);
        }

        public async Task<DtoPersona> ObtenerDetallePersona(int idPersona)
        {
            return await this.repositorioPersona.ObtenerDetallePersona(idPersona);
        }

        public async Task<List<DtoPersona>> ObtenerPersonas()
        {
            return await this.repositorioPersona.ObtenerPersonas();
        }
    }
}
