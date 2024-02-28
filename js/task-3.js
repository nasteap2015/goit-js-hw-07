const inputArea = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function getName(event) {
  if (event.currentTarget.value.trim() === "") {
    return;
  } else {
    output.textContent = event.currentTarget.value.trim();
  }
}

inputArea.addEventListener("input", getName);
