using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioComision
    {
        Task<DtoDatosSP> InsertarComision(EntityComision entityComision);

        Task<DtoDatosSP> ActualizarComision(EntityComision entityComision);

        Task<DtoDatosSP> EliminarComision(int idComision);

        Task<DtoComisiones> ObtenerDetalleComision(int idComision);

        Task<List<DtoComisiones>> ObtenerComisiones();
    }
}
