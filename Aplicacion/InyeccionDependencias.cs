using Aplicacion.Planta;
using Aplicacion.Usuario;
using Aplicacion.TipoMaterial;
using Aplicacion.EncabezadoProduccionDiaria;
using Dominio.Interfaces.Aplicacion.Planta;
using Dominio.Interfaces.Aplicacion.Usuario;
using Dominio.Interfaces.Aplicacion.TipoMaterial;
using Dominio.Interfaces.Aplicacion.EncabezadoProduccionDiaria;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using Dominio.Interfaces.Aplicacion.Producto;
using Aplicacion.Producto;
using Dominio.Interfaces.Aplicacion.ActividadPlanta;
using Aplicacion.ActividadPlanta;
using Dominio.Interfaces.Aplicacion.ControlDeCalidad;
using Aplicacion.ControlDeCalidad;
using Dominio.Interfaces.Aplicacion.Rol;
using Aplicacion.Rol;
using Aplicacion.TiposIdentificacion;
using Dominio.Interfaces.Aplicacion.TiposIdentificacion;
using Dominio.Interfaces.Aplicacion.GrupoTipoMaterial;
using Aplicacion.GrupoTipoMaterial;
using Dominio.Interfaces.Aplicacion.GrupoProducto;
using Aplicacion.GrupoProducto;
using Dominio.Interfaces.Aplicacion.Login;
using Aplicacion.Login;
using Aplicacion.ObservacionMantenimiento;
using Dominio.Interfaces.Aplicacion.ObservacionMantenimiento;
using Dominio.Interfaces.Aplicacion.AgregadosProduccionDiaria;
using Aplicacion.AgregadosProduccionDiaria;
using Dominio.Interfaces.Aplicacion.DetalleProduccionDiaria;
using Aplicacion.DetalleProduccionDiaria;
using Aplicacion.TotalesProduccionDiaria;
using Dominio.Interfaces.Aplicacion.TotalesProduccionDiaria;
using Dominio.Interfaces.Aplicacion.Horario;
using Aplicacion.Horario;
using Dominio.Interfaces.Aplicacion.Reporte;
using Aplicacion.Reporte;
using Dominio.Interfaces.Aplicacion.SegmentoDetalleProduccionDiaria;
using Aplicacion.SegmentoDetalleProduccionDiaria;

namespace Aplicacion
{
    public static class InyeccionDependencias
    {
        public static IServiceCollection AddAplicacion(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddScoped<IServicioPlanta, ServicioPlanta>();
            services.AddScoped<IServicioUsuario, ServicioUsuario>();
            services.AddScoped<IServicioProducto, ServicioProducto>();
            services.AddScoped<IServicioTipoMaterial, ServicioTipoMaterial>();
            services.AddScoped<IServicioActividadPlanta, ServicioActividadPlanta>();
            services.AddScoped<IServicioControlDeCalidad, ServicioControlDeCalidad>();
            services.AddScoped<IServicioControlDeCalidad, ServicioControlDeCalidad>();
            services.AddScoped<IServicioRol, ServicioRol>();
            services.AddScoped<IServicioTiposIdentificacion, ServicioTiposIdentificacion>();
            services.AddScoped<IServicioEncabezadoProduccionDiaria, ServicioEncabezadoProduccionDiaria>();
            services.AddScoped<IServicioGrupoTipoMaterial, ServicioGrupoTipoMaterial>();
            services.AddScoped<IServicioGrupoProducto, ServicioGrupoProducto>();
            services.AddScoped<IServicioLogin, ServicioLogin>();
            services.AddScoped<IServicioObservacionMantenimiento, ServicioObservacionMantenimiento>();
            services.AddScoped<IServicioAgregadosProduccionDiaria, ServicioAgregadosProduccionDiaria>();
            services.AddScoped<IServicioDetalleProduccionDiaria, ServicioDetalleProduccionDiaria>();
            services.AddScoped<IServicioTotalProduccionDiaria, ServicioTotalProduccionDiaria>();
            services.AddScoped<IServicioHorario, ServicioHorario>();
            services.AddScoped<IServicioReporte, ServicioReporte>();
            services.AddScoped<IServicioSegmentoDetalleProduccionDiaria, ServicioSegmentoDetalleProduccionDiaria>();


            return services;
        }
    }
}
