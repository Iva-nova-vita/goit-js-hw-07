const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('input[type="email"]');
const inputPassword = document.querySelector('input[type="password"]');
form.addEventListener('submit', formSubmit);
inputEmail.addEventListener('input', trimValue);
inputPassword.addEventListener('input', trimValue);

function trimValue(e) {
  const value = e.target.value.trim();
  this.value = value;
}

function formSubmit(e) {
  e.preventDefault();

  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;

  if (email && password) {
    const credentials = {
      email,
      password,
    };
    console.log('Credentials:', credentials);
    form.reset();
    return;
  }
  alert('All form fields must be filled in');
}
