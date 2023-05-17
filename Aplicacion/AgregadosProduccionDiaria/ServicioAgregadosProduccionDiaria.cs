using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.AgregadosProduccionDiaria;
using Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.AgregadosProduccionDiaria
{
    public class ServicioAgregadosProduccionDiaria : IServicioAgregadosProduccionDiaria
    {

        private readonly IRepositorioAgregadosProduccionDiaria repositorioAgregadosProduccionDiaria;

        public ServicioAgregadosProduccionDiaria(IRepositorioAgregadosProduccionDiaria repositorioAgregadosProduccionDiaria)
        {
            this.repositorioAgregadosProduccionDiaria = repositorioAgregadosProduccionDiaria;
        }

        public async Task<DtoDatosSP> InsertarAgregados(List<EntitiAgregados> entitiAgregados)
        {
            return await this.repositorioAgregadosProduccionDiaria.InsertarAgregados(entitiAgregados);
        }

        public async Task<DtoDatosSP> EliminarAgregados(int idAgregadoProduccionDiaria)
        {
            return await this.repositorioAgregadosProduccionDiaria.EliminarAgregados(idAgregadoProduccionDiaria);
        }

        public async Task<List<DtoAgregados>> ObtenerAgregados(int idEncabezadoProduccionDiaria)
        {
            return await this.repositorioAgregadosProduccionDiaria.ObtenerAgregados(idEncabezadoProduccionDiaria);
        }
    }
}
