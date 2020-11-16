package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"sync"
	"syscall"
	"task-manager/src/newbiewiki_docs"
	"task-manager/src/newbiewiki_mongo"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

type msg struct {
	Jwt  string `json:"jwt"`
	Type string `json:"type"`
	Data string `json:"data"`
}

func handleMongoAPI(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "mongodb api~"})
}
func handleAPI(w http.ResponseWriter, r *http.Request) {

	upgrader.CheckOrigin = func(r *http.Request) bool { return true }

	// connection
	con, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err.Error())
		return
	}
Loop:
	for {
		in := msg{}
		err := con.ReadJSON(&in)
		if err != nil {
			fmt.Println("Error reading json.", err)
			con.Close()
			break Loop
		}
		switch in.Type {
		case "for-test":
			fmt.Println("Test success!!")
			break
		default:
			fmt.Println(in)
			break
		}

	}
}

var wg sync.WaitGroup
var router *gin.Engine

func main() {
	router = gin.Default()
	go initServer()

	runServer()
}

func initServer() {
	mongoConnectdone := make(chan interface{})
	go newbiewiki_mongo.MongoConnect(mongoConnectdone)
	newbiewiki_docs.SetRouting(router)
	//order is needed
	go func() {
		count := 0
		for {
			select {
			case <-mongoConnectdone:
				//SetInit must be called after mongoConnect
				newbiewiki_docs.SetInit()
				fmt.Println("newbiewiki_doc init finished")
				count++
			}
			if count == 1 {
				return
			}
		}
	}()
}

func gracefulShutDown(srv *http.Server) {
	// Wait for interrupt signal to gracefully shutdown the server with
	// a timeout of 5 seconds.
	quit := make(chan os.Signal)
	// kill (no param) default send syscall.SIGTERM
	// kill -2 is syscall.SIGINT
	// kill -9 is syscall.SIGKILL but can't be catch, so don't need add it
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit
	log.Println("Shutting down server...")

	// The context is used to inform the server it has 5 seconds to finish
	// the request it is currently handling
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := srv.Shutdown(ctx); err != nil {
		log.Fatal("Server forced to shutdown:", err)
	}
	log.Println("Server exiting")
}

func runServer() {
	srv := &http.Server{
		Addr:    ":9090",
		Handler: router,
	}
	go func() {
		log.Println("Server will run on ", srv.Addr)
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("listen: %s\n", err)
		}
	}()
	gracefulShutDown(srv)
}
