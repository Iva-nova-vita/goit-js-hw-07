const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('input[type="email"]');
const inputPassword = document.querySelector('input[type="password"]');
form.addEventListener('submit', formSubmit);

function formSubmit(e) {
  e.preventDefault();

  const email = e.target.elements.email.value.trim();
  const password = e.target.elements.password.value.trim();

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
