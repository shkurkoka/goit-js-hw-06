const container = document.querySelector('#counter');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

const value = document.querySelector('#value');
let counterValue = 0;

decrement.addEventListener("click", () => {
    --counterValue;
    value.textContent = counterValue;
});

increment.addEventListener("click", () => {
    counterValue++;
    value.textContent = counterValue;
});



