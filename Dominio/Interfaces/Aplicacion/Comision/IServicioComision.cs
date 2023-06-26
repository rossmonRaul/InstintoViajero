using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Comision
{
    public interface  IServicioComision
    {
        Task<DtoDatosSP> InsertarComision(EntityComision entitiComision);

        Task<DtoDatosSP> ActualizarComision(EntityComision entitiComision);

        Task<DtoDatosSP> EliminarComision(int idComision);

        Task<DtoComisiones> ObtenerDetalleComision(int idComision);

        Task<List<DtoComisiones>> ObtenerComisiones();
    }
}
