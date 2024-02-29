const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", sendSubmit);

function sendSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const userObj = {
    email: email.trim(),
    password: password.trim(),
  };
  console.log(userObj);
  form.reset();
}

const formItem = document.querySelectorAll("label");
formItem.forEach(function (item, formItem) {
  item.classList.add("form-item");
});

const formInput = document.querySelectorAll("input");
formInput.forEach(function (item, formInput) {
  item.classList.add("form-input");
});

const submitButton = document.querySelector("button");
submitButton.classList.add("submit-button");
