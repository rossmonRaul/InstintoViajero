using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoAccessToken
    {
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
        public string Usuario { get; set; }
    }
}
