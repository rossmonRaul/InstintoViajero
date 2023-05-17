using Dominio.Dto;
using Dominio.Interfaces.Aplicacion.GrupoProducto;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.GrupoProducto
{
    public class ServicioGrupoProducto : IServicioGrupoProducto
    {
        private readonly IRepositorioGrupoProducto repositorioGrupoProducto;

        public ServicioGrupoProducto(IRepositorioGrupoProducto repositorioGrupoProducto)
        {
            this.repositorioGrupoProducto = repositorioGrupoProducto;
        }


        public async Task<List<DtoGrupoProducto>> ObtenerGrupoProductos()
        {
            return await this.repositorioGrupoProducto.ObtenerGrupoProductos();
        }
    }
}
