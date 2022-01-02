using System;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
   [Route("api/contact")]
   [ApiController]
   public class ContactController : ControllerBase
    {
        [HttpPost]
        public ActionResult<string> SendMail()
        {
            Console.WriteLine("qwtqwt");

            return "";
        }
    }
}