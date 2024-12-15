window.onload = function()
{
    document.querySelector("form").addEventListener("submit", function(e)
    {
        e.preventDefault();
        fetch("http://127.0.0.1:8983/solr/ign_simple/select?indent=true&q.op=OR&q=Content%3Ataito%27s&useParams=", {
            method: 'GET'
        }).then(function(response)
        {
            return response.json();
        }).then(function(data) {
            const div = document.createElement("div");

            div.className = "item";
            div.textContent = JSON.stringify(data);

            document.getElementById("list").appendChild(div);  
        });
    });
}