package main

import (
	"log"
	"server/controllers"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()
	app.Use(cors.New())

	app.Static("/static", "./static")

	api := app.Group("/api")
	api.Post("/send-mail", controllers.SendMail)

	app.Get("*", func(c *fiber.Ctx) error {
		return c.SendFile("./public/index.html", true)
	})

	log.Fatal(app.Listen(":8081"))
}
