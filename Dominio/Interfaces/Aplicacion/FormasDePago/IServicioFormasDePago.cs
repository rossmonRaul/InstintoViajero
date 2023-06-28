using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.FormasDePago
{
    public interface IServicioFormasDePago
    {
        Task<DtoDatosSP> ActualizarFormasDePago(EntityFormasDePago entitiFormasDePago);
        Task<DtoDatosSP> EliminarFormasDePago(int idFormasDePago);
        Task<DtoDatosSP> InsertarFormasDePago(EntityFormasDePago entitiFormasDePago);
        Task<DtoFormasDePago> ObtenerDetalleFormasDePagoID(int idFormasDePago);
        Task<DtoFormasDePago> ObtenerDetalleFormasDePagoNombre(string nombre);
        Task<List<DtoFormasDePago>> ObtenerFormasDePago();
        
    }
}
