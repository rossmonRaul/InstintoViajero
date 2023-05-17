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
    public class RepositorioDetalleProduccionDiaria : IRepositorioDetalleProduccionDiaria
    {

        private readonly IContextoBD contextoBD;

        public RepositorioDetalleProduccionDiaria(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarDetalleProduccionDiaria(List<EntitiDetalleProduccionDiaria> entitiDetalleProduccionDiaria)
        {
            try
            {
                DtoDatosSP dtoDatosSP = new DtoDatosSP();
                foreach (EntitiDetalleProduccionDiaria detalle in entitiDetalleProduccionDiaria)
                {
                    Dictionary<string, object> data = new Dictionary<string, object>();
                    data.Add("IdEncabezadoProduccionDiaria", detalle.idEncabezadoProduccionDiaria);
                    data.Add("IdHorario", detalle.idHorario);
                    data.Add("Placas", detalle.placas);
                    data.Add("Observacion", detalle.observacion);

                    string query = "SPInsertarDetalleProduccionDiaria";

                    dtoDatosSP = await this.contextoBD.EjecutarSP(query, data);
                }
                return dtoDatosSP;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarDetalleProduccionDiaria(List<EntitiDetalleProduccionDiaria> entitiDetalleProduccionDiaria)
        {
            try
            {
                DtoDatosSP dtoDatosSP = new DtoDatosSP();
                foreach (EntitiDetalleProduccionDiaria detalle in entitiDetalleProduccionDiaria)
                {
                    Dictionary<string, object> data = new Dictionary<string, object>();
                    data.Add("IdEncabezadoProduccionDiaria", detalle.idEncabezadoProduccionDiaria);
                    data.Add("IdHorario", detalle.idHorario);
                    data.Add("Placas", detalle.placas);
                    data.Add("Observacion", detalle.observacion);

                    string query = "SPActualizarDetalleProduccionDiaria";

                    dtoDatosSP = await this.contextoBD.EjecutarSP(query, data);
                }
                return dtoDatosSP;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoDetalleProduccionDiaria>> ObtenerDetalleProduccionDiaria(int idEncabezadoProduccionDiaria)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEncabezadoProduccionDiaria", idEncabezadoProduccionDiaria);
                string query = "SPObtenerDetalleProduccionDiaria";

                return await this.contextoBD.ObtenerListaDeDatos<DtoDetalleProduccionDiaria>(query, data);
            }
            catch (Exception)
            {
                throw;
            }

        }
    }
}
