using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Infraestrutura.BaseDatos;


namespace Infraestrutura.BaseDatos
{
    public class RepositorioControlDeCalidad : IRepositorioControlDeCalidad
    {
        private readonly IContextoBD contextoBD;

        public RepositorioControlDeCalidad(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarControlDeCalidad(EntitiControlDeCalidad entitiControlDeCalidad)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdProducto", entitiControlDeCalidad.idProducto);
                data.Add("IdPlanta", entitiControlDeCalidad.idPlanta);
                data.Add("Peso1", entitiControlDeCalidad.peso1);
                data.Add("Peso2", entitiControlDeCalidad.peso2);
                data.Add("Peso3", entitiControlDeCalidad.peso3);
                data.Add("Largo", entitiControlDeCalidad.largo);
                data.Add("Ancho", entitiControlDeCalidad.ancho);
                data.Add("Espesor", entitiControlDeCalidad.espesor);
                data.Add("Turno", entitiControlDeCalidad.turno);
                data.Add("Estatus", entitiControlDeCalidad.estatus);
                string query = "SPInsertarControldeCalidad";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarControlDeCalidad(EntitiControlDeCalidad entitiControlDeCalidad)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdCalidad", entitiControlDeCalidad.idCalidad);
                data.Add("IdPlanta", entitiControlDeCalidad.idPlanta);
                data.Add("IdProducto", entitiControlDeCalidad.idProducto);
                data.Add("Peso1", entitiControlDeCalidad.peso1);
                data.Add("Peso2", entitiControlDeCalidad.peso2);
                data.Add("Peso3", entitiControlDeCalidad.peso3);
                data.Add("Largo", entitiControlDeCalidad.largo);
                data.Add("Ancho", entitiControlDeCalidad.ancho);
                data.Add("Espesor", entitiControlDeCalidad.espesor);
                data.Add("Turno", entitiControlDeCalidad.turno);
                data.Add("Estatus", entitiControlDeCalidad.estatus);
                data.Add("Estado", entitiControlDeCalidad.estado);
                string query = "SPActualizarControldeCalidad";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoControlDeCalidad> ObtenerDetalleControlDeCalidadID(int idCalidad)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdCalidad", idCalidad);
                string query = "SPObtenerDetalleControldeCalidadID";

                return await this.contextoBD.ObtenerDato<DtoControlDeCalidad>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoControlDeCalidad>> ObtenerControlDeCalidadPorProducto(int idProducto)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdProducto", idProducto);
                string query = "SPObtenerControldeCalidadPorProducto";

                return await this.contextoBD.ObtenerListaDeDatos<DtoControlDeCalidad>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoControlDeCalidad>> ObtenerControlDeCalidad()
        {
            try
            {
                string query = "SPObtenerControldeCalidad";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoControlDeCalidad>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }


    }
}
