package controllers

import (
	"server/models"

	"github.com/gofiber/fiber/v2"
)

func SendMail(c *fiber.Ctx) error {
	var mail models.Mail

	if err := c.BodyParser(&mail); err != nil {
		return c.JSON(Response{
			"bad formatting",
			false,
			nil,
		})
	}

	if err := mail.SaveMail(); err != nil {
		return c.JSON(Response{
			"unable to send mail",
			false,
			nil,
		})
	}

	return c.JSON(Response{
		"mail sent",
		true,
		nil,
	})
}
