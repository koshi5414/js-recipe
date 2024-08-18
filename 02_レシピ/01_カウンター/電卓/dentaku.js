// イベントが発生する要素を取得する
const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}

// 関数を登録
button.onclick = alertMessage

//const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

/*const logValue = function (i) {
  //console.log(e.target.value)
  console.log(i)
}

inputText.oninput = logValue*/

inputDate.oninput = function (e) {
  console.log(e.target.value)
}

document.onkeydown = function (e) {
  console.log(e.key)
}
