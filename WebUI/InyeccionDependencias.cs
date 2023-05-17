using Dominio.Interfaces.WebUI;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebUI.Procesos.JWT;

namespace WebUI
{
    public static class InyeccionDependencias
    {
        public static IServiceCollection AddWebUI(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IJwtSecurity, JwtSecurity>();

            return services;
        }
    }
}
