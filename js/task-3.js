const inputName = document.getElementById('name-input');
inputName.addEventListener('input', printName);
function printName(e) {
  const name = e.target.value.trim() || 'Anonymous';
  document.getElementById('name-output').textContent = name;
}
