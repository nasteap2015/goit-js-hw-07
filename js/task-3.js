const inputArea = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function getName(event) {
  if (event.currentTarget.value.trim() === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value.trim();
  }
}

inputArea.addEventListener("input", getName);
