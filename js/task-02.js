const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsListItems = ingredients
  .map((ingredient) => {return `
    <li class="item">
      ${ingredient}
    </li>
  `})
  .join("");

ingredientsList.insertAdjacentHTML("beforeend", ingredientsListItems);


// for (let i = 0; i < ingredients.length; i++) {
//   const ingredient = document.createElement("li");
//   ingredient.classList.add("item");
//   ingredient.textContent = `${ingredients[i]}`;
//   ingredientsList.append(ingredient);
// };
