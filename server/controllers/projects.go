package controllers

import (
	"encoding/json"
	"io/ioutil"

	"github.com/gofiber/fiber/v2"
)

type Image struct {
	Src string `json:"src"`
	Alt string `json:"alt"`
}

type Project struct {
	Label       string  `json:"label"`
	Description string  `json:"description"`
	Images      []Image `json:"images"`
	Href        string  `json:"href"`
	Github      string  `json:"github"`
}

func Projects(c *fiber.Ctx) error {
	var projects []Project
	bytes, err := ioutil.ReadFile("./data/projects.json")

	if err != nil {
		return c.JSON(Response{
			Message: "an error has occured",
			Success: false,
			Data:    nil,
		})
	}

	if err := json.Unmarshal(bytes, &projects); err != nil {
		return c.JSON(Response{
			Message: "an error has occured",
			Success: false,
			Data:    nil,
		})
	}

	return c.JSON(Response{
		Message: "",
		Success: true,
		Data:    projects,
	})
}
