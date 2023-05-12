const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

for (let i = 0; i < ingredients.length; i++) {
  const ingredient = document.createElement("li");
  ingredient.textContent = `${ingredients[i]}`;
  ingredientsList.append(ingredient);
}