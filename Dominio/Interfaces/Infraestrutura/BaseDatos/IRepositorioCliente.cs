using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioCliente
    {
        Task<DtoDatosSP> InsertarCliente(EntityCliente entityCliente);

        Task<DtoDatosSP> ActualizarCliente(EntityCliente entityCliente);

        Task<DtoDatosSP> EliminarCliente(int idCliente);

        Task<DtoCliente> ObtenerDetalleCliente(int idCliente);

        Task<List<DtoCliente>> ObtenerClientes();
    }
}
