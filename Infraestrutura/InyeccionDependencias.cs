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
            services.AddScoped<IRepositorioPlanta, RepositorioPlanta>();
            services.AddScoped<IRepositorioActividadPlanta, RepositorioActividadPlanta>();
            services.AddScoped<IRepositorioControlDeCalidad, RepositorioControlDeCalidad>();
            services.AddScoped<IRepositorioPersona, RepositorioPersona>();
            services.AddScoped<IRepositorioProducto, RepositorioProducto>();
            services.AddScoped<IRepositorioRol, RepositorioRol>();
            services.AddScoped<IRepositorioTiposIdentificacion, RepositorioTiposIdentificacion>();
            services.AddScoped<IRepositorioTurno, RepositorioTurno>();
            services.AddScoped<IRepositorioUsuario, RepositorioUsuario>();
            services.AddScoped<IRepositorioTipoMaterial, RepositorioTipoMaterial>();
            services.AddScoped<IRepositorioProducto, RepositorioProducto>();
            services.AddScoped<IRepositorioEncabezadoProduccionDiaria, RepositorioEncabezadoProduccionDiaria>();
            services.AddScoped<IRepositorioSegmentoDetalleProduccion, RepositorioSegmentoDetalleProduccion>();
            services.AddScoped<IRepositorioGrupoTipoMaterial, RepositorioGrupoTipoMaterial>();
            services.AddScoped<IRepositorioGrupoProducto, RepositorioGrupoProducto>();
            services.AddScoped<IRepositorioLogin, RepositorioLogin>();
            services.AddScoped<IRepositorioObservacionMantenimiento, RepositorioObservacionMantenimiento>();
            services.AddScoped<IRepositorioAgregadosProduccionDiaria, RepositorioAgregadosProduccionDiaria>();
            services.AddScoped<IRepositorioDetalleProduccionDiaria, RepositorioDetalleProduccionDiaria>();
            services.AddScoped<IRepositorioTotalProduccionDiaria, RepositorioTotalesProduccionDiaria>();
            services.AddScoped<IRepositorioHorario, RepositorioHorario>();
            services.AddScoped<IRepositorioReporte, RepositorioReporte>();



            return services;
        }
    }
}
