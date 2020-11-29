package newbiewiki_docs

import (
	"task-manager/src/wiki_elastic"
	"strings"
	"encoding/json"
	"github.com/elastic/go-elasticsearch/v8/esapi"
	"time"
	"log"
	"github.com/gin-gonic/gin"
)

//SetRouting will set route for get, post method
func SetRouting(route *gin.Engine) {

	r := route
	v1 := r.Group("/api/v1")
	{
		v1.GET("/documents/get/:id", getHandler)
		v1.POST("/documents/create", addHandler)
		v1.PUT("/documents/:id", updateHandler)
		v1.DELETE("/documents/:id", deleteHandler)
		v1.GET("/documents/search/:query",findHandler)
	}
}

func getHandler(ctx *gin.Context) {
	target := ctx.Param("id")

	req := esapi.GetRequest{
		Index : "documents",
		DocumentID : target,
	}
	wiki_elastic.Get(req)
}
func addHandler(ctx *gin.Context) {
	var data Wiki_docs
	if err := ctx.BindJSON(&data); err!= nil {
		log.Println(err)
	}
	now := time.Now().UTC()
	data.TimeInfo.CreatedTime = &now
	data.TimeInfo.ModifiedTime = &now

	jsonData := toJSON(data)

	req := esapi.IndexRequest{
		Index : "documents",
		Body : jsonData,
		Refresh : "true",
	}

	wiki_elastic.Insert(req)
}

//
func updateHandler(ctx *gin.Context) {
	target := ctx.Param("id")
	var data struct {
		Doc Wiki_docs `json:"doc"`
	}
	
	if err := ctx.BindJSON(&data); err!= nil {
		log.Println(err)
	}
	now := time.Now().UTC()
	data.Doc.TimeInfo.ModifiedTime = &now
	log.Println("bind data is : ",data)
	jsonData := toJSON(data)
	log.Println("json data is : ",jsonData)
	req := esapi.UpdateRequest{
		Index : "documents",
		DocumentID : target,
		Body : jsonData,
	}
	wiki_elastic.Update(req)
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

//title find, not contents
func findHandler(ctx *gin.Context) {
	//query find in contents
	query := ctx.Param("query")
	
	var QueryRequest wiki_elastic.MatchQuery
	QueryRequest.Query.Match.Title = query
	jsonData := toJSON(QueryRequest)
	req := esapi.SearchRequest{
		Index : []string{"documents"},
		Body : jsonData,
	}
	res := wiki_elastic.Find(req)
	var resData wiki_elastic.HitsData
	json.NewDecoder(res.Body).Decode(&resData)
	ctx.JSON(200, resData.Hits["hits"])
}

type tstr struct {
	Source interface{} `json:"_source"`
}

func toJSON(data interface{}) *strings.Reader {
	myjson, err := json.Marshal(data)
	if err != nil {
		log.Println("err while json Marshaling", err)
	}
	return strings.NewReader(string(myjson))
}