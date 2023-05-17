using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.DetalleProduccionDiaria;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.DetalleProduccionDiaria
{
    public class ServicioDetalleProduccionDiaria : IServicioDetalleProduccionDiaria
    {
        private readonly IRepositorioDetalleProduccionDiaria repositorioDetalleProduccionDiaria;

        public ServicioDetalleProduccionDiaria(IRepositorioDetalleProduccionDiaria repositorioDetalleProduccionDiaria)
        {
            this.repositorioDetalleProduccionDiaria = repositorioDetalleProduccionDiaria;
        }

        public async Task<DtoDatosSP> InsertarDetalleProduccionDiaria(List<EntitiDetalleProduccionDiaria> entitiDetalleProduccionDiaria)
        {
            return await this.repositorioDetalleProduccionDiaria.InsertarDetalleProduccionDiaria(entitiDetalleProduccionDiaria);
        }

        public async Task<DtoDatosSP> ActualizarDetalleProduccionDiaria(List<EntitiDetalleProduccionDiaria> entitiDetalleProduccionDiaria)
        {
            return await this.repositorioDetalleProduccionDiaria.ActualizarDetalleProduccionDiaria(entitiDetalleProduccionDiaria);
        }

        public async Task<List<DtoDetalleProduccionDiaria>> ObtenerDetalleProduccionDiaria(int idEncabezadoProduccionDiaria)
        {
            return await this.repositorioDetalleProduccionDiaria.ObtenerDetalleProduccionDiaria(idEncabezadoProduccionDiaria);
        }
    }
}
