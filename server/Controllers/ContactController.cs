using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Server.Models;

namespace server.Controllers
{
    [Route("api/contact")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult<string>> SendMail([FromBody] ContactModel data)
        {
            try
            {
                if (data != null)
                {
                    await data.Send();
                }

                return JsonConvert.SerializeObject(new ResponseModel
                {
                    Message = "Your message has been sent",
                    Success = true,
                    Data = null,
                });
            }
            catch (System.Exception)
            {
                return JsonConvert.SerializeObject(new ResponseModel
                {
                    Message = "An error has occured, please try again",
                    Success = false,
                    Data = null,
                });
            }
        }
    }
}