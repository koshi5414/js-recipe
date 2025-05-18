const quizText = document.getElementById("quiz-text");
const quizImage = document.getElementById("quiz-image");
const feedback = document.getElementById("feedback");
const quizButtons = document.getElementById("quiz-buttons");

const nextButton = document.createElement("button");
nextButton.textContent = "次へ";
nextButton.style.display = "none";
document.body.append(nextButton); // 最後にbodyに追加しておく

const quizzes = [
  {
    text: "この星の名前は何でしょう？",
    image: "https://i.gyazo.com/546ba7abc3b7e11e105b47737527bf39.png",
    choices: [
      { text: "ゴリアテ", feedback: "残念！ゴリアテは旧約聖書の巨人だよ。" },
      { text: "ゼニガメ", feedback: "残念！ゼニガメはカメポケモンだよ。" },
      { text: "ガニメデ", feedback: "正解！木星の衛星だよ！", correct: true },
    ],
  },
  {
    text: "この動物の名前は？",
    image: "images/panda.jpg",
    choices: [
      { text: "パンダ", feedback: "正解！笹を食べるかわいいやつ！", correct: true },
      { text: "コアラ", feedback: "残念！コアラはオーストラリア出身だよ。" },
      { text: "タヌキ", feedback: "残念！全然ちがうね！" },
    ],
  },
];

let currentQuizIndex = 0;

const reloadQuiz = function () {
  const quiz = quizzes[currentQuizIndex];
  quizText.textContent = "Q. " + quiz.text;
  quizImage.src = quiz.image;
  feedback.textContent = "";
  quizButtons.innerHTML = "";
  nextButton.style.display = "none";

  for (let i = 0; i < quiz.choices.length; i++) {
    const button = document.createElement("button");
    button.textContent = quiz.choices[i].text;
    button.onclick = function () {
      choose(i);
      // 正解なら「次へ」ボタンを表示
      if (quiz.choices[i].correct) {
        nextButton.style.display = "inline-block";
      }
    };
    quizButtons.append(button);
  }
};

const choose = function (choiceNumber) {
  const quiz = quizzes[currentQuizIndex];
  feedback.textContent = quiz.choices[choiceNumber].feedback;
};

nextButton.onclick = function () {
  currentQuizIndex++;
  if (currentQuizIndex < quizzes.length) {
    reloadQuiz();
  } else {
    quizText.textContent = "クイズは以上です！";
    quizImage.style.display = "none";
    quizButtons.innerHTML = "";
    feedback.textContent = "";
    nextButton.style.display = "none";
  }
};

// 最初のクイズを表示
reloadQuiz();
