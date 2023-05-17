using Dominio.Dto;
using Dominio.Interfaces.Aplicacion.Horario;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.Horario
{
    public class ServicioHorario : IServicioHorario
    {

        private readonly IRepositorioHorario repositorioHorario;

        public ServicioHorario(IRepositorioHorario repositorioHorario)
        {
            this.repositorioHorario = repositorioHorario;
        }


        public async Task<List<DtoHorario>> ObtenerHorarios()
        {
            return await this.repositorioHorario.ObtenerHorarios();
        }
    }
}
