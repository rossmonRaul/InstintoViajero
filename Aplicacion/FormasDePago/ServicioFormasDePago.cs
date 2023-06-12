using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.FormasDePago;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.FormasDePago
{
    public class ServicioFormasDePago : IServicioFormasDePago
    {
        private readonly IRepositorioFormasDePago repositorioFormasDePago;

        public ServicioFormasDePago(IRepositorioFormasDePago repositorioFormasDePago)
        {
            this.repositorioFormasDePago = repositorioFormasDePago;
        }
        public async Task<DtoDatosSP> ActualizarFormasDePago(EntityFormasDePago entitiFormasDePago)
        {
            return await this.repositorioFormasDePago.ActualizarFormasDePago(entitiFormasDePago);
        }

        public async Task<DtoDatosSP> EliminarFormasDePago(int idFormasDePago)
        {
            return await this.repositorioFormasDePago.EliminarFormasDePago(idFormasDePago);
        }

        public async Task<DtoDatosSP> InsertarFormasDePago(EntityFormasDePago entitiFormasDePago)
        {
            return await this.repositorioFormasDePago.InsertarFormasDePago(entitiFormasDePago);
        }

        public async Task<DtoFormasDePago> ObtenerDetalleFormasDePagoID(int idFormasDePago)
        {
            return await this.repositorioFormasDePago.ObtenerDetalleFormasDePagoID(idFormasDePago);       }

        public async Task<DtoFormasDePago> ObtenerDetalleFormasDePagoNombre(string nombre)
        {
            return await this.repositorioFormasDePago.ObtenerDetalleFormasDePagoNombre(nombre);
        }

        public async Task<List<DtoFormasDePago>> ObtenerFormasDePago()
        {
            return await this.repositorioFormasDePago.ObtenerFormasDePago();
        }

    }
}
