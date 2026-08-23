const button = document.getElementById('myButton');
const output = document.getElementById('output');

let count = 0;

button.addEventListener('click', () => {
  count += 1;
  output.textContent = `Clicked ${count} time${count === 1 ? '' : 's'}`;
});
