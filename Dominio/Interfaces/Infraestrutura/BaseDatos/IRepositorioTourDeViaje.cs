using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioTourDeViaje
    {
        Task<DtoDatosSP> InsertarTourDeViaje(EntityTourDeViaje entityTourDeViaje);

        Task<DtoDatosSP> ActualizarTourDeViaje(EntityTourDeViaje entityTourDeViaje);

        Task<DtoDatosSP> EliminarTourDeViaje(int idTourDeViaje);

        Task<DtoTourDeViaje> ObtenerDetalleTourDeViajeID(int idTourDeViaje);        

        Task<List<DtoTourDeViaje>> ObtenerTourDeViaje();        
    }
}
