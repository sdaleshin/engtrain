using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Optimization;

namespace TemplateBuilder
{
    public class UndrescoreTemplatesBundler : IBundleBuilder
    {
        string basePath;

        public UndrescoreTemplatesBundler(string basePath)
        {
            this.basePath = basePath;
        }


        public string BuildBundleContent(Bundle bundle, BundleContext context, IEnumerable<BundleFile> files)
        {
            //var basePath = context.HttpContext.Server.MapPath(this.basePath);

            if (files == null)
            {
                return string.Empty;
            }

            var buffer = new StringBuilder();
            buffer.AppendLine("this.JST || (this.JST = {});");

            foreach (var current in files)
            {
                buffer.AppendLine();

                //var basePath = Path.GetDirectoryName(current.IncludedVirtualPath).Replace("\\", "/") + "/";
                var extension = Path.GetExtension(current.VirtualFile.Name) ?? "";
                var fileContent = RetrieveFileContent(current);
                var name = "~" + current.VirtualFile.VirtualPath;
                name = name.Replace(basePath, "");
                name = name.Remove(name.Length - extension.Length);
                //var name = current.DirectoryName.Replace(basePath, "") + "\\" + Path.GetFileNameWithoutExtension(current.Name);
                //name = name.Replace("\\", "/");


                if (extension.Equals(".html", StringComparison.OrdinalIgnoreCase)
                    || extension.Equals(".htm", StringComparison.OrdinalIgnoreCase))
                {

                    var compiler = new UnderscoreCompiller();

                    buffer.AppendLine("this.JST['" + name + "'] = " + compiler.Compile(fileContent));
                }
                else
                {
                    buffer.AppendLine(fileContent);
                }
            }

            return buffer.ToString();
        }

        static string RetrieveFileContent(BundleFile current)
        {
            using (var stream = current.VirtualFile.Open())
            {
                using (var reader = new StreamReader(stream))
                {
                    return reader.ReadToEnd();
                }
            }
        }
    }
}
