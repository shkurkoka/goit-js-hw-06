const items = categories.querySelectorAll('.item');
console.log("Number of categories:", items.length);

items.forEach(function (item, index) {
    console.log("Category:", item.firstElementChild.textContent);

    console.log("Elements:", item.lastElementChild.children.length);
});