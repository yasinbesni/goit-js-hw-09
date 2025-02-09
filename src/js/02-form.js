const form = document.querySelector(".feedback-form");
const localeKeyName = "feedback-form-state";
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const dataBack = localStorage.getItem(localeKeyName);
if (dataBack) {
  const { email, message } = JSON.parse(dataBack);
  emailInput.value = email;
  messageInput.value = message;
};

function saveLocal(event) {
  event.preventDefault();
  const formInputs = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  if (!formInputs.email || !formInputs.message) {
    alert("Please fill in all fields");
    return;
  }
  const inputTransformed = JSON.stringify(formInputs);
  localStorage.setItem(localeKeyName, inputTransformed);
  console.log(inputTransformed);
  form.reset();
}
form.addEventListener("submit", saveLocal);
