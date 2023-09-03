const nameOutput = document.getElementById('name-output');
const nameInput = document.getElementById("name-input");

let currentName = "Anonymous";

const updateName = () => {
    if (nameInput.value === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = nameInput.value;
    }
};
  
nameInput.addEventListener('input', updateName);

// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".