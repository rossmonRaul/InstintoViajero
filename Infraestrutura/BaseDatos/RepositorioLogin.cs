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
    public class RepositorioLogin : IRepositorioLogin
    {

        private readonly IContextoBD contextoBD;

        public RepositorioLogin(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoLogin> IniciarSesionUsuario(string usuario, string contrasena)
        {
            try
            {

                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("ContrasenaTemporal", contrasena);
                data.Add("CoreoElectronico", usuario);
               

                //se inserta el producto normal sin los tipos de materiales
                string query = "SPIniciarSesionUsuario";
                var returnValue = await this.contextoBD.ObtenerDato<DtoLogin>(query, data);

                return returnValue;

            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
