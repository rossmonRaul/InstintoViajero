﻿using Dominio.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.TiposIdentificacion
{
    public interface IServicioTiposIdentificacion
    {
        Task<List<DtoTiposIdentificacion>> ObtenerTiposIdentificacion();

    }
}
