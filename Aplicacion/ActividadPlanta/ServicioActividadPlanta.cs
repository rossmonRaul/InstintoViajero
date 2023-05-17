using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using Dominio.Interfaces.Aplicacion.ActividadPlanta;
using Dominio.Dto;
using Dominio.Entiti;

namespace Aplicacion.ActividadPlanta
{
    public class ServicioActividadPlanta : IServicioActividadPlanta
    {
        private readonly IRepositorioActividadPlanta repositorioActividadPlanta;

        public ServicioActividadPlanta(IRepositorioActividadPlanta repositorioActividadPlanta)
        {
            this.repositorioActividadPlanta = repositorioActividadPlanta;
        }


        public async Task<DtoDatosSP> InsertarActividadPlanta(EntitiActividadPlanta entitiActividadPlanta)
        {
            return await this.repositorioActividadPlanta.InsertarActividadPlanta(entitiActividadPlanta);
        }

        public async Task<DtoDatosSP> ActualizarActividadPlanta(EntitiActividadPlanta entitiActividadPlanta)
        {
            return await this.repositorioActividadPlanta.ActualizarActividadPlanta(entitiActividadPlanta);
        }

        public async Task<DtoDatosSP> EliminarActividadPlanta(int idActividadPlanta)
        {
            return await this.repositorioActividadPlanta.EliminarActividadPlanta(idActividadPlanta);
        }

        public async Task<DtoActividadPlanta> ObtenerDetalleActividadPlantaID(int idActividadPlanta)
        {
            return await this.repositorioActividadPlanta.ObtenerDetalleActividadPlantaID(idActividadPlanta);
        }

        public async Task<List<DtoActividadPlanta>> ObtenerActividadesPlantas()
        {
            return await this.repositorioActividadPlanta.ObtenerActividadesPlantas();
        }
    }
}
