using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.TipoDeTelefono;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.TipoDeTelefono
{
    public class ServicioTipoDeTelefono : IServicioTipoDeTelefono
    {
        private readonly IRepositorioTipoDeTelefono repositorioTipoDeTelefono;

        public ServicioTipoDeTelefono(IRepositorioTipoDeTelefono repositorioTipoDeTelefono)
        {
            this.repositorioTipoDeTelefono = repositorioTipoDeTelefono;
        }

        public async Task<DtoDatosSP> InsertarTipoDeTelefono(EntityTipoDeTelefono entityTipoDeTelefono)
        {
            return await this.repositorioTipoDeTelefono.InsertarTipoDeTelefono(entityTipoDeTelefono);
        }

        public async Task<DtoDatosSP> ActualizarTipoDeTelefono(EntityTipoDeTelefono entityTipoDeTelefono)
        {
            return await this.repositorioTipoDeTelefono.ActualizarTipoDeTelefono(entityTipoDeTelefono);
        }

        public async Task<DtoDatosSP> EliminarTipoDeTelefono(int idTipoDeTelefono)
        {
            return await this.repositorioTipoDeTelefono.EliminarTipoDeTelefono(idTipoDeTelefono);
        }

        public async Task<DtoTipoDeTelefono> ObtenerDetalleTipoDeTelefono(int idTipoDeTelefono)
        {
            return await this.repositorioTipoDeTelefono.ObtenerDetalleTipoDeTelefono(idTipoDeTelefono);
        }

        public async Task<List<DtoTipoDeTelefono>> ObtenerTiposDeTelefono()
        {
            return await this.repositorioTipoDeTelefono.ObtenerTiposDeTelefono();
        }

    }
}
