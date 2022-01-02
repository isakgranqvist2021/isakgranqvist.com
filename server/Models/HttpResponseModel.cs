namespace server.Models
{
    public class HttpResponseModel
    {
        public string? Message { get; set; }

        public bool? Success { get; set; }

        public Object? Data { get; set; }        
    }
}