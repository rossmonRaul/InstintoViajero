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
    public class RepositorioAgregadosProduccionDiaria : IRepositorioAgregadosProduccionDiaria
    {

        private readonly IContextoBD contextoBD;

        public RepositorioAgregadosProduccionDiaria(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarAgregados(List<EntitiAgregados> entitiAgregados)
        {
            try
            {
                string query = "SPInsertarAgregados";
                DtoDatosSP dtoDatosSP = new DtoDatosSP();
                foreach (EntitiAgregados agregado in entitiAgregados)
                {
                    Dictionary<string, object> data = new Dictionary<string, object>();
                    data.Add("IdEncabezadoProduccionDiaria", agregado.idEncabezadoProduccionDiaria);
                    data.Add("Descripcion", agregado.descripcion);
                    data.Add("TipoAgregado", agregado.tipoAgregado);
                    data.Add("Vueltas", agregado.vueltas);
                    data.Add("UsuarioIngreso", agregado.usuarioIngreso);


                    dtoDatosSP = await this.contextoBD.EjecutarSP(query, data);
                }
                return dtoDatosSP;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarAgregados(int idAgregadoProduccionDiaria)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdAgregadoProduccionDiaria", idAgregadoProduccionDiaria);
                string query = "SPEliminarAgregados";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoAgregados>> ObtenerAgregados(int idEncabezadoProduccionDiaria)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEncabezadoProduccionDiaria", idEncabezadoProduccionDiaria);
                string query = "SPObtenerAgregados";

                return await this.contextoBD.ObtenerListaDeDatos<DtoAgregados>(query, data);
            }
            catch (Exception)
            {
                throw;
            }

        }
    }
}
