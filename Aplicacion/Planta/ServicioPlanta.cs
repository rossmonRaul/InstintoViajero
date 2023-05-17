using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.Planta;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.Planta
{
    public class ServicioPlanta : IServicioPlanta
    {
        private readonly IRepositorioPlanta repositorioPlanta;

        public ServicioPlanta(IRepositorioPlanta repositorioPlanta)
        {
            this.repositorioPlanta = repositorioPlanta;
        }

        public async Task<DtoDatosSP> InsertarPlanta(EntitiPlanta entitiPlanta)
        {
            return await this.repositorioPlanta.InsertarPlanta(entitiPlanta);
        }

        public async Task<DtoDatosSP> ActualizarPlanta(EntitiPlanta entitiPlanta)
        {
            return await this.repositorioPlanta.ActualizarPlanta(entitiPlanta);
        }

        public async Task<DtoDatosSP> EliminarPlanta(int idPlanta )
        {
            return await this.repositorioPlanta.EliminarPlanta(idPlanta);
        }

        public async Task<DtoPlanta> ObtenerDetallePlantaID(int idPlanta)
        {
            return await this.repositorioPlanta.ObtenerDetallePlantaID(idPlanta);
        }

        public async Task<DtoPlanta> ObtenerDetallePlantaNombre(string nombre)
        {
            return await this.repositorioPlanta.ObtenerDetallePlantaNombre(nombre);
        }

        public async Task<List<DtoPlanta>> ObtenerPlantas()
        {
            return await this.repositorioPlanta.ObtenerPlantas();
        }

    }
}
