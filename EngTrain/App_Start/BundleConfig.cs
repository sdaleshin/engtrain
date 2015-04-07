using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using TemplateBuilder;

namespace EngTrain
{
    public class BundleOrderer : IBundleOrderer
    {
        public virtual IEnumerable<BundleFile> OrderFiles(BundleContext context, IEnumerable<BundleFile> files)
        {
            var groups = files.GroupBy(x =>
            {
                var index = x.IncludedVirtualPath.IndexOf("\\");
                if (index > 0) return x.IncludedVirtualPath.Substring(0, index);
                return x.IncludedVirtualPath;

            });

            List<BundleFile> result = new List<BundleFile>(files.Count());
            foreach (var group in groups)
            {
                result.AddRange(group.OrderBy(x => x.VirtualFile.VirtualPath));
            }

            return result;
        }
    }

    public class BundleConfig
    {
        // Дополнительные сведения об объединении см. по адресу: http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/bundles/lib").Include(
                "~/Scripts/jquery.min.js",
                "~/Scripts/underscore.js",
                "~/Scripts/backbone.js",
                "~/Scripts/backbone.marionette.js",
                "~/Scripts/jquery.dropotron.min.js",
                "~/Scripts/skel.min.js",
                "~/Scripts/skel-layers.js",
                "~/Scripts/init.js"
                ));

            var templates = new Bundle("~/bundles/templates", new JsMinify()).IncludeDirectory("~/Scripts/backbone/", "*.html", true);
            templates.Builder = new UndrescoreTemplatesBundler("~/Scripts/backbone/");
            bundles.Add(templates);

            var appBundle = new ScriptBundle("~/bundles/app")
                .IncludeDirectory("~/Scripts/backbone/config", "*.js", true)
                .Include("~/Scripts/backbone/app.js")
                .IncludeDirectory("~/Scripts/backbone/controllers", "*.js", true)
                .IncludeDirectory("~/Scripts/backbone/views", "*.js", true)
                .IncludeDirectory("~/Scripts/backbone/entities", "*.js", true)
                //.IncludeDirectory("~/Scripts/backbone/components", "*.js", true)
                .IncludeDirectory("~/Scripts/backbone/apps", "*.js", true);

            appBundle.Orderer = new BundleOrderer();

            bundles.Add(appBundle);

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
