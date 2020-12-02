package newbiewiki_elastic

// //UpdateJSON is struct for updaterequest in elasitcsearch
// type UpdateJSON struct{

// 	Doc wiki_doc.Wiki_docs `json:"doc,omitempty"`
// }

//Query Model
type MatchQuery struct{
	Query QueryRequest `json:"query"`
}

type QueryRequest struct {
	Match MatchWhat `json:"match"`
} 

type MatchWhat struct {
	Title string `json:"title,omitempty"`
	Contents string `json:"contents,omitempty"`
}


type HitsData struct {
	Hits map[string][]Result `json:"hits"`
}

type Result struct {
	Index string `json:"_index"`
	Type string `json:"_type"`
	ID string `json:"_id"`
	Source map[string]interface{} `json:"_source"`
}
