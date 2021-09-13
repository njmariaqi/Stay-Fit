function getRecipe() {
     var searchUrl = new URL(window.location.href);
     var searchInput = searchUrl.searchParams.get("searchInput");
     console.log(searchInput);
     console.log(typeof searchInput);
     var titleRecipe1 = document.getElementById("titleRecipe1");
     var apiKey = "dbb0eec789a8465e88e52d75d74713f8";
     var recipeUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${searchInput}&number=3&apiKey=${apiKey}`
     console.log(recipeUrl);
     fetch(recipeUrl)
          .then(function(response) {
               return response.json();
          })
          .then (function(data) {
               console.log(data.results[0].title);     
          })
}

getRecipe();