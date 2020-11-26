package newbiewiki_docs

import (
	"task-manager/src/wiki_elastic"
	"strings"
	"encoding/json"
	"github.com/elastic/go-elasticsearch/v8/esapi"
	"time"
	"log"
	"fmt"
	"net/http"

	"go.mongodb.org/mongo-driver/bson/primitive"

	"go.mongodb.org/mongo-driver/bson"

	"github.com/gin-gonic/gin"
)

//SetRouting will set route for get, post method
func SetRouting(route *gin.Engine) {

	r := route
	v1 := r.Group("/api/v1")
	{
		v1.GET("/documents/:id", getHandler)
		v1.POST("/documents/create", addHandler)
		v1.DELETE("/documents/:id", deleteHandler)
	}
}

func getHandler(ctx *gin.Context) {
	var data Wiki_docs
	id, _ := primitive.ObjectIDFromHex(ctx.Param("id"))
	err := read(ctx, bson.D{{"_id", id}}, &data)
	if err != nil {
		fmt.Println(err)
	}
	ctx.JSON(http.StatusOK, data)
}
func addHandler(ctx *gin.Context) {
	
	var data Wiki_docs
	if err := ctx.BindJSON(&data); err!= nil {
		log.Println(err)
	}
	data.TimeInfo.CreatedTime = time.Now().UTC()
	data.TimeInfo.ModifiedTime = time.Now().UTC()

	jsonData := toJSON(data)

	req := esapi.IndexRequest{
		Index : "documents",
		Body : jsonData,
		Refresh : "true",
	}

	wiki_elastic.Insert(req)
}

func updateHandler(ctx *gin.Context) {

}
func deleteHandler(ctx *gin.Context) {
	
	target := ctx.Param("id")

	req := esapi.DeleteRequest{
		Index : "documents",
		DocumentID : target,
		Refresh: "true",
	}
	wiki_elastic.Delete(req)
}


func toJSON(data interface{}) *strings.Reader {
	myjson, err := json.Marshal(data)
	if err != nil {
		log.Println("err while json Marshaling", err)
	}
	return strings.NewReader(string(myjson))
}