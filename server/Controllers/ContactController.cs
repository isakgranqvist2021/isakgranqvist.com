using Microsoft.AspNetCore.Mvc;
using server.Models;
using Newtonsoft.Json;

namespace server.Controllers
{   
   [Route("api/contact")]
   [ApiController]
   public class ContactController : ControllerBase
    {
        [HttpPost]
        public ActionResult<string> SendMail([FromBody] ContactModel data)
        {
            Console.WriteLine(data.Email);

            var response = new ResponseModel{
                Message = "Mail has been sent",
                Success = true,
                Data = new Object{},
            };

            return JsonConvert.SerializeObject(response);
        }
    }
}