using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infraestrutura.BaseDatos
{
    public interface IRepositorioAgregadosProduccionDiaria
    {
        Task<DtoDatosSP> InsertarAgregados(List<EntitiAgregados> entitiAgregados);

        Task<DtoDatosSP> EliminarAgregados(int idAgregadoProduccionDiaria);

        Task<List<DtoAgregados>> ObtenerAgregados(int idEncabezadoProduccionDiaria);
    }
}
