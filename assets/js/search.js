function redirectRecipe() {
document.addEventListener("keyup", function(event) {          
     if (event.key === "Enter") {
          event.preventDefault();
          window.location.href = `recipe.html?searchInput=${searchInput.value}&page=1`;
     }
}) }

redirectRecipe();
