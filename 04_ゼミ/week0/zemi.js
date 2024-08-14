//DOMによりボタン変数の定義
const A_Button = document.getElementById("a_button")
const B_Button = document.getElementById("b_button")
const C_Button = document.getElementById("c_button")
//答えを表示するテキストの取得
const Answer_area = document.getElementById("answer")

//答えのテキスト
const answer_text = "答えは「えだまめ」か「やきとり」でした"
const wrong_text = "ごぼうなわけないじゃん！！"
//ボタンクリック時の動作の定義
A_Button.onclick = function () {
  Answer_area.textContent = answer_text
}
B_Button.onclick = function () {
  Answer_area.textContent = answer_text
}
C_Button.onclick = function () {
  Answer_area.textContent = wrong_text
}
