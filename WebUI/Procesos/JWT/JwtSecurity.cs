using Dominio.Dto;
using Dominio.Interfaces.WebUI;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace WebUI.Procesos.JWT
{
    public class JwtSecurity : IJwtSecurity
    {
        private readonly IConfiguration Configuration;

        public JwtSecurity(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public DtoAccessToken Autentication(DtoLogin usuario)
        {
            try
            {
                JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(Configuration["JwtConfig:secret"]);
                SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.Name, usuario.idUsuario.ToString()),
                    }),
                    IssuedAt = DateTime.UtcNow,
                    Expires = DateTime.UtcNow.AddHours(Convert.ToDouble(Configuration["JwtConfig:accessTokenExpiration"])),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                    Issuer = Configuration["JwtConfig:issuer"],
                    Audience = Configuration["JwtConfig:audience"]
                };
                SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);
                string stringToken = tokenHandler.WriteToken(token);
                DtoAccessToken dtoAccessToken = new DtoAccessToken
                {
                    Token = stringToken,
                    Expiration = DateTime.UtcNow.AddHours(Convert.ToDouble(Configuration["JwtConfig:accessTokenExpiration"])),
                    Usuario = JsonConvert.SerializeObject(usuario)
                };
                return dtoAccessToken;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
