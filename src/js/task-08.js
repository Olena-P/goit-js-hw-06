const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formObject = Object.fromEntries(new FormData(loginForm));
  
  if (!formObject.email || !formObject.password) {
    alert('Всі поля повинні бути заповнені!');
  } else {
    console.log(formObject);
    loginForm.reset();
  }
});
