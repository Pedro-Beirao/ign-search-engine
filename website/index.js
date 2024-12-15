// import { SentenceTransformer } from "@tuesdaycrowd/sentence-transformers";

const express = require('express')
const path = require('path');
const app = express()
const port = 3000


app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', async (req, res) =>
{
    var ftext = "";
    if (req.query["ftext"]) ftext = req.query["ftext"];
    var fmin = "";
    if (req.query["fmin"]) fmin = req.query["fmin"];
    var fmax = "";
    if (req.query["fmax"]) fmax = req.query["fmax"];

    const items = await search(req);

    res.render('index.ejs', 
    {
        ftext: ftext,
        fmin: fmin,
        fmax: fmax,
        items: items
    });
})

app.listen(port, () =>
{
  console.log(`Example app listening on port ${port}`)
})

async function search(req)
{
    const data = req.query;

    var q = ""
    if (data["ftext"] && data["ftext"].length > 0)
    {
        q = "Title%3A" + data["ftext"] + "%0A" + 
            "Subtitle%3A" + data["ftext"] + "%0A" +
            "Subheader%3A" + data["ftext"] + "%0A" +
            "Content%3A" + data["ftext"] + "%0A";
    }

    var rmin = 1;
    if (data["fmin"]) rmin = Number(data["fmin"]);
    var rmax = 10;
    if (data["fmax"]) rmax = Number(data["fmax"]);

    var r = "";
    for (var i = rmin; i <= rmax && i != 0; i++)
    {
        r += "Score%3A" + i.toString() + "%0A"
    }
    
    if (q == "") q = r;
    else q += "&fq=" + r;

    const url = "http://127.0.0.1:8983/solr/ign_simple/select?indent=true&q.op=OR&q=" + q;
    console.log(url);
    
    const response = await fetch(url, { method: 'GET' });
    const json = await response.json();
    return json["response"]["docs"];
}







async function getModel() {
    return await SentenceTransformer.from_pretrained('Supabase/bge-small-en');
    const { sentence_embedding } = await model.encode(['Hello world!']); // returns Tensor from '@xenova/transformers'
  }
