﻿using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioPaquetesDeViajes
    {
        Task<DtoDatosSP> InsertarPaquetesDeViajes(EntityPaquetesDeViajes entityPaquetesDeViajes);

        Task<DtoDatosSP> ActualizarPaquetesDeViajes(EntityPaquetesDeViajes entityPaquetesDeViajes);

        Task<DtoDatosSP> EliminarPaquetesDeViajes(int idPaqueteDeViaje);

        Task<DtoPaquetesDeViajes> ObtenerDetallePaquetesDeViajesID(int idPaqueteDeViaje);        

        Task<List<DtoPaquetesDeViajes>> ObtenerPaquetesDeViajes();        
    }
}
