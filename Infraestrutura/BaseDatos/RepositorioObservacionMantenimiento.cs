using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioObservacionMantenimiento : IRepositorioObservacionMantenimiento
    {
        private readonly IContextoBD contextoBD;

        public RepositorioObservacionMantenimiento(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarObservacionMantenimiento(List<EntitiObservacionMantenimiento> entitiObservacionMantenimiento)
        {
            try
            {
                string query = "SPInsertarObservaciondeMantenimiento";
                DtoDatosSP dtoDatosSP = new DtoDatosSP();
                foreach (EntitiObservacionMantenimiento observacion in entitiObservacionMantenimiento)
                {
                    Dictionary<string, object> data = new Dictionary<string, object>();
                    data.Add("IdEncabezado_ProduccionDiaria", observacion.idEncabezadoProduccionDiaria);
                    data.Add("Descripcion", observacion.descripcion);
                    dtoDatosSP = await this.contextoBD.EjecutarSP(query, data);
                }
                return dtoDatosSP;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarObservacionMantenimiento(List<EntitiObservacionMantenimiento> entitiObservacionMantenimiento)
        {

            try
            {
                string query = "SPActualizarObservaciondeMantenimiento";
                DtoDatosSP dtoDatosSP = new DtoDatosSP();
                foreach (EntitiObservacionMantenimiento observacion in entitiObservacionMantenimiento)
                {
                    Dictionary<string, object> data = new Dictionary<string, object>();
                    data.Add("IdObservacionesMantenimiento", observacion.idObservacionesMantenimiento);
                    data.Add("Descripcion", observacion.descripcion);
                    dtoDatosSP = await this.contextoBD.EjecutarSP(query, data);
                }
                return dtoDatosSP;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarObservacionMantenimiento(int idObservacionesMantenimiento)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdObservacionesMantenimiento", idObservacionesMantenimiento);
                string query = "SPEliminarObservaciondeMantenimiento";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<List<DtoObservacionMantenimiento>> ObtenerObservacionMantenimientoPorEncabezado(int idEncabezadoProduccionDiaria)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEncabezado_ProduccionDiaria", idEncabezadoProduccionDiaria);
                string query = "SPObtenerObservacionesMantenimientoPorEncabezado";

                return await this.contextoBD.ObtenerListaDeDatos<DtoObservacionMantenimiento>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }



        public async Task<List<DtoObservacionMantenimiento>> ObtenerObservacionesMantenimiento()
        {
            try
            {
                string query = "SPObtenerObservacionesMantenimiento";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoObservacionMantenimiento>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoObservacionMantenimiento>> ObtenerDetalleObservacionMantenimiento(int idObservacionesMantenimiento)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdObservacionesMantenimiento", idObservacionesMantenimiento);
                string query = "SPObtenerDetalleObservacionMantenimiento";

                return await this.contextoBD.ObtenerListaDeDatos<DtoObservacionMantenimiento>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
