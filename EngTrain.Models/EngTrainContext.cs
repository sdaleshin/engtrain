using EngTrain.Models.Mapping;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;

namespace EngTrain.Models
{
    public class EngTrainContext : IdentityDbContext<User>
    {
        public EngTrainContext()
            : base("EngTrainContext")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

        }
    }
}