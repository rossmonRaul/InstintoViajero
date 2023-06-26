using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.EstadoPlan;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.EstadoPlan
{
    public class ServicioEstadoPlan : IServicioEstadoPlan
    {
        private readonly IRepositorioEstadoPlan repositorioEstadoPlan;

        public ServicioEstadoPlan(IRepositorioEstadoPlan repositorioEstadoPlan)
        {
            this.repositorioEstadoPlan = repositorioEstadoPlan;
        }

        public async Task<DtoDatosSP> InsertarEstadoPlan(EntityEstadoPlan entityEstadoPlan)
        {
            return await this.repositorioEstadoPlan.InsertarEstadoPlan(entityEstadoPlan);
        }

        public async Task<DtoDatosSP> ActualizarEstadoPlan(EntityEstadoPlan entityEstadoPlan)
        {
            return await this.repositorioEstadoPlan.ActualizarEstadoPlan(entityEstadoPlan);
        }

        public async Task<DtoDatosSP> EliminarEstadoPlan(int idEstadoPlan)
        {
            return await this.repositorioEstadoPlan.EliminarEstadoPlan(idEstadoPlan);
        }

        public async Task<DtoEstadoPlan> ObtenerDetalleEstadoPlan(int idEstadoPlan)
        {
            return await this.repositorioEstadoPlan.ObtenerDetalleEstadoPlan(idEstadoPlan);
        }

        public async Task<List<DtoEstadoPlan>> ObtenerEstadosPlan()
        {
            return await this.repositorioEstadoPlan.ObtenerEstadosPlan();
        }

    }
}
