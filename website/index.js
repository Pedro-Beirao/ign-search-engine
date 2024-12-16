window.onload = function()
{
    document.querySelector("form").addEventListener("submit", function(e)
    {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries())
        console.log(data)
        
        var q = ""
        if (data["ftext"] && data["ftext"].length > 0)
        {
            q = "Title%3A" + data["ftext"] + "^50%0A" + 
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
        
        fetch(url, { method: 'GET' }).then(function(response)
        {
            return response.json();
        }).then(function(data)
        {
            var listDiv = document.getElementById("list");
            listDiv.innerHTML = "";

            createItems(listDiv, data);
        });
    });
}

function createItems(listDiv, data)
{
    const numFound = data["response"]["docs"].length;

    for (var i = 0; i < numFound; i++)
    {
        const div = document.createElement("div");
        div.className = "item";

        const title = document.createElement("h2");
        title.textContent = data["response"]["docs"][i]["Title"]
        div.appendChild(title);

        const subheader = document.createElement("h3");
        subheader.textContent = data["response"]["docs"][i]["Subheader"]
        div.appendChild(subheader);

        const br = document.createElement("br");
        div.appendChild(br);

        const subtitle = document.createElement("h3");
        subtitle.textContent = data["response"]["docs"][i]["Subtitle"]
        div.appendChild(subtitle);

        const content = document.createElement("div");
        content.textContent = data["response"]["docs"][i]["Content"]
        div.appendChild(content);

        const score = document.createElement("div");
        score.className = "score";
        score.textContent = data["response"]["docs"][i]["Score"]
        div.appendChild(score);


        listDiv.appendChild(div); 
    }
}