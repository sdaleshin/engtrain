using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EngTrain.Models.Mapping
{
    public class WordMap : EntityTypeConfiguration<Word>
    {
        public WordMap()
        {
            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.Level);
            Property(x => x.Position);
            Property(x => x.Level);
            Property(x => x.Value);

            ToTable("Word");
        }
    }
}
