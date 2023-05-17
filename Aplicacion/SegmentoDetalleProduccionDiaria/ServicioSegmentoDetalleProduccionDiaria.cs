using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.SegmentoDetalleProduccionDiaria;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Aplicacion.SegmentoDetalleProduccionDiaria
{
    public class ServicioSegmentoDetalleProduccionDiaria : IServicioSegmentoDetalleProduccionDiaria
    {
        private readonly IRepositorioSegmentoDetalleProduccion repositorioSegmentoDetalle;

        public ServicioSegmentoDetalleProduccionDiaria(IRepositorioSegmentoDetalleProduccion repositorioSegmentoDetalle)
        {
            this.repositorioSegmentoDetalle = repositorioSegmentoDetalle;
        }
        public async Task<DtoDatosSP> InsertarSegmentoDetalleProduccionDiaria(EntitiSegmentoDetalleProduccion entitiSegmentoDetalle)
        {
            return await this.repositorioSegmentoDetalle.InsertarSegmentoDetalleProduccionDiaria(entitiSegmentoDetalle);
        }
        public async Task<DtoDatosSP> ActualizarSegmentoDetalleProduccionDiaria(EntitiSegmentoDetalleProduccion entitiSegmentoDetalle)
        {
            return await this.repositorioSegmentoDetalle.ActualizarSegmentoDetalleProduccionDiaria(entitiSegmentoDetalle);
        }
        public async Task<List<DtoSegmentoDetalleProduccion>> ObtenerSegementoDetalleProduccionDiaria(int idEncabezadoProduccion)
        {
            return await this.repositorioSegmentoDetalle.ObtenerSegementoDetalleProduccionDiaria(idEncabezadoProduccion);
        }
    }
}
