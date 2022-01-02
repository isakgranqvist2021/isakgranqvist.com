using System;
using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers
{   
   [Route("api/contact")]
   [ApiController]
   public class ContactController : ControllerBase
    {
        [HttpPost]
        public ActionResult<string> SendMail([FromBody] Object data)
        {
            Console.WriteLine("qwtqwt");
            Console.WriteLine(data);
            
            // Console.WriteLine(data.Email);
            // Console.WriteLine(data.Name);
            // Console.WriteLine(data.Message);
            return "";
        }
    }
}