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
        Task<DtoDatosSP> InsertarVendedor(EntityVendedor entitiVendedor);

        Task<DtoDatosSP> ActualizarVendedor(EntityVendedor entitiVendedor);

        Task<DtoDatosSP> EliminarVendedor(int idVendedor);

        Task<DtoVendedor> ObtenerDetalleVendedor(int idVendedor);

        Task<List<DtoVendedor>> ObtenerVendedores();
    }
}
