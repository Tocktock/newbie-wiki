package newbiewiki_docs

// logic package
import (
	"context"
	"fmt"
	"task-manager/src/newbiewiki_mongo"

	"go.mongodb.org/mongo-driver/mongo"
)

var _collection *mongo.Collection
var wordTable struct {
	Table map[string][]int
}

//SetInit init mongodb collection
func SetInit() {
	_collection = newbiewiki_mongo.GetCollection("api", "wiki-docs")
	//mapTable := make(map[string][]string)
}

// returns insertedid, err
func insert(ctx context.Context, data interface{}) (interface{}, error) {
	result, err := _collection.InsertOne(ctx, data)
	if err != nil {
		fmt.Println("data insert failed")
	}
	return result.InsertedID, err
}

func read(ctx context.Context, filter interface{}, result *Wiki_docs) error {
	err := _collection.FindOne(ctx, filter).Decode(&result)
	if err != nil {
		fmt.Println("data read failed")
	}
	fmt.Println(result)
	return err
}

// func update(data interface{}) error {

// }

// func delete(data interface{}) error {

// }
