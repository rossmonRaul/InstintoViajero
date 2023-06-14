using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Cliente
{
    public interface IServicioCliente
    {
        Task<DtoDatosSP> InsertarCliente(EntityCliente entitiCliente);

        Task<DtoDatosSP> ActualizarCliente(EntityCliente entitiCliente);

        Task<DtoDatosSP> EliminarCliente(int idCliente);

        Task<DtoCliente> ObtenerDetalleCliente(int idCliente);

        Task<List<DtoCliente>> ObtenerClientes();

    }
}
