package wordsearch

import (
	"regexp"
	"log"

	"github.com/gin-gonic/gin"
)

func SetRouting(route *gin.Engine) {

	r := route
	r.GET("/api/v1/wordsearch/:text", getHandler)
	
}

func getHandler(ctx *gin.Context) {
	var searchWord SearchWord
	if err := ctx.Bind(&searchWord); err != nil {
		log.Println("searching err : ", err)
	}
	reg, err := regexp.Compile(searchWord.text)
	if err!= nil {
		log.Println("word regex comile error", err)
	}


}
func addHandler(ctx *gin.Context) {
}

func updateHandler(ctx *gin.Context) {

}
func deleteHandler(ctx *gin.Context) {

}
