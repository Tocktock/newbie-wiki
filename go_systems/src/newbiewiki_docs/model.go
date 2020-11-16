package newbiewiki_docs

import (
	"task-manager/src/newbiewiki_global"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Wiki_docs struct {
	ID       primitive.ObjectID          `json:"_id,omitempty" bson:"_id,omitempty"`
	Title    string                      `json:"title,omitempty" bson:"title,omitempty"`
	Content  string                      `json:"content,omitempty" bson:"content,omitempty"`
	TimeInfo newbiewiki_global.TimeStamp `json:"time_info" bson:"time_info"`
}
