﻿using Aplicacion.Sucursal;
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
using Dominio.Interfaces.Aplicacion.Persona;
using Aplicacion.Persona;
using Dominio.Interfaces.Aplicacion.Producto;
using Aplicacion.Producto;
using Aplicacion.Vendedor;
using Dominio.Interfaces.Aplicacion.Vendedor;
using Dominio.Interfaces.Aplicacion.FormasDePago;
using Aplicacion.FormasDePago;
using Dominio.Interfaces.Aplicacion.Cliente;
using Aplicacion.Cliente;
using Dominio.Interfaces.Aplicacion.EstadoPlan;
using Aplicacion.EstadoPlan;
using Dominio.Interfaces.Aplicacion.Comision;
using Aplicacion.Comision;
using Dominio.Interfaces.Aplicacion.Plazo;
using Aplicacion.Plazo;
using Dominio.Interfaces.Aplicacion.Regalia;
using Aplicacion.Regalia;
using Dominio.Interfaces.Aplicacion.Cuota;
using Aplicacion.Cuota;
using Dominio.Interfaces.Aplicacion.PaquetesDeViajes;
using Aplicacion.PaquetesDeViajes;
using Aplicacion.TourDeViaje;
using Dominio.Interfaces.Aplicacion.TourDeViaje;
using Dominio.Interfaces.Aplicacion.TipoDeTelefono;
using Aplicacion.TipoDeTelefono;

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
            services.AddScoped<IServicioPersona, ServicioPersona>();
            services.AddScoped<IServicioProducto, ServicioProducto>();
            services.AddScoped<IServicioVendedor, ServicioVendedor>();

            services.AddScoped<IServicioFormasDePago, ServicioFormasDePago>();
            services.AddScoped<IServicioDirecciones, ServicioDirecciones>();
            services.AddScoped<IServicioCliente, ServicioCliente>();
            services.AddScoped<IServicioEstadoPlan, ServicioEstadoPlan>();
            services.AddScoped<IServicioComision, ServicioComision>();
            services.AddScoped<IServicioPlazo, ServicioPlazo>();
            services.AddScoped<IServicioRegalia, ServicioRegalia>();
            services.AddScoped<IServicioCuota, ServicioCuota>();
            services.AddScoped<IServicioTipoDeTelefono, ServicioTipoDeTelefono>();

            services.AddScoped<IServicioPaquetesDeViajes, ServicioPaquetesDeViajes>();
            services.AddScoped<IServicioTourDeViaje, ServicioTourDeViaje>();

            return services;
        }
    }
}
