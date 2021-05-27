package models

import (
	"context"
	"fmt"
	"os"
	"time"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type MailModel interface {
	SaveMail() error
}

type Mail struct {
	Email   string    `json:"email"`
	Name    string    `json:"name"`
	Message string    `json:"message"`
	Date    time.Time `json:"date"`
}

func (m *Mail) SaveMail() error {
	if err := godotenv.Load(); err != nil {
		return err
	}

	DB_URI := fmt.Sprintf(
		"mongodb+srv://%s:%s@cluster0.mebkn.mongodb.net/%s?retryWrites=true&w=majority",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PW"),
		os.Getenv("DB_DATABASE"),
	)

	clientOptions := options.Client().ApplyURI(DB_URI)
	client, err := mongo.Connect(context.TODO(), clientOptions)
	defer client.Disconnect(context.TODO())

	if err != nil {
		return err
	}

	if err := client.Ping(context.TODO(), nil); err != nil {
		return err
	}

	collection := client.Database(os.Getenv("DB_DATABASE")).Collection("mails")
	_, err = collection.InsertOne(context.TODO(), bson.M{
		"email":   m.Email,
		"name":    m.Name,
		"message": m.Message,
		"date":    time.Now(),
	})

	return err
}
