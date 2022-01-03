using Newtonsoft.Json;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace Server.Models
{
    public class ContactModel
    {
        [JsonProperty("email")]
        public string? Email { get; set; }

        [JsonProperty("name")]
        public string? Name { get; set; }

        [JsonProperty("message")]
        public string? Message { get; set; }

        public async Task Send()
        {
            try
            {
                var apiKey = Environment.GetEnvironmentVariable("SENDGRID_API_KEY");

                var client = new SendGridClient(apiKey);

                var from = new EmailAddress("contact@isakgranqvist.com", "isakgranqvist.com");

                var subject = "Forwarded - isakgranqvist.com";

                var to = new EmailAddress("isakwebdev@gmail.com");

                FormattableString mail = $"<div><h2>{Name} - {Email}<h2></div><div><p>{Message}</p></div>";

                var msg = MailHelper.CreateSingleEmail(from, to, subject, mail.ToString(), mail.ToString());

                var response = await client.SendEmailAsync(msg);

                Console.WriteLine(response.StatusCode);
            }
            catch (System.Exception)
            {
                Console.WriteLine("eerr");
                throw;
            }
        }
    }
}