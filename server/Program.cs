namespace server
{
    class Program
    {

        public static void Main(string[] args)
        {
            var corsPolicy = "_myAllowSpecificOrigins";
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: corsPolicy, builder =>
                {
                    builder.WithOrigins("http://localhost:3000/*")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });


            var app = builder.Build();

            app.UseHttpsRedirection();

            app.UseCors(corsPolicy);
            
            app.UseAuthorization();

            app.MapControllers();


            app.Run();
        }
    }
}