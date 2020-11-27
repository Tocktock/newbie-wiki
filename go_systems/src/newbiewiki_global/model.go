package newbiewiki_global

import "time"

//TimeStamp have ref variables of time.Time
type TimeStamp struct {
	CreatedTime  *time.Time `json:"createdTime,omitempty"`
	ModifiedTime *time.Time `json:"modifiedTime,omitempty"`
}
