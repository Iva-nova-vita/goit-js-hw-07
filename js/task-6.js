const inputNumber = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

btnCreate.addEventListener('click', checkAmount);
btnDestroy.addEventListener('click', destroyBoxes);

function checkAmount() {
  const amount = +inputNumber.value;
  if (amount > 0 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    clearInput();
  }
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const div = document.createElement('div');
    div.style.width = 30 + i * 10 + 'px';
    div.style.height = 30 + i * 10 + 'px';
    div.style.backgroundColor = color;
    document.getElementById('boxes').append(div);
  }
}

function destroyBoxes() {
  document.getElementById('boxes').innerHTML = '';
}

function clearInput() {
  inputNumber.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
