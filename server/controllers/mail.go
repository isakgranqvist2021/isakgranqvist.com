package controllers

import (
	"server/models"
	"server/utils"

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

	if !utils.CheckEmail(mail.Email) {
		return c.JSON(Response{
			"please enter a valid email",
			false,
			nil,
		})
	}

	if len(mail.Message) < 15 {
		return c.JSON(Response{
			"message must be at least 15 characters long",
			false,
			nil,
		})
	}

	if len(mail.Name) < 2 {
		return c.JSON(Response{
			"please include a name",
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
