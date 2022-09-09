const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElements = [];
ingredients.forEach((element) => {
  const itemRef = document.createElement('li');
  itemRef.textContent = `${element}`;
itemRef.classList.add('item');
  return listElements.push(itemRef);
});
console.log(listElements);

const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.append(...listElements);