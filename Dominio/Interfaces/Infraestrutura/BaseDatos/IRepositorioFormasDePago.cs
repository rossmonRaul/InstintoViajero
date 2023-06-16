using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioFormasDePago
    {
        Task<DtoDatosSP> InsertarFormasDePago(EntityFormasDePago entityFormasDePago);

        Task<DtoDatosSP> ActualizarFormasDePago(EntityFormasDePago entityFormasDePago);

        Task<DtoDatosSP> EliminarFormasDePago(int idFormasDePago);

        Task<DtoFormasDePago> ObtenerDetalleFormasDePagoID(int idFormasDePago);

        Task<DtoFormasDePago> ObtenerDetalleFormasDePagoNombre(string nombre);

        Task<List<DtoFormasDePago>> ObtenerFormasDePago();        
    }
}
