function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlContainer = document.querySelector("#controls");
const inputArea = controlContainer.firstElementChild;
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const tagretContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
function createBoxes(event) {
  destroyBoxes();
  if (inputArea.value >= 1 && inputArea.value <= 100) {
    for (let i = 1; i <= inputArea.value; i += 1) {
      const createdContainer = document.createElement("div");
      createdContainer.style.width = `${20 + i * 10}px`;
      createdContainer.style.height = `${20 + i * 10}px`;
      createdContainer.style.backgroundColor = getRandomHexColor();
      tagretContainer.append(createdContainer);
    }
  }
}

destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes(event) {
  tagretContainer.innerHTML = "";
}

inputArea.classList.add("quantity-input");
createBtn.classList.add("create-button");
destroyBtn.classList.add("destroy-button");
tagretContainer.classList.add("container");
