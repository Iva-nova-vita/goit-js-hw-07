const inputName = document.getElementById('name-input');
const inputOutput = document.getElementById('name-output');
inputName.addEventListener('input', printName);
function printName() {
  const name = inputName.value.trim() || 'Anonymous';
  inputOutput.textContent = name;
}
