package wordsearch

import (
	"task-manager/src/newbiewiki_mongo"
	"go.mongodb.org/mongo-driver/mongo"
	"fmt"
	"context"
)


var _collection *mongo.Collection

//SetInit is  initialize func collection variable
func SetInit() {
	_collection = newbiewiki_mongo.GetCollection("api", "wiki-docs")
	//mapTable := make(map[string][]string)
}


func read(ctx context.Context, filter interface{}, result *Wiki_docs) error {
	err := _collection.Find(ctx, filter)
	if err != nil {
		fmt.Println("data read failed")
	}
	fmt.Println(result)
	return err
}