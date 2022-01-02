using Newtonsoft.Json;

namespace server.Models
{
    public class ResponseModel
    {
        [JsonProperty("message")]
        public string? Message { get; set; }
        
        [JsonProperty("success")]
        public bool? Success { get; set; }
        
        [JsonProperty("data")]
        public Object? Data { get; set; }        
    }
}