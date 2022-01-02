namespace server
{
    class Settings
    {
        public string defaultCorsPolicy { get; } = "development";

        public string[] allowedOrigins { get; } = 
        {
            "http://localhost:3000",
            "https://localhost:3000",
        };
    }
}