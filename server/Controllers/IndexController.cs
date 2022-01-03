using System;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{

    [Route("{**catchAll}")]
    [ApiController]
    public class Index : Controller
    {

        [HttpGet]
        public ContentResult OnGet()
        {
            var html = System.IO.File.ReadAllText("./public/index.html");

            return new ContentResult
            {
                ContentType = "text/html",
                Content = html
            };
        }
    }
}
