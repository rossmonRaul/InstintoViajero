using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.ObservacionMantenimiento;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.ObservacionMantenimiento
{
    public class ServicioObservacionMantenimiento : IServicioObservacionMantenimiento
    {

        private readonly IRepositorioObservacionMantenimiento repositorioObservacionMantenimiento;

        public ServicioObservacionMantenimiento(IRepositorioObservacionMantenimiento repositorioObservacionMantenimiento)
        {
            this.repositorioObservacionMantenimiento = repositorioObservacionMantenimiento;
        }

        public async Task<DtoDatosSP> InsertarObservacionMantenimiento(List<EntitiObservacionMantenimiento> entitiObservacionMantenimiento)
        {
            return await this.repositorioObservacionMantenimiento.InsertarObservacionMantenimiento(entitiObservacionMantenimiento);
        }

        public async Task<DtoDatosSP> ActualizarObservacionMantenimiento(List<EntitiObservacionMantenimiento> entitiObservacionMantenimiento)
        {
            return await this.repositorioObservacionMantenimiento.ActualizarObservacionMantenimiento(entitiObservacionMantenimiento);
        }

        public async Task<DtoDatosSP> EliminarObservacionMantenimiento(int idObservacionesMantenimiento)
        {
            return await this.repositorioObservacionMantenimiento.EliminarObservacionMantenimiento(idObservacionesMantenimiento);
        }

        public async Task<List<DtoObservacionMantenimiento>> ObtenerObservacionMantenimientoPorEncabezado(int idEncabezadoProduccionDiaria)
        {
            return await this.repositorioObservacionMantenimiento.ObtenerObservacionMantenimientoPorEncabezado(idEncabezadoProduccionDiaria);
        }


        public async Task<List<DtoObservacionMantenimiento>> ObtenerObservacionesMantenimiento()
        {
            return await this.repositorioObservacionMantenimiento.ObtenerObservacionesMantenimiento();
        }

        public async Task<List<DtoObservacionMantenimiento>> ObtenerDetalleObservacionMantenimiento(int idObservacionesMantenimiento)
        {
            return await this.repositorioObservacionMantenimiento.ObtenerDetalleObservacionMantenimiento(idObservacionesMantenimiento);
        }
    }
}
