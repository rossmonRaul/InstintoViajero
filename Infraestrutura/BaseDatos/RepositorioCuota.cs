using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioCuota : IRepositorioCuota
    {
        private readonly IContextoBD contextoBD;

        public RepositorioCuota(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarCuota(EntityCuota entityCuota)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("Codigo", entityCuota.codigo);
                data.Add("CuotaSemanal ", entityCuota.cuotaSemanal);
                data.Add("Monto ", entityCuota.monto);
                data.Add("Estado", entityCuota.estado);
                data.Add("Usuario", "1");
                string query = "SPInsertarCuota";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarCuota(EntityCuota entityCuota)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdCuota", entityCuota.idCuota);
                data.Add("Codigo", entityCuota.codigo);
                data.Add("CuotaSemanal ", entityCuota.cuotaSemanal);
                data.Add("Monto ", entityCuota.monto);
                data.Add("Estado", entityCuota.estado);
                data.Add("Usuario", "1");
                string query = "SPActualizarCuota";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarCuota(int idCuota)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdCuota", idCuota);
                data.Add("Usuario", "1"); //cambiar logica para guardar usuario
                string query = "SPEliminarCuota";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoCuota> ObtenerDetalleCuota(int idCuota)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdCuota", idCuota);
                string query = "SPObtenerDetalleCuota";

                return await this.contextoBD.ObtenerDato<DtoCuota>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoCuota>> ObtenerCuotas()
        {
            try
            {
                string query = "SPObtenerCuotas";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoCuota>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
