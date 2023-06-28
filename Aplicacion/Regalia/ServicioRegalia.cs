using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.Regalia;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.Regalia
{
    public class ServicioRegalia : IServicioRegalia
    {
        private readonly IRepositorioRegalia repositorioRegalia;

        public ServicioRegalia(IRepositorioRegalia repositorioRegalia)
        {
            this.repositorioRegalia = repositorioRegalia;
        }

        public async Task<DtoDatosSP> InsertarRegalia(EntityRegalia entityRegalia)
        {
            return await this.repositorioRegalia.InsertarRegalia(entityRegalia);
        }

        public async Task<DtoDatosSP> ActualizarRegalia(EntityRegalia entityRegalia)
        {
            return await this.repositorioRegalia.ActualizarRegalia(entityRegalia);
        }

        public async Task<DtoDatosSP> EliminarRegalia(int idRegalia)
        {
            return await this.repositorioRegalia.EliminarRegalia(idRegalia);
        }

        public async Task<DtoRegalia> ObtenerDetalleRegalia(int idRegalia)
        {
            return await this.repositorioRegalia.ObtenerDetalleRegalia(idRegalia);
        }

        public async Task<List<DtoRegalia>> ObtenerRegalias()
        {
            return await this.repositorioRegalia.ObtenerRegalias();
        }
    }
}
