using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace TemplateBuilder
{
    static class StringExtensions
    {
        public static string Replace(this string @this, Regex match, Func<string, string> evaluator)
        {
            return match.Replace(@this, m => evaluator(m.Value));
        }

        public static string Replace(this string @this, Regex match, Func<string, string, string> evaluator)
        {
            return match.Replace(@this, m =>
            {
                switch (m.Groups.Count)
                {
                    case 2:
                        return evaluator(m.Groups[0].Value, m.Groups[1].Value);
                    case 1:
                        return evaluator(m.Groups[0].Value, "");
                }

                return evaluator("", "");
            });
        }
    }
}
