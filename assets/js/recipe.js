function getRecipe() {
     var titleRecipe1 = document.getElementById("titleRecipe1");
     titleRecipe1.textContent ="12";
     var apiKey = "dbb0eec789a8465e88e52d75d74713f8";
     var searchInput = document.getElementById("searchInput");
     var recipeUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${searchInput.value}&number=3&apiKey=${apiKey}`
     console.log(recipeUrl);
     fetch(recipeUrl)
          .then(function(response) {
               return response.json();
          })
          .then (function(data) {
               console.log("pasta here", searchInput.value);
               console.log(data.results[0].title);
               titleRecipe1.textContent = "12121312";
               window.location.href = "../../recipe.html";
          })
     
}

function redirectRecipe() {
     document.addEventListener("keyup", function(event) {          
          if (event.key === "Enter") {
               event.preventDefault();
               getRecipe();
          }
     }) 
}

redirectRecipe();