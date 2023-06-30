using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioTipoDeTelefono
    {
        Task<DtoDatosSP> InsertarTipoDeTelefono(EntityTipoDeTelefono entityTipoDeTelefono);

        Task<DtoDatosSP> ActualizarTipoDeTelefono(EntityTipoDeTelefono entityTipoDeTelefono);

        Task<DtoDatosSP> EliminarTipoDeTelefono(int idTipoDeTelefono);

        Task<DtoTipoDeTelefono> ObtenerDetalleTipoDeTelefono(int idTipoDeTelefono);

        Task<List<DtoTipoDeTelefono>> ObtenerTiposDeTelefono();
    }
}
