function getRecipe() {
     var searchUrl = new URL(window.location.href);
     var searchInput = searchUrl.searchParams.get("searchInput");
     var apiKey = "97bc536f5f184af3824d362034db1dc6";
     var recipeUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${searchInput}&minCalories=0&minProtein=0&minFat=0&number=3&apiKey=${apiKey}`
     fetch(recipeUrl)
          .then(function(response) {
               return response.json();
          })
          .then (function(data) {
               //card1
               var titleRecipe1 = document.getElementById("titleRecipe1");
               titleRecipe1.textContent = data.results[0].title;
               var imgRecipe1 = document.getElementById("imgRecipe1");
               imgRecipe1.setAttribute("src", data.results[0].image);
               var calories = document.getElementById("calories");
               calories.textContent = Math.round(data.results[0].nutrition.nutrients[0].amount);
               var fat = document.getElementById("fat");
               fat.textContent = Math.round(data.results[0].nutrition.nutrients[2].amount);
               var protein = document.getElementById("protein");
               protein.textContent = Math.round(data.results[0].nutrition.nutrients[1].amount); 
               //card2
               var titleRecipe2 = document.getElementById("titleRecipe2");
               var imgRecipe2 = document.getElementById("imgRecipe2");
               titleRecipe2.textContent = data.results[1].title;
               imgRecipe2.setAttribute("src", data.results[1].image);
               var calories2 = document.getElementById("calories2");
               calories2.textContent = Math.round(data.results[1].nutrition.nutrients[0].amount);
               var fat2 = document.getElementById("fat2");
               fat2.textContent = Math.round(data.results[1].nutrition.nutrients[2].amount);
               var protein2 = document.getElementById("protein2");
               protein2.textContent = Math.round(data.results[1].nutrition.nutrients[1].amount);
               //card3
               var titleRecipe3 = document.getElementById("titleRecipe3");
               var imgRecipe3 = document.getElementById("imgRecipe3");
               titleRecipe3.textContent = data.results[2].title;
               imgRecipe3.setAttribute("src", data.results[2].image);
               var calories3 = document.getElementById("calories3");
               calories3.textContent = Math.round(data.results[2].nutrition.nutrients[0].amount);
               var fat3 = document.getElementById("fat3");
               fat3.textContent = Math.round(data.results[2].nutrition.nutrients[2].amount);
               var protein3 = document.getElementById("protein3");
               protein3.textContent = Math.round(data.results[2].nutrition.nutrients[1].amount);
               function recipeDetail() {
                    document.addEventListener("click", function(event) {
                         var element = event.target;
                         if (element.matches(".card1")) {
                              var modalCard = document.getElementById("modalCard");
                              modalCard.setAttribute("class", "modal is-active");
                              var detailRecipeTitle = document.getElementById("detailRecipeTitle");
                              detailRecipeTitle.textContent = data.results[0].title;
                              //get ingredient info
                              var recipeId = data.results[0].id;
                              var detailRecipeUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false`;
                              console.log(detailRecipeUrl);
                              // fetch(detailRecipeUrl)
                              
                         }
                    })
                    document.addEventListener("click", function(event) {
                         var element = event.target;
                         if (element.matches("#modalClose")) {
                              var modalCard = document.getElementById("modalCard");
                              modalCard.setAttribute("class", "modal");
                         }
                    })
               }               
               recipeDetail();
          })
}

//getRecipe();

// function getIngredient() {
//      if 
// }


