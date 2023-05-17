using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioPlanta
    {
        Task<DtoDatosSP> InsertarPlanta(EntitiPlanta entitiPlanta);

        Task<DtoDatosSP> ActualizarPlanta(EntitiPlanta entitiPlanta);

        Task<DtoDatosSP> EliminarPlanta(int idPlanta);

        Task<DtoPlanta> ObtenerDetallePlantaID(int idPlanta);

        Task<DtoPlanta> ObtenerDetallePlantaNombre(string nombre);

        Task<List<DtoPlanta>> ObtenerPlantas();

    }
}
