const categories = document.querySelectorAll('li.item');
const numbersOfCategories = categories.length;
console.log('Number of categories:', numbersOfCategories);

for (let i = 0; i < numbersOfCategories; i++) {
  console.log('Category:', categories[i].children[0].textContent);
  console.log('Elements:', categories[i].children[1].children.length);
}
