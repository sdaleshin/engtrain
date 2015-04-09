namespace EngTrain.Models.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class words : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Word",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Value = c.String(),
                        Position = c.Int(nullable: false),
                        Level = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Word");
        }
    }
}
