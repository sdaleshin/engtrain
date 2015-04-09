using EngTrain.Models.Enums;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EngTrain.Models
{
    public class Word 
    {
        public int Id { get; set; }
        public string Value { get; set; }
        public int Position { get; set; }
        public Level Level { get; set; }
    }
}
