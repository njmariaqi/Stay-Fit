var searchUrl = new URL(window.location.href);
var text = searchUrl.searchParams.get("list");
var ptest = document.getElementById("test");
var shoppingList = text.split(".");
console.log(shoppingList);
for (var i = 0; i < shoppingList.length - 1; i++) {
     // var listItem = document.createElement("li");
     // ptest.appendChild(listItem);
     // listItem.textContent = `${i}.`;
     var listContent = document.createElement("button");
     ptest.appendChild(listContent);
     listContent.setAttribute("style", "display: block; margin: 6px");
     listContent.setAttribute("class", "button is-primary");
     listContent.setAttribute("data-name", shoppingList[i])
     listContent.textContent = shoppingList[i];
}

// (function() {
//      var cors_api_host = 'cors-anywhere.herokuapp.com';
//      var cors_api_url = 'https://' + cors_api_host + '/';
//      var slice = [].slice;
//      var origin = window.location.protocol + '//' + window.location.host;
//      var open = XMLHttpRequest.prototype.open;
//      XMLHttpRequest.prototype.open = function() {
//           var args = slice.call(arguments);
//           var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
//           if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
//                targetOrigin[1] !== cors_api_host) {
//                args[1] = cors_api_url + args[1];
//           }
//           return open.apply(this, args);
//      };
// })();



document.addEventListener("click", function(event) {
     var element = event.target;
     if (element.matches("button")) {
          var productName = element.dataset.name;
          console.log(productName);
          var itemUrl = `https://api.kroger.com/v1/products?filter.term=${productName}&filter.limit=3`
          console.log(itemUrl);
          getToken(itemUrl);
     }
})


function getToken(url) {
     fetch("https://api.kroger.com/v1/connect/oauth2/token", {
          method: "POST",
          headers: {
               'Content-Type': 'application/x-www-form-urlencoded',
               'Authorization': 'Basic c3RheWZpdC01ZjI1YjU2ZWFhZTZjNDBmMmJlMzhmZDZmOGUyYTVhMzQzOTc3MTMzMzkyMzkxMTc2NTE6TDQ0Vk1BTDZBZUYwZ3E3czJFcHBOeWlYdTNHczlnYzRZYkE0S0VPVg==',
          }, 
          body: 'grant_type=client_credentials&scope=product.compact',
     })
          .then(function(response) {
               return response.json();
          })
          .then(function(data) {
               var token = data.access_token;
               fetch(url, {
                    method: "GET",
                    headers: {
                         'Accept': 'application/json',
                         'Authorization': `Bearer ${token}`
                    }
               })
                    .then(function(response){
                         return response.json();
                    })
                    .then(function(data) {
                         console.log(data);
                         var card1 = document.getElementById("ingredient1");
                         card1.setAttribute("class", "column");
                         var productTitle0 = document.getElementById("productTitle0");
                         productTitle0.textContent = data.data[0].description;
                         var productImg0 = document.getElementById("productImg0");
                         for (let i = 0; i < data.data[0].images.length; i++) {
                              if (data.data[0].images[i].perspective === "front") {
                                   for (let j = 0; j < data.data[0].images[i].sizes.length; j++) {
                                        if (data.data[0].images[i].sizes[j].size === "large") {
                                             productImg0.setAttribute("src", data.data[0].images[i].sizes[j].url);
                                        }
                                   }
                              }
                         }
                         var card2 = document.getElementById("ingredient2");
                         card2.setAttribute("class", "column");
                         var productTitle1 = document.getElementById("productTitle1");
                         productTitle1.textContent = data.data[1].description;
                         var productImg1 = document.getElementById("productImg1");
                         for (let i = 0; i < data.data[1].images.length; i++) {
                              if (data.data[1].images[i].perspective === "front") {
                                   for (let j = 0; j < data.data[1].images[i].sizes.length; j++) {
                                        if (data.data[1].images[i].sizes[j].size === "large") {
                                             productImg1.setAttribute("src", data.data[1].images[i].sizes[j].url);
                                        }
                                   }
                              }
                         }
                         var card3 = document.getElementById("ingredient3");
                         card3.setAttribute("class", "column");
                         var productTitle2 = document.getElementById("productTitle2");
                         productTitle2.textContent = data.data[2].description;
                         var productImg2 = document.getElementById("productImg2");
                         for (let i = 0; i < data.data[2].images.length; i++) {
                              if (data.data[2].images[i].perspective === "front") {
                                   for (let j = 0; j < data.data[2].images[i].sizes.length; j++) {
                                        if (data.data[2].images[i].sizes[j].size === "large") {
                                             productImg2.setAttribute("src", data.data[2].images[i].sizes[j].url);
                                        }
                                   }
                              }
                         }
                         
                    })
          })
}



// function fetchUrl(url) {
//      fetch(url, {
//           method: "GET",
//           headers: {
//                'Accept': 'application/json',
//                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzdGF5Zml0LTVmMjViNTZlYWFlNmM0MGYyYmUzOGZkNmY4ZTJhNWEzNDM5NzcxMzMzOTIzOTExNzY1MSIsImV4cCI6MTYzMTg1MjYwNywiaWF0IjoxNjMxODUwODAyLCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjgyZWNhNzM4LTA5ODgtNTM4OS1iZjhjLTJkYTI5MGZkMWJlOCIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjMxODUwODA3OTM4Mjc2NjgxLCJhenAiOiJzdGF5Zml0LTVmMjViNTZlYWFlNmM0MGYyYmUzOGZkNmY4ZTJhNWEzNDM5NzcxMzMzOTIzOTExNzY1MSJ9.heVvXuMjGpO-2tdZjmqhnMSRS7WjT7_oVSQUobW2ZjiBtXF-ZyLaOqdcdHMFtz26eeZtlzlqv-njPVDTLmABf6IU38aZlAFUwG0wFrfqgD-sasw-hn9v4ZJHmpqvWZJ_UHJH3xgEUMJVmu2weU9C2DzFylGGyeKa-TVJThEEdxIBc2tojk9DE-AA8zbVs_u65Z8izw3eUIygEiw8PsbMWu_onk-GTwbfMdBmIwiO3JuNgooV-E0LFTX6dbsYBUZYe64v9qEHMGpeyCDbRwlhTOImeYkmcihlSN5p2Ctw7MJNUbWIYnKumprE9htVszBoTTYdiw5lrXBpsaKLpxSuRw'
//           }
//      })
//           .then(function(response){
//                return response.json();
//           })
//           .then(function(data) {
//                console.log(data);
//                var krogerItem = document.getElementById("krogerItem");
//                var itemDetail = document.createElement("li");
//                krogerItem.appendChild(itemDetail);
//                itemDetail.textContent = data.data[0].description;
//           })
// }

