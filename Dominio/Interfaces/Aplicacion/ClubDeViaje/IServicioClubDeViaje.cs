using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.ClubDeViaje
{
    public interface IServicioClubDeViaje
    {
        Task<DtoDatosSP> InsertarClubDeViaje(EntityClubDeViaje entityClubDeViaje);

        Task<DtoDatosSP> ActualizarClubDeViaje(EntityClubDeViaje entityClubDeViaje);

        Task<DtoDatosSP> EliminarClubDeViaje(int idPaqueteDeViaje);

        Task<DtoClubDeViaje> ObtenerDetalleClubDeViajeID(int idPaqueteDeViaje);

        Task<List<DtoClubDeViaje>> ObtenerClubDeViaje();

        Task<List<EntityTipoCuenta>> ObtenerTiposDeCuentas();

        Task<List<EntityTipoTarjeta>> ObtenerTiposDeTarjetas();

        Task<List<EntityFrecuenciaDePago>> ObtenerFrecuenciasDePago();
    }
}
