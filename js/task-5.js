function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const pageBody = document.querySelector("body");
const btn = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

btn.addEventListener("click", changingColor);

function changingColor(event) {
  const randomColor = getRandomHexColor();
  pageBody.style.backgroundColor = randomColor;
  spanText.textContent = String(randomColor);
}
