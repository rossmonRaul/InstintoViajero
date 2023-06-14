using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.Cliente;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.Cliente
{
    public class ServicioCliente : IServicioCliente
    {
        private readonly IRepositorioCliente repositorioCliente;

        public ServicioCliente(IRepositorioCliente repositorioCliente)
        {
            this.repositorioCliente = repositorioCliente;
        }

        public async Task<DtoDatosSP> InsertarCliente(EntityCliente entityCliente)
        {
            return await this.repositorioCliente.InsertarCliente(entityCliente);
        }

        public async Task<DtoDatosSP> ActualizarCliente(EntityCliente entityCliente)
        {
            return await this.repositorioCliente.ActualizarCliente(entityCliente);
        }

        public async Task<DtoDatosSP> EliminarCliente(int idCliente)
        {
            return await this.repositorioCliente.EliminarCliente(idCliente);
        }

        public async Task<DtoCliente> ObtenerDetalleCliente(int idCliente)
        {
            return await this.repositorioCliente.ObtenerDetalleCliente(idCliente);
        }

        public async Task<List<DtoCliente>> ObtenerClientes()
        {
            return await this.repositorioCliente.ObtenerClientes();
        }
    }
}
