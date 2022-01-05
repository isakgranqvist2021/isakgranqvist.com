using System;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{

    [Route("/")]
    [ApiController]
    public class Index : Controller
    {

        [HttpGet]
        public ContentResult OnGet()
        {
            var html = System.IO.File.ReadAllText("./wwwroot/index.html");

            return new ContentResult
            {
                ContentType = "text/html",
                Content = html
            };
        }
    }
}