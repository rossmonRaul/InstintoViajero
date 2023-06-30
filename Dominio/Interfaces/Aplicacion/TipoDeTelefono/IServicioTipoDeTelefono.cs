using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.TipoDeTelefono
{
    public interface IServicioTipoDeTelefono
    {
        Task<DtoDatosSP> InsertarTipoDeTelefono(EntityTipoDeTelefono entitiTipoDeTelefono);

        Task<DtoDatosSP> ActualizarTipoDeTelefono(EntityTipoDeTelefono entitiTipoDeTelefono);

        Task<DtoDatosSP> EliminarTipoDeTelefono(int idTipoDeTelefono);

        Task<DtoTipoDeTelefono> ObtenerDetalleTipoDeTelefono(int idTipoDeTelefono);

        Task<List<DtoTipoDeTelefono>> ObtenerTiposDeTelefono();

    }
}
