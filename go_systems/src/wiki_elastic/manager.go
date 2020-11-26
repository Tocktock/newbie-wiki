package wiki_elastic

import (
	"context"
	"log"
	"github.com/elastic/go-elasticsearch/v8"	
	"github.com/elastic/go-elasticsearch/v8/esapi"

)

func init() {
}

var es *elasticsearch.Client

//ElasticConnect is connection func to elasticsearch 
func ElasticConnect(done chan interface{}) {
	defer close(done)
	var err error
	es, err = elasticsearch.NewDefaultClient()
	if err != nil {
		log.Println("elasticsearch falied : " ,err)
	}else {
		log.Println("elasticsearch connected")
	}
}

//GetESClient return esclient
func GetESClient() *elasticsearch.Client {
	return es
}

//Insert data into elasticsearch 
func Insert(req esapi.IndexRequest) {
	res, err := req.Do(context.Background(), es) 
	if err!= nil {
		log.Println(err)
	}
	defer res.Body.Close()
	log.Println(res)
}

// Delete data from elasticserch
func Delete(req esapi.DeleteRequest)  {
	res, err := req.Do(context.Background(), es)
	if err != nil {
		log.Println(err)
	}
	defer res.Body.Close()
	log.Println(res)
}