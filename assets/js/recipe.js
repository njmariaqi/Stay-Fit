function getRecipe() {
     var searchUrl = new URL(window.location.href);
     var searchInput = searchUrl.searchParams.get("searchInput");
     console.log(searchInput);
     console.log(typeof searchInput);
     var apiKey = "dbb0eec789a8465e88e52d75d74713f8";
     var recipeUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${searchInput}&minCalories=0&minProtein=0&minFat=0&number=3&apiKey=${apiKey}`
     console.log(recipeUrl);
     fetch(recipeUrl)
          .then(function(response) {
               return response.json();
          })
          .then (function(data) {
               //card1
               var titleRecipe1 = document.getElementById("titleRecipe1");
               var imgRecipe1 = document.getElementById("imgRecipe1");
               titleRecipe1.textContent = data.results[0].title;
               imgRecipe1.setAttribute("src", data.results[0].image);
               var calories = document.getElementById("calories");
               calories.textContent = Math.floor(data.results[0].nutrition.nutrients[0].amount);
               var fat = document.getElementById("fat");
               fat.textContent = Math.floor(data.results[0].nutrition.nutrients[2].amount);
               var protein = document.getElementById("protein");
               protein.textContent = Math.floor(data.results[0].nutrition.nutrients[1].amount); 
               //card2
               var titleRecipe2 = document.getElementById("titleRecipe2");
               var imgRecipe2 = document.getElementById("imgRecipe2");
               titleRecipe2.textContent = data.results[1].title;
               imgRecipe2.setAttribute("src", data.results[1].image);
               var calories = document.getElementById("calories");
               calories.textContent = Math.floor(data.results[1].nutrition.nutrients[0].amount);
               var fat = document.getElementById("fat");
               fat.textContent = Math.floor(data.results[1].nutrition.nutrients[2].amount);
               var protein = document.getElementById("protein");
               protein.textContent = Math.floor(data.results[1].nutrition.nutrients[1].amount);
               //card3
               var titleRecipe3 = document.getElementById("titleRecipe3");
               var imgRecipe3 = document.getElementById("imgRecipe3");
               titleRecipe3.textContent = data.results[2].title;
               imgRecipe3.setAttribute("src", data.results[2].image);
               var calories = document.getElementById("calories");
               calories.textContent = Math.floor(data.results[2].nutrition.nutrients[0].amount);
               var fat = document.getElementById("fat");
               fat.textContent = Math.floor(data.results[2].nutrition.nutrients[3].amount);
               var protein = document.getElementById("protein");
               protein.textContent = Math.floor(data.results[2].nutrition.nutrients[1].amount);
          })
}

getRecipe();

function getIngredient() {
     
}