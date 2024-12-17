import pysolr
from sentence_transformers import SentenceTransformer
import sys

def bad_params():
    print("Bad parameters\n"
          "- semantic.py index\n"
          "- semantic.py query <query>")
    exit()

if (len(sys.argv) < 2):
    bad_params()

solr = pysolr.Solr('http://localhost:8983/solr/ign_simple')

try:
    model_name='bert-base-nli-mean-tokens'
    model=SentenceTransformer(model_name)
except Exception as e:
    print("error occured initializing bert")
    exit()

def update_dense_index():
    solr_response=solr.search(
                        q='*',
                        rows=300,
                        start=0,
                        fl='id,Title',
                        wt='json')

    for item in solr_response:
        uuid = item['id']
       
        embedding = model.encode([ item["Title"]])
        print(f"Updating id {uuid}")
        solr.add({'id':uuid, 'bert_vector':{'set':[float(w) for w in embedding[0]]}})

    solr.commit()

def keyword_search(query):
    solr_response=solr.search(
                        q=query,
                        rows=30,
                        start=0,
                        fl='id,Title',
                        qf='Title^5 Content^3',
                        pf='Title^5',
                        defType='edismax',
                        ps='7',
                        wt='json')
    
    for item in solr_response:
        print(item['Title'])

def semantic_search(query):
    embedding = model.encode([query])
    solr_response=solr.search(fl=['id','Title'],
                  q="{!knn f=bert_vector topK=10}"+str([float(w) for w in embedding[0]]),
                  rows = 30)
    
    for item in solr_response:
        print(item["Title"] + "\n")


if (sys.argv[1] == "index"):
    update_dense_index()
elif (sys.argv[1] == "query" and len(sys.argv) > 2):
    semantic_search(sys.argv[2])
else:
    bad_params()