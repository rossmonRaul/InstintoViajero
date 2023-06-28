using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.Plazo;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.Plazo
{
    public class ServicioPlazo: IServicioPlazo
    {
        private readonly IRepositorioPlazo repositorioPlazo;

        public ServicioPlazo(IRepositorioPlazo repositorioPlazo)
        {
            this.repositorioPlazo = repositorioPlazo;
        }

        public async Task<DtoDatosSP> InsertarPlazo(EntityPlazo entityPlazo)
        {
            return await this.repositorioPlazo.InsertarPlazo(entityPlazo);
        }

        public async Task<DtoDatosSP> ActualizarPlazo(EntityPlazo entityPlazo)
        {
            return await this.repositorioPlazo.ActualizarPlazo(entityPlazo);
        }

        public async Task<DtoDatosSP> EliminarPlazo(int idPlazo)
        {
            return await this.repositorioPlazo.EliminarPlazo(idPlazo);
        }

        public async Task<DtoPlazo> ObtenerDetallePlazo(int idPlazo)
        {
            return await this.repositorioPlazo.ObtenerDetallePlazo(idPlazo);
        }

        public async Task<List<DtoPlazo>> ObtenerPlazos()
        {
            return await this.repositorioPlazo.ObtenerPlazos();
        }
    }
}
