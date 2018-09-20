using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WashAndGo.Startup))]
namespace WashAndGo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
