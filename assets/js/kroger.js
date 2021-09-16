// fetch('https://api.kroger.com/v1/products?filter.term=water&filter.limit=5', {
//      method: "GET",
//      headers: {
//           'Accept': 'application/json',
//           'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzdGF5Zml0LTVmMjViNTZlYWFlNmM0MGYyYmUzOGZkNmY4ZTJhNWEzNDM5NzcxMzMzOTIzOTExNzY1MSIsImV4cCI6MTYzMTc1MDM0MSwiaWF0IjoxNjMxNzQ4NTM2LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjgyZWNhNzM4LTA5ODgtNTM4OS1iZjhjLTJkYTI5MGZkMWJlOCIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjMxNzQ4NTQxMjc0ODk2MTQyLCJhenAiOiJzdGF5Zml0LTVmMjViNTZlYWFlNmM0MGYyYmUzOGZkNmY4ZTJhNWEzNDM5NzcxMzMzOTIzOTExNzY1MSJ9.WMMV25k71mOTMyGm3mufFzMCGKjhSpHacv4dv0x9VLtgLdkb5hkdQIFBZctjLzkofctZIihc5Go9ldXUt8aPvwDNbB2pm1Q4vbRS5JK25DLqoejhkH5xtMyainl_YNICRsKYv3IGxkAJNTsF_oWoog1RInGhezOKKYvIGQslEaYXbChtNWTl2Da1QXO2oXYdpfBNLAQvOgmTjWOvxUe-PZ5M03FrBairFQwceONAImDmzs-vMqIdICxw4dQ1mjZLAlsCzq2L3KR1yGvJPHltgGIDtqawVTj7otTT6Dhz1YvGOSfkEmW9f5j4eoDuDsvp_03hzRn8w4QqnUPSx3IbVA'
//      }
// })
//      .then(function(response){
//           return response.json();
//      })
//      .then(function(data) {
//           console.log(data);
//      })

var searchUrl = new URL(window.location.href);
var text = searchUrl.searchParams.get("list");
var ptest = document.getElementById("test");
var shoppingList = text.split(".");
for (var i = 0; i < shoppingList.length; i++) {
     var listItem = document.createElement("li");
     ptest.appendChild(listItem);
     listItem.textContent = shoppingList[i];
}


     

