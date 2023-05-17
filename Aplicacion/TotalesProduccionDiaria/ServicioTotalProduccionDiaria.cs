using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.TotalesProduccionDiaria;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.TotalesProduccionDiaria
{
    public class ServicioTotalProduccionDiaria : IServicioTotalProduccionDiaria
    {
        private readonly IRepositorioTotalProduccionDiaria repositorioTotalProduccionDiaria;

        public ServicioTotalProduccionDiaria(IRepositorioTotalProduccionDiaria repositorioTotalProduccionDiaria)
        {
            this.repositorioTotalProduccionDiaria = repositorioTotalProduccionDiaria;
        }

        public async Task<DtoDatosSP> InsertarTotalesProduccionDiaria(EntitiTotalesProduccionDiaria entitiTotalesProduccionDiaria)
        {
            return await this.repositorioTotalProduccionDiaria.InsertarTotalesProduccionDiaria(entitiTotalesProduccionDiaria);
        }

        public async Task<DtoDatosSP> ActualizarTotalesProduccionDiaria(EntitiTotalesProduccionDiaria entitiTotalesProduccionDiaria)
        {
            return await this.repositorioTotalProduccionDiaria.ActualizarTotalesProduccionDiaria(entitiTotalesProduccionDiaria);
        }

        public async Task<List<DtoTotalesProduccionDiaria>> ObtenerTotalProduccionDiaria(string fecha, int idPlanta, int idProducto)
        {
            return await this.repositorioTotalProduccionDiaria.ObtenerTotalProduccionDiaria(fecha,idPlanta, idProducto);
        }

    }
}
