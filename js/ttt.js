'use strict'

// box を取得
const boxes = document.querySelectorAll('.box');
// Array に変換 ※IE11対策…らしい
const boxesArray = [].slice.call(boxes);

// message-b を取得
const message = document.getElementById('message-b');

// タテ・ヨコ・ナナメの列を配列化
function filterById(targetArray, idArray) {
  return targetArray.filter(function(e) {
    return (e.id === idArray[0] || e.id === idArray[1] || e.id === idArray[2]);
  });
}

const line1 = filterById(boxesArray, ['1-1', '1-2', '1-3']);
const line2 = filterById(boxesArray, ['2-1', '2-2', '2-3']);
const line3 = filterById(boxesArray, ['3-1', '3-2', '3-3']);
const line4 = filterById(boxesArray, ['1-1', '2-1', '3-1']);
const line5 = filterById(boxesArray, ['1-2', '2-2', '3-2']);
const line6 = filterById(boxesArray, ['1-3', '2-3', '3-3']);
const line7 = filterById(boxesArray, ['1-1', '2-2', '3-3']);
const line8 = filterById(boxesArray, ['1-3', '2-2', '3-1']);

const lineArray = [line1, line2, line3, line4, line5, line6, line7, line8];

// 勝敗判定
function isWinner(symbol) { 
  const result = lineArray.some(function (line) {
    const subResult = line.every(function (box) {
      if (symbol === 'maru') {
        return box.textContent.contains('〇');
      } else 
      if (symbol === 'batsu') {
        return box.textContent.contains('×');
      }
    });
    return subResult;
  });
  return result;
}

// flagがfalseのときバツのターン、trueのときマルのターン
let flag =true;

boxes.forEach((box) => {
  box.addEventListener('click', () => {
  if (flag === true){
    box.classList.add('round');
    box.textContent = '〇';
    
    // マル勝利判定
    if (isWinner('maru')) {
      message.textContent = '〇の勝ち！';
      return;
    }
    
    message.textContent = '×の番です';
    flag = false;

  } else {
    box.classList.add('cross');
    box.textContent = '×';

     // バツ勝利判定
     if (isWinner('batsu')) {
      message.textContent = '×の勝ち！';
      return;
    }

    message.textContent = '〇の番です';
    flag = true;
  }

box.classList.add('td-notclickable');



})
})







