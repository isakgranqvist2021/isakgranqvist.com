package main

import (
	"log"
	"server/controllers"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	api := app.Group("/api")
	api.Post("/send-mail", controllers.SendMail)

	log.Fatal(app.Listen(":8081"))
}
