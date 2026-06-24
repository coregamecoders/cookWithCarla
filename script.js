const recipes = {
  pasta: {
    title: "Pasta Alfredo",
    ingredients: [
      "200g pasta",
      "2 cloves garlic",
      "1 cup cream",
      "Salt & pepper"
    ],
    steps: [
      "Boil pasta until soft",
      "Cook garlic in butter",
      "Add cream and mix",
      "Combine with pasta"
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
      "Mix vegetables",
      "Serve together"
    ]
  },

  cake: {
    title: "Chocolate Cake",
    ingredients: [
      "2 cups flour",
      "1 cup sugar",
      "2 eggs",
      "Cocoa powder"
    ],
    steps: [
      "Mix dry ingredients",
      "Add eggs and milk",
      "Bake at 180°C",
      "Let it cool"
    ]
  }
};

function openRecipe(id) {
  const recipe = recipes[id];

  const detail = document.getElementById("recipeDetail");
  const list = document.getElementById("recipeList");

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

  list.classList.add("hidden");
  detail.classList.remove("hidden");
}

function goBack() {
  document.getElementById("recipeDetail").classList.add("hidden");
  document.getElementById("recipeList").classList.remove("hidden");
}