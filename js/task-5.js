const btnChangeColor = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const bodyEl = document.querySelector('body');
btnChangeColor.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  const color = getRandomHexColor();
  colorSpan.textContent = color;
  bodyEl.style.backgroundColor =color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
