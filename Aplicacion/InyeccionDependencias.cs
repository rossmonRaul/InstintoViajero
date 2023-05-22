using Aplicacion.Sucursal;
using Aplicacion.Usuario;
using Dominio.Interfaces.Aplicacion.Surcusal;
using Dominio.Interfaces.Aplicacion.Usuario;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using Dominio.Interfaces.Aplicacion.Rol;
using Aplicacion.Rol;
using Aplicacion.TiposIdentificacion;
using Dominio.Interfaces.Aplicacion.TiposIdentificacion;
using Dominio.Interfaces.Aplicacion.Login;
using Aplicacion.Login;
using Dominio.Interfaces.Aplicacion.Reporte;
using Aplicacion.Reporte;

namespace Aplicacion
{
    public static class InyeccionDependencias
    {
        public static IServiceCollection AddAplicacion(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddScoped<IServicioSucursal, ServicioSucursal>();
            services.AddScoped<IServicioUsuario, ServicioUsuario>();
            services.AddScoped<IServicioRol, ServicioRol>();
            services.AddScoped<IServicioTiposIdentificacion, ServicioTiposIdentificacion>();
            services.AddScoped<IServicioLogin, ServicioLogin>();
            services.AddScoped<IServicioReporte, ServicioReporte>();


            return services;
        }
    }
}
