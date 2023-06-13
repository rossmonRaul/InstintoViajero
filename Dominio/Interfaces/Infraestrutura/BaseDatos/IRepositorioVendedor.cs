using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioVendedor
    {
        Task<DtoDatosSP> InsertarVendedor(EntityVendedor entityVendedor);

        Task<DtoDatosSP> ActualizarVendedor(EntityVendedor entityVendedor);

        Task<DtoDatosSP> EliminarVendedor(int idVendedor);

        Task<DtoVendedor> ObtenerDetalleVendedor(int idVendedor);

        Task<List<DtoVendedor>> ObtenerVendedores();
    }
}
