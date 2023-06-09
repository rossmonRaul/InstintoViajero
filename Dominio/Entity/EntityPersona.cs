﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entity
{
    public class EntityPersona
    {

        public int idPersona { get; set; }

        public int identificacion { get; set; }

        public int idTipoIdentificacion { get; set; }
        public int IdProvincia { get; set; }
        public int IdCanton { get; set; }
        public int IdDistrito { get; set; }

        public string nombre { get; set; }

        public string primerApellido { get; set; }

        public string segundoApellido { get; set; }

        public string Profesion { get; set; }
        public DateTime? fechaNacimiento { get; set; }

        public string direccion { get; set; }

        public bool estado { get; set; }

    }
}
