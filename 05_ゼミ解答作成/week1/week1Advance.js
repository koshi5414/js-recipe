const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const image = document.querySelector('img'); 

const answer = document.getElementById('answer');

function disableOtherButtons(clickedButton) {
    if (clickedButton !== button1) button1.disabled = true;
    if (clickedButton !== button2) button2.disabled = true;
    if (clickedButton !== button3) button3.disabled = true;
}


button1.onclick = function() {
  answer.textContent = '正解！';
  disableOtherButtons(button1);
}
button2.onclick = function() {
  answer.textContent = '不正解！';
  disableOtherButtons(button2);
}
button3.onclick = function() {
    answer.textContent = '不正解！';
    disableOtherButtons(button3);
}
button4.onclick = function() {
    if (image.src.includes('hobby.png')) {
        image.src = 'fig/hobby2.jpg'; // 新しい画像
    } else {
        image.src = 'fig/hobby.png'; // 元の画像
    }
};