const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Confirm = document.getElementById("confirm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validOfInputs();
});

function validOfInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const ConfirmValue = Confirm.value.trim();
  if (firstNameValue === "") {
    setErrorFor(firstName, "name cannot be blank");
  } else {
    setSuccessFor(firstName);
  }
  if (lastNameValue === "") {
    setErrorFor(lastName, "name cannot be blank");
  } else {
    setSuccessFor(lastName);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email Cannot Be Blank");
  } else if (!validateEmail) {
    setErrorFor(email, "Email is not Valid");
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === "") {
    setErrorFor(password, "password Cannot Be Blank");
  } else {
    setSuccessFor(password);
  }
  if (ConfirmValue === "") {
    setErrorFor(Confirm, "confirmPassword Cannot Be Blank");
  } else if (passwordValue !== ConfirmValue) {
    setErrorFor(Confirm, "password does not match ");
  } else {
    setSuccessFor(Confirm);
  }
}
function setErrorFor(input, message) {
  const formDetail = input.parentElement;
  const errorMessage = formDetail.querySelector("small");
  errorMessage.innerText = message;
  formDetail.className = "form-details error";
}
function setSuccessFor(input) {
  const formDetail = input.parentElement;
  formDetail.className = "form-details success";
}
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
