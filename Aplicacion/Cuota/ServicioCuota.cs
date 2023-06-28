using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.Cuota;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.Cuota
{
    public class ServicioCuota : IServicioCuota
    {
        private readonly IRepositorioCuota repositorioCuota;

        public ServicioCuota(IRepositorioCuota repositorioCuota)
        {
            this.repositorioCuota = repositorioCuota;
        }

        public async Task<DtoDatosSP> InsertarCuota(EntityCuota entityCuota)
        {
            return await this.repositorioCuota.InsertarCuota(entityCuota);
        }

        public async Task<DtoDatosSP> ActualizarCuota(EntityCuota entityCuota)
        {
            return await this.repositorioCuota.ActualizarCuota(entityCuota);
        }

        public async Task<DtoDatosSP> EliminarCuota(int idCuota)
        {
            return await this.repositorioCuota.EliminarCuota(idCuota);
        }

        public async Task<DtoCuota> ObtenerDetalleCuota(int idCuota)
        {
            return await this.repositorioCuota.ObtenerDetalleCuota(idCuota);
        }

        public async Task<List<DtoCuota>> ObtenerCuotas()
        {
            return await this.repositorioCuota.ObtenerCuotas();
        }
    }
}
