using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using Dominio.Interfaces.Aplicacion.Comision;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.Comision
{
    public class ServicioComision: IServicioComision
    {
        private readonly IRepositorioComision repositorioComision;

        public ServicioComision(IRepositorioComision repositorioComision)
        {
            this.repositorioComision = repositorioComision;
        }

        public async Task<DtoDatosSP> InsertarComision(EntityComision entityComision)
        {
            return await this.repositorioComision.InsertarComision(entityComision);
        }

        public async Task<DtoDatosSP> ActualizarComision(EntityComision entityComision)
        {
            return await this.repositorioComision.ActualizarComision(entityComision);
        }

        public async Task<DtoDatosSP> EliminarComision(int idComision)
        {
            return await this.repositorioComision.EliminarComision(idComision);
        }

        public async Task<DtoComisiones> ObtenerDetalleComision(int idComision)
        {
            return await this.repositorioComision.ObtenerDetalleComision(idComision);
        }

        public async Task<List<DtoComisiones>> ObtenerComisiones()
        {
            return await this.repositorioComision.ObtenerComisiones();
        }

    }
}
