using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.PaquetesDeViajes;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aplicacion.PaquetesDeViajes
{
    public class ServicioPaquetesDeViajes : IServicioPaquetesDeViajes
    {
        private readonly IRepositorioPaquetesDeViajes repositorioPaquetesDeViajes;

        public ServicioPaquetesDeViajes(IRepositorioPaquetesDeViajes repositorioPaquetesDeViajes)
        {
            this.repositorioPaquetesDeViajes = repositorioPaquetesDeViajes;
        }

        public async Task<DtoDatosSP> ActualizarPaquetesDeViajes(EntityPaquetesDeViajes entityPaquetesDeViajes)
        {
            return await this.repositorioPaquetesDeViajes.ActualizarPaquetesDeViajes(entityPaquetesDeViajes);
        }

        public async Task<DtoDatosSP> EliminarPaquetesDeViajes(int idPaqueteDeViaje)
        {
            return await this.repositorioPaquetesDeViajes.EliminarPaquetesDeViajes(idPaqueteDeViaje);
        }

        public async Task<DtoDatosSP> InsertarPaquetesDeViajes(EntityPaquetesDeViajes entityPaquetesDeViajes)
        {
            return await this.repositorioPaquetesDeViajes.InsertarPaquetesDeViajes(entityPaquetesDeViajes);
        }

        public async Task<DtoPaquetesDeViajes> ObtenerDetallePaquetesDeViajesID(int idPaqueteDeViaje)
        {
            return await this.repositorioPaquetesDeViajes.ObtenerDetallePaquetesDeViajesID(idPaqueteDeViaje);
        }

        public async Task<List<DtoPaquetesDeViajes>> ObtenerPaquetesDeViajes()
        {
            return await this.repositorioPaquetesDeViajes.ObtenerPaquetesDeViajes();
        }
    }
}
