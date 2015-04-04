using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EngTrain.Startup))]
namespace EngTrain
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
