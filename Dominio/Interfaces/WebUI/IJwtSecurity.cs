using Dominio.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.WebUI
{
    public interface IJwtSecurity
    {
        DtoAccessToken Autentication(DtoLogin usuario);
    }
}
