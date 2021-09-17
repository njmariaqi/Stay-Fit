var searchUrl = new URL(window.location.href);
var text = searchUrl.searchParams.get("list");
var ptest = document.getElementById("test");
var shoppingList = text.split(".");
console.log(shoppingList);
for (var i = 0; i < shoppingList.length - 1; i++) {
     var listItem = document.createElement("li");
     ptest.appendChild(listItem);
     listItem.textContent = shoppingList[i];
}

function displayKroger() {
     for (var i = 0; i < shoppingList.length; i++) {
          var itemUrl = `https://api.kroger.com/v1/products?filter.term=${shoppingList[i]}&filter.limit=1`
          fetchUrl(itemUrl);
     }     
}

displayKroger();

function fetchUrl(url) {
     fetch(url, {
          method: "GET",
          headers: {
               'Accept': 'application/json',
               'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzdGF5Zml0LTVmMjViNTZlYWFlNmM0MGYyYmUzOGZkNmY4ZTJhNWEzNDM5NzcxMzMzOTIzOTExNzY1MSIsImV4cCI6MTYzMTg1MjYwNywiaWF0IjoxNjMxODUwODAyLCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjgyZWNhNzM4LTA5ODgtNTM4OS1iZjhjLTJkYTI5MGZkMWJlOCIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjMxODUwODA3OTM4Mjc2NjgxLCJhenAiOiJzdGF5Zml0LTVmMjViNTZlYWFlNmM0MGYyYmUzOGZkNmY4ZTJhNWEzNDM5NzcxMzMzOTIzOTExNzY1MSJ9.heVvXuMjGpO-2tdZjmqhnMSRS7WjT7_oVSQUobW2ZjiBtXF-ZyLaOqdcdHMFtz26eeZtlzlqv-njPVDTLmABf6IU38aZlAFUwG0wFrfqgD-sasw-hn9v4ZJHmpqvWZJ_UHJH3xgEUMJVmu2weU9C2DzFylGGyeKa-TVJThEEdxIBc2tojk9DE-AA8zbVs_u65Z8izw3eUIygEiw8PsbMWu_onk-GTwbfMdBmIwiO3JuNgooV-E0LFTX6dbsYBUZYe64v9qEHMGpeyCDbRwlhTOImeYkmcihlSN5p2Ctw7MJNUbWIYnKumprE9htVszBoTTYdiw5lrXBpsaKLpxSuRw'
          }
     })
          .then(function(response){
               return response.json();
          })
          .then(function(data) {
               console.log(data);
               var krogerItem = document.getElementById("krogerItem");
               var itemDetail = document.createElement("li");
               krogerItem.appendChild(itemDetail);
               itemDetail.textContent = data.data[0].description;
          })
}

