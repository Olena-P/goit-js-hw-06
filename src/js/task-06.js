const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const inputValue = validationInput.value.trim();
  const dataLength = parseInt(validationInput.getAttribute('data-length'));

  validationInput.classList.toggle('valid', inputValue.length === dataLength);
  validationInput.classList.toggle('invalid', inputValue.length !== dataLength);
});

// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.