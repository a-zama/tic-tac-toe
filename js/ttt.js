'use strict'

// const box1 = document.getElementById('box1');
// const box2 = document.getElementById('box2');
// const box3 = document.getElementById('box3');
// const box4 = document.getElementById('box4');
// const box5 = document.getElementById('box5');
// const box6 = document.getElementById('box6');
// const box7 = document.getElementById('box7');
// const box8 = document.getElementById('box8');
// const box9 = document.getElementById('box9');

const boxes = document.querySelectorAll('.box');

let flag =true;

boxes.forEach((box) => {
  box.addEventListener('click', () => {
  if(flag === true){
    box.classList.add('round');
    box.textContent = '〇';
    flag = false;
  }else{
    box.classList.add('cross');
    box.textContent = '×';
    flag = true;
  }
box.classList.add('td-notclickable');

})

});


// boxes.addEventListener('click', () => {
//   if(flag === true){
//     boxes.classList.add('round');
//     boxes.textContent = '〇';
//     flag = false;
//   }else{
//     boxes.classList.add('cross');
//     boxes.textContent = '×';
//     flag = true;
//   }
// boxes.classList.add('td-notclickable');

// })

// box1.addEventListener('click', () => {
//   if(flag === true){
//     box1.classList.add('round');
//     box1.textContent = '〇';
//     flag = false;
//   }else{
//     box1.classList.add('cross');
//     box1.textContent = '×';
//     flag = true;
//   }
// box1.classList.add('td-notclickable');
  
// })

// box2.addEventListener('click', () => {
//   if(flag === true){
//     box2.classList.add('round');
//     box2.textContent = '〇';
//     flag = false;
//   }else{
//     box2.classList.add('cross');
//     box2.textContent = '×';
//     flag = true;
//   }
  
// })
// box3.addEventListener('click', () => {
//   if(flag === true){
//     box3.classList.add('round');
//     box3.textContent = '〇';
//     flag = false;
//   }else{
//     box3.classList.add('cross');
//     box3.textContent = '×';
//     flag = true;
//   }
  
// })
// box4.addEventListener('click', () => {
//   if(flag === true){
//     box4.classList.add('round');
//     box4.textContent = '〇';
//     flag = false;
//   }else{
//     box4.classList.add('cross');
//     box4.textContent = '×';
//     flag = true;
//   }
  
// })
// box5.addEventListener('click', () => {
//   if(flag === true){
//     box5.classList.add('round');
//     box5.textContent = '〇';
//     flag = false;
//   }else{
//     box5.classList.add('cross');
//     box5.textContent = '×';
//     flag = true;
//   }
  
// })
// box6.addEventListener('click', () => {
//   if(flag === true){
//     box6.classList.add('round');
//     box6.textContent = '〇';
//     flag = false;
//   }else{
//     box6.classList.add('cross');
//     box6.textContent = '×';
//     flag = true;
//   }
  
// })
// box7.addEventListener('click', () => {
//   if(flag === true){
//     box7.classList.add('round');
//     box7.textContent = '〇';
//     flag = false;
//   }else{
//     box7.classList.add('cross');
//     box7.textContent = '×';
//     flag = true;
//   }
  
// })
// box8.addEventListener('click', () => {
//   if(flag === true){
//     box8.classList.add('round');
//     box8.textContent = '〇';
//     flag = false;
//   }else{
//     box8.classList.add('cross');
//     box8.textContent = '×';
//     flag = true;
//   }
  
// })
// box9.addEventListener('click', () => {
//   if(flag === true){
//     box9.classList.add('round');
//     box9.textContent = '〇';
//     flag = false;
//   }else{
//     box9.classList.add('cross');
//     box9.textContent = '×';
//     flag = true;
//   }
  
// })

