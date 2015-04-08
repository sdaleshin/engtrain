using EngTrain.Models.Enums;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EngTrain.Models
{
    public class User : IdentityUser
    {
        public Level Level { get; set; }
    }
}
