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
	var err error
	es, err = elasticsearch.NewDefaultClient()
	if err != nil {
		log.Println("elasticsearch falied : " ,err)
	}else {
		log.Println("elasticsearch connected")
	}
	done <- struct{}{}
}

//GetESClient return esclient
func GetESClient() *elasticsearch.Client {
	return es
}

//Get Data
func Get(req esapi.GetRequest)  {
	res, err := req.Do(context.Background(), es) 
	defer res.Body.Close()
	if err!= nil {
		log.Println(err)
	} else {
		log.Println(res)
	}
}
//Insert data 
func Insert(req esapi.IndexRequest) {
	res, err := req.Do(context.Background(), es) 
	defer res.Body.Close()
	if err!= nil {
		log.Println(err)
	} else {
		log.Println(res)
	}
}

//Update data in elasticsearch db
func Update(req esapi.UpdateRequest)  {
	res, err := req.Do(context.Background(), es)
	defer res.Body.Close()
	if err != nil {
		log.Println(err)
	} else {
		log.Println(res)
	}
}
// Delete data from elasticserch
func Delete(req esapi.DeleteRequest)  {
	res, err := req.Do(context.Background(), es)
	defer res.Body.Close()
	if err != nil {
		log.Println(err)
	} else {
		log.Println(res)
	}
}

// Find data in elasticsearch it queries _search
func Find(req esapi.SearchRequest) *esapi.Response {
	res, err := req.Do(context.Background(), es)
	if err != nil {
		log.Println(err)
	} else {
		log.Println(res)
	}
	return res
}