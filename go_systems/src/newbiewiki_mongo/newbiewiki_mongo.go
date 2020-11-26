package newbiewiki_mongo

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func init() {
}

var ctx context.Context
var client *mongo.Client

func MongoConnect(done chan interface{}) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	var err error
	client, err = mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))
	if err != nil {
		log.Fatal("mongo connect failed :")
	} else {
		log.Println("mongo connected")
	}
	done <- struct{}{}
}

func GetCollection(db string, collection string) *mongo.Collection {
	return client.Database(db).Collection(collection)
}
