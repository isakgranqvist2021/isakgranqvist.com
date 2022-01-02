## isakgranqvist.com

[Website](https://isakgranqvist.com)

server/Properties/launchSettings.json

```json
{
	"$schema": "https://json.schemastore.org/launchsettings.json",
	"iisSettings": {
		"windowsAuthentication": false,
		"anonymousAuthentication": true,
		"iisExpress": {
			"applicationUrl": "http://localhost:18802",
			"sslPort": 44376
		}
	},
	"profiles": {
		"server": {
			"commandName": "Project",
			"dotnetRunMessages": true,
			"launchBrowser": true,
			"launchUrl": "swagger",
			"applicationUrl": "https://localhost:8082;http://localhost:8081",
			"environmentVariables": {
				"ASPNETCORE_ENVIRONMENT": "Development",
				"SENDGRID_API_KEY": ""
			}
		},
		"IIS Express": {
			"commandName": "IISExpress",
			"launchBrowser": true,
			"launchUrl": "swagger",
			"environmentVariables": {
				"ASPNETCORE_ENVIRONMENT": "Development"
			}
		}
	}
}
```
