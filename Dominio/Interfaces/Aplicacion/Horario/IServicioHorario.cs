using Dominio.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Horario
{
    public interface IServicioHorario
    {

        Task<List<DtoHorario>> ObtenerHorarios();
    }
}
