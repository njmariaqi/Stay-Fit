function redirectRecipe() {
document.addEventListener("keyup", function(event) {          
     if (event.key === "Enter") {
          event.preventDefault();
          window.location.href = `/html/recipe.html?searchInput=${searchInput.value}`;
     }
}) }

redirectRecipe();