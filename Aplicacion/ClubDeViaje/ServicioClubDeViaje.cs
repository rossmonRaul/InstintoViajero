using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.ClubDeViaje;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aplicacion.ClubDeViaje
{
    public class ServicioClubDeViaje : IServicioClubDeViaje
    {
        private readonly IRepositorioClubDeViaje repositorioClubDeViaje;

        public ServicioClubDeViaje(IRepositorioClubDeViaje repositorioClubDeViaje)
        {
            this.repositorioClubDeViaje = repositorioClubDeViaje;
        }

        public async Task<DtoDatosSP> ActualizarClubDeViaje(EntityClubDeViaje entityClubDeViaje)
        {
            return await this.repositorioClubDeViaje.ActualizarClubDeViaje(entityClubDeViaje);
        }

        public async Task<DtoDatosSP> EliminarClubDeViaje(int idClubDeViaje)
        {
            return await this.repositorioClubDeViaje.EliminarClubDeViaje(idClubDeViaje);
        }

        public async Task<DtoDatosSP> InsertarClubDeViaje(EntityClubDeViaje entityClubDeViaje)
        {
            return await this.repositorioClubDeViaje.InsertarClubDeViaje(entityClubDeViaje);
        }

        public async Task<DtoClubDeViaje> ObtenerDetalleClubDeViajeID(int idClubDeViaje)
        {
            return await this.repositorioClubDeViaje.ObtenerDetalleClubDeViajeID(idClubDeViaje);
        }

        public async Task<List<DtoClubDeViaje>> ObtenerClubDeViaje()
        {
            return await this.repositorioClubDeViaje.ObtenerClubDeViaje();
        }

        public async Task<List<EntityTipoCuenta>> ObtenerTiposDeCuentas()
        {
            return await this.repositorioClubDeViaje.ObtenerTiposDeCuentas();
        }

        public async Task<List<EntityTipoTarjeta>> ObtenerTiposDeTarjetas()
        {
            return await this.repositorioClubDeViaje.ObtenerTiposDeTarjetas();
        }

        public async Task<List<EntityFrecuenciaDePago>> ObtenerFrecuenciasDePago()
        {
            return await this.repositorioClubDeViaje.ObtenerFrecuenciasDePago();
        }
    }
}
