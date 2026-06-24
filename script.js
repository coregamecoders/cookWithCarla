const recipes = {
  pasta: {
    title: "Pasta Alfredo",
    ingredients: [
      "200g pasta",
      "2 cloves garlic",
      "1 cup cream",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Boil pasta until soft",
      "Cook garlic in pan",
      "Add cream and mix well",
      "Combine pasta and sauce",
      "Serve hot"
    ]
  },

  chicken: {
    title: "Chicken Rice Bowl",
    ingredients: [
      "1 chicken breast",
      "1 cup rice",
      "Soy sauce",
      "Vegetables"
    ],
    steps: [
      "Cook rice",
      "Grill chicken",
      "Add vegetables",
      "Mix with soy sauce",
      "Serve in bowl"
    ]
  },

  cake: {
    title: "Chocolate Cake",
    ingredients: [
      "2 cups flour",
      "1 cup sugar",
      "2 eggs",
      "Cocoa powder",
      "Milk"
    ],
    steps: [
      "Mix dry ingredients",
      "Add eggs and milk",
      "Pour into pan",
      "Bake at 180°C for 30 minutes",
      "Let it cool"
    ]
  },

  toast: {
    title: "Avocado Toast",
    ingredients: [
      "Bread slices",
      "1 avocado",
      "Salt",
      "Olive oil"
    ],
    steps: [
      "Toast bread",
      "Mash avocado",
      "Spread on toast",
      "Add salt and olive oil"
    ]
  }
};

function openRecipe(id) {
  const recipe = recipes[id];

  if (!recipe) {
    alert("Recipe not found!");
    return;
  }

  const detail = document.getElementById("recipeDetail");

  detail.innerHTML = `
    <div class="back-btn" onclick="goBack()">← Back</div>
    <h1>${recipe.title}</h1>

    <h3>Ingredients</h3>
    <ul>
      ${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}
    </ul>

    <h3>Steps</h3>
    <ol>
      ${recipe.steps.map(s => `<li>${s}</li>`).join("")}
    </ol>
  `;

  document.querySelectorAll(".card").forEach(card => {
    card.style.display = "none";
  });

  detail.classList.remove("hidden");
}

function goBack() {
  document.getElementById("recipeDetail").classList.add("hidden");

  document.querySelectorAll(".card").forEach(card => {
    card.style.display = "block";
  });
}