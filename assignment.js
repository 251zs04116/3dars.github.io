let currentAnswer = 0;

function nextQuestion() {
    const num1 = Math.floor(Math.random() * 11);
    const num2 = Math.floor(Math.random() * 11);
    currentAnswer = num1 + num2;

    document.getElementById('question').innerText = `${num1} + ${num2}`;
    document.getElementById('result').innerText = "";
    document.getElementById('user-input').value = "";
    document.getElementById('user-input').focus();
 }

function checkAnswer() {
     const userAnswer = Number(document.getElementById('user-input').value);
     const resultElement = document.getElementById('result');

    if (userAnswer === currentAnswer) {
        resultElement.innerText = "正解！";
    } else {
        resultElement.innerText = "不正解";
     }
}

nextQuestion();




