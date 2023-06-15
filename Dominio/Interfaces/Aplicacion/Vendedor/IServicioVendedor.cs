using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Vendedor
{
    public interface IServicioVendedor
    {
        Task<DtoDatosSP> InsertarVendedor(EntityVendedor entitiVendedor);

        Task<DtoDatosSP> ActualizarVendedor(EntityVendedor entitiVendedor);

        Task<DtoDatosSP> EliminarVendedor(int idVendedor);

        Task<DtoVendedor> ObtenerDetalleVendedor(int idVendedor);

        Task<List<DtoVendedor>> ObtenerVendedores();
    }
}
