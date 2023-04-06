const box =
  document.querySelector('#box');

box.addEventListener('mousedown', changeColor);

box.addEventListener('mouseup', () => {
  box.style.backgroundColor = '#f8f8f2';
});

function remove() {
  box.removeEventListener('mousedown', changeColor);
}

function changeColor() {
  box.style.backgroundColor = 'red';
}

