using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.ControlDeCalidad;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.ControlDeCalidad
{
    public class ServicioControlDeCalidad : IServicioControlDeCalidad
    {
        private readonly IRepositorioControlDeCalidad repositorioControlDeCalidad;

        public ServicioControlDeCalidad(IRepositorioControlDeCalidad repositorioControlDeCalidad)
        {
            this.repositorioControlDeCalidad = repositorioControlDeCalidad;
        }

        public async Task<DtoDatosSP> InsertarControlDeCalidad(EntitiControlDeCalidad entitiControlDeCalidad)
        {
            return await this.repositorioControlDeCalidad.InsertarControlDeCalidad(entitiControlDeCalidad);
        }

        public async Task<DtoDatosSP> ActualizarControlDeCalidad(EntitiControlDeCalidad entitiControlDeCalidad)
        {
            return await this.repositorioControlDeCalidad.ActualizarControlDeCalidad(entitiControlDeCalidad);
        }

        public async Task<DtoControlDeCalidad> ObtenerDetalleControlDeCalidadID(int idCalidad)
        {
            return await this.repositorioControlDeCalidad.ObtenerDetalleControlDeCalidadID(idCalidad);
        }

        public async Task<List<DtoControlDeCalidad>>ObtenerControlDeCalidadPorProducto(int idProducto)
        {
            return await this.repositorioControlDeCalidad.ObtenerControlDeCalidadPorProducto(idProducto);
        }

        public async Task<List<DtoControlDeCalidad>> ObtenerControlDeCalidad()
        {
            return await this.repositorioControlDeCalidad.ObtenerControlDeCalidad();
        }
    }
}
