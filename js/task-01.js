const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');
console.log("Number of categories:", items.length);

items.forEach(function (item, index) {
    console.log("Category:", item.querySelector('h2').textContent);

    console.log("Elements:", item.querySelectorAll('ul>li').length);
});