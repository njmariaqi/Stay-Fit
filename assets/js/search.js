function redirectRecipe() {
document.addEventListener("keyup", function(event) {          
     if (event.key === "Enter") {
          event.preventDefault();
          window.location.href = '/test';
     }
}) }

redirectRecipe();
