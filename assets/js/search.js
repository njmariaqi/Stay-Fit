function redirectRecipe() {
document.addEventListener("keyup", function(event) {          
     if (event.key === "Enter") {
          event.preventDefault();
          window.location.href = `Stay-Fit/html/recipe.html?searchInput=${searchInput.value}`;
     }
}) }

redirectRecipe();
