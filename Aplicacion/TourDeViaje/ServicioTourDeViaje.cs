using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.TourDeViaje;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aplicacion.TourDeViaje
{
    public class ServicioTourDeViaje : IServicioTourDeViaje
    {
        private readonly IRepositorioTourDeViaje repositorioTourDeViaje;

        public ServicioTourDeViaje(IRepositorioTourDeViaje repositorioTourDeViaje)
        {
            this.repositorioTourDeViaje = repositorioTourDeViaje;
        }

        public async Task<DtoDatosSP> ActualizarTourDeViaje(EntityTourDeViaje entityTourDeViaje)
        {
            return await this.repositorioTourDeViaje.ActualizarTourDeViaje(entityTourDeViaje);
        }

        public async Task<DtoDatosSP> EliminarTourDeViaje(int idTourDeViaje)
        {
            return await this.repositorioTourDeViaje.EliminarTourDeViaje(idTourDeViaje);
        }

        public async Task<DtoDatosSP> InsertarTourDeViaje(EntityTourDeViaje entityTourDeViaje)
        {
            return await this.repositorioTourDeViaje.InsertarTourDeViaje(entityTourDeViaje);
        }

        public async Task<DtoTourDeViaje> ObtenerDetalleTourDeViajeID(int idTourDeViaje)
        {
            return await this.repositorioTourDeViaje.ObtenerDetalleTourDeViajeID(idTourDeViaje);
        }

        public async Task<List<DtoTourDeViaje>> ObtenerTourDeViaje()
        {
            return await this.repositorioTourDeViaje.ObtenerTourDeViaje();
        }
    }
}
