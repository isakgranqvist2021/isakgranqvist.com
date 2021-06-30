package controllers

import (
	"encoding/json"
	"io/ioutil"

	"github.com/gofiber/fiber/v2"
)

type Block struct {
	Title string `json:"title"`
	Body  string `json:"body"`
}

func About(c *fiber.Ctx) error {
	var blocks []Block
	bytes, err := ioutil.ReadFile("./data/text.json")

	if err != nil {
		return c.JSON(Response{
			Message: "an error has occured",
			Success: false,
			Data:    nil,
		})
	}

	if err := json.Unmarshal(bytes, &blocks); err != nil {
		return c.JSON(Response{
			Message: "an error has occured",
			Success: false,
			Data:    nil,
		})
	}

	return c.JSON(Response{
		Message: "",
		Success: true,
		Data:    blocks,
	})
}
