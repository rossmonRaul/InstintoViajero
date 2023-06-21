using Dominio.Interfaces.Infraestrutura.BaseDatos;
using Infraestrutura.BaseDatos;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Infraestrutura
{
    public static class InyeccionDependencias
    {
        public static IServiceCollection AddInfrastructura(this IServiceCollection services, IConfiguration configuration)
        {
            //contexto BD
            services.AddScoped<IContextoBD, ContextoBD>();

            //repositorios de cada CRUD
            services.AddScoped<IRepositorioSucursal, RepositorioSucursal>();
            services.AddScoped<IRepositorioPersona, RepositorioPersona>();
            services.AddScoped<IRepositorioVendedor, RepositorioVendedor>();
            services.AddScoped<IRepositorioRol, RepositorioRol>();
            services.AddScoped<IRepositorioTiposIdentificacion, RepositorioTiposIdentificacion>();
            services.AddScoped<IRepositorioUsuario, RepositorioUsuario>();
            services.AddScoped<IRepositorioLogin, RepositorioLogin>();
            services.AddScoped<IRepositorioReporte, RepositorioReporte>();
            services.AddScoped<IRepositorioProducto, RepositorioProducto>();
            services.AddScoped<IRepositorioFormasDePago, RepositorioFormasDePago>();
            services.AddScoped<IRepositorioCliente, RepositorioCliente>();
            services.AddScoped<IRepositorioDirecciones, RepositorioDirecciones>();

            return services;
        }
    }
}
