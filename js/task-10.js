function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

let boxCount = 0; // Variable to keep track of the total number of boxes created

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes'); 
  let size = 30; // The dimensions of the very first <div> are 30px by 30px.

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    size += 10; // Each element after the first one should be 10px wider and higher than the previous one.
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor(); // All elements must have a random HEX background color. Use the ready-made getRandomHexColor function to get a color.
    boxesContainer.appendChild(box);
    boxCount++;
  }
}

function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = ''; // Set empty html
  boxCount = 0; // Reset box count
}

document.querySelector('[data-create]').addEventListener('click', function () {
  const amount = document.querySelector('input').value;
  createBoxes(parseInt(amount));
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);