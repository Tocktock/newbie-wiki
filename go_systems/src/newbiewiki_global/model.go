package newbiewiki_global

import "time"

type TimeStamp struct {
	CreatedTime  time.Time `bson:"createOn"`
	ModifiedTime time.Time `bson:"modifiedOn"`
}
