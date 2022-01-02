using Newtonsoft.Json;

namespace server.Models 
{
    public class ContactModel
    {
        [JsonProperty("email")]
        public string? Email { get; set; }

        [JsonProperty("name")]
        public string? Name { get; set; }

        [JsonProperty("message")]
        public string? Message { get; set; }
    }
}