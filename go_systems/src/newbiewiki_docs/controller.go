package newbiewiki_docs

import (
	"fmt"
	"net/http"

	"go.mongodb.org/mongo-driver/bson/primitive"

	"go.mongodb.org/mongo-driver/bson"

	"github.com/gin-gonic/gin"
)

func SetRouting(route *gin.Engine) {

	r := route
	v1 := r.Group("/api/v1")
	{
		v1.GET("/documents/:id", getHandler)
		v1.POST("/docs/create", addHandler)
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
}

func updateHandler(ctx *gin.Context) {

}
func deleteHandler(ctx *gin.Context) {

}
