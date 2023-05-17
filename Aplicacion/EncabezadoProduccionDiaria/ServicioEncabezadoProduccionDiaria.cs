using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.EncabezadoProduccionDiaria;
using Dominio.Interfaces.Aplicacion.Usuario;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.EncabezadoProduccionDiaria
{
    public class ServicioEncabezadoProduccionDiaria : IServicioEncabezadoProduccionDiaria
    {
        private readonly IRepositorioEncabezadoProduccionDiaria repositorioEncabezadoProduccion;

        public ServicioEncabezadoProduccionDiaria(IRepositorioEncabezadoProduccionDiaria repositorioEncabezadoProduccion)
        {
            this.repositorioEncabezadoProduccion = repositorioEncabezadoProduccion;
        }

        public async Task<DtoDatosSP> InsertarEncabezadoProduccionDiaria(EntitiEncabezadoProduccionDiaria entitiEncabezadoProduccion)
        {
            return await this.repositorioEncabezadoProduccion.InsertarEncabezadoProduccionDiaria(entitiEncabezadoProduccion);
        }

        public async Task<DtoDatosSP> ActualizarEncabezadoProduccionDiaria(EntitiEncabezadoProduccionDiaria entitiEncabezadoProduccion)
        {
            return await this.repositorioEncabezadoProduccion.ActualizarEncabezadoProduccionDiaria(entitiEncabezadoProduccion);
        }

        public async Task<DtoEncabezadoProduccionDiaria> ObtenerEncabezadoProduccionDiaria(int idPlanta, DateTime? Fecha, int idProducto)
        {
            return await this.repositorioEncabezadoProduccion.ObtenerEncabezadoProduccionDiaria( idPlanta,  Fecha, idProducto);
        }

        public async Task<List<DtoEncabezadoProduccionDiaria>> ObtenerProducciones(int idPlanta, DateTime? Fecha)
        {
            return await this.repositorioEncabezadoProduccion.ObtenerProducciones(idPlanta, Fecha);
        }

        public async Task<DtoEncabezadoProduccionDiaria> ObtenerProduccionDiariaPorID(int idEncabezadoProduccionDiaria)
        {
            return await this.repositorioEncabezadoProduccion.ObtenerProduccionDiariaPorID(idEncabezadoProduccionDiaria);
        }

    }
}
