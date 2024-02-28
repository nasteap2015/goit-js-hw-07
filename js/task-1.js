const categoryList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach(function (category, categoryList) {
  const title = category.querySelector("h2");
  console.log(`Category: ${title.textContent}`);
  const elementsList = category.querySelectorAll("li");
  console.log(`Elements: ${elementsList.length}`);
});

const categoryItem = document.querySelectorAll(".item > ul > li");
categoryItem.forEach(function (item, categoryItem) {
  item.classList.add("category-value");
});
