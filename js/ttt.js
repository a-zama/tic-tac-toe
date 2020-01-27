'use strict'

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');

box1.addEventListener('click', () => {
  box1.classList.add('round');
  box1.textContent = '〇';
})

box2.addEventListener('click', () => {
  box2.classList.add('cross');
  box2.textContent = '×';
})
