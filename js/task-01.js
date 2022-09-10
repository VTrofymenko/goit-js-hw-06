const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(item => {
    const categoryTitle = item.querySelector('h2');
    const itemsQuantity = item.querySelectorAll('li');
    console.log(`Category: ${categoryTitle.textContent} 
    Elements: ${itemsQuantity.length}`);
});