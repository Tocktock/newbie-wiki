package newbiewiki_middlewares

import (
	"github.com/gin-gonic/gin"
)

func CORSMiddleware() gin.HandlerFunc  {
	return func(c* gin.Context) {
		c.Header("Access-Control-Allow-Headers", "Content-Type, Authorization, Origin")
		c.Header("Access-Control-Allow-Credentials", "true")
		//in production localhost should replaced.
		c.Header("Access-Control-Allow-Origin", "http://localhost")
		c.Header("Access-Control-Allow-Methods", "GET, DELETE, POST")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	}
}