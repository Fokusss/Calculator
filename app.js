let title = document.querySelector(".title");
const buttons = document.querySelectorAll('.button');


/*Кнопки  */
const buttonClear = document.getElementById('Clear');
const buttonPlusMinus = document.getElementById("Plus_minus");
const buttonOne = document.getElementById('One');
const buttonTwo = document.getElementById('Two');
const buttonThree = document.getElementById('Three');
const buttonFour = document.getElementById('Four');
const buttonFive = document.getElementById('Five');
const buttonSix = document.getElementById('Six');
const buttonSeven = document.getElementById('Seven');
const buttonEight = document.getElementById('Eight');
const buttonNine = document.getElementById('Nine');
const buttonZero = document.getElementById('Zero');
const buttonDivision = document.getElementById('Division');
const buttonEqually = document.getElementById('Equally');
const buttonMultiply = document.getElementById('Multiply');
const buttonPlus = document.getElementById('Plus');
const buttonMinus = document.getElementById('Minus');
const buttonPercent = document.getElementById('Percent');
const buttonComma = document.getElementById('Comma');
const buttonMode = document.querySelector('.mode');
const author = document.querySelector('.footer__author');

/*Переменные */
let firstNumber = 0;
let secondNumber = 0;
let v = '';

/* Отображение */
function clear() {
  title.textContent = 0;
}

function changeInNegative() {
  const mas = title.textContent.split("");
  mas.unshift("-");
  const str = mas.join("");
  title.textContent = str;
}

function verifyNumber() {
  const number = title.textContent
  if (number[0] != '-'){
    return true;
  }
  return false;
}

function verifyNull() {
  const number = title.textContent
  if (number[0] !== '0' | number.length > 1){
    return true;
  }
  return false;
}

function changeInPositive() {
  const mas = title.textContent.split('');
  mas.shift();
  const str = mas.join('');
  title.textContent = str;
}

/* Работа кнопок */

function saveDivision() {
  v = '/';
}

function saveMultiply() {
  v = '*';
}

function savePlus() {
  v = '+';
}

function saveMinus() {
  v = '-';
}

function savePrecent(){
  v = '%';
}

function saveFirst(){
  firstNumber = Number(title.textContent);
}

function saveSecond() {
  secondNumber = Number(title.textContent);
}

function division(a, b){
  return (a / b);
}

function multiply(a, b){
  return (a * b);
}

function plus(a, b){
  return (a + b);
}

function minus(a, b){
  return (a - b);
}

function percent(a, b){
  return (b * (a / 100))
}

function equally() {
  if (v === '/'){
    title.textContent = division(firstNumber, secondNumber);
  } else if (v === '*'){
    title.textContent = multiply(firstNumber, secondNumber);
  } else if (v === '+'){
    title.textContent = plus(firstNumber, secondNumber);
  } else if (v === '-'){
    title.textContent = minus(firstNumber,secondNumber);
  } else if (v === '%') {
    title.textContent = percent(firstNumber, secondNumber);
  }
}

function workClear() {
  clear();
  firstNumber = 0;
  secondNumber = 0;
  v = '';
}


function workChangeNumber(){
  if (verifyNull()) {
    if (verifyNumber()){
      changeInNegative();
    } else {
      changeInPositive();
    }
  }
}

function workAddNumber(n){
  if (!verifyNull()) {
    title.textContent = n;
  } else {
    title.textContent += n;
  }
}

function workAddComma() {
  const str = title.textContent;
  if (-1 === str.indexOf('.')){
    title.textContent += '.';
  }
}

function workOperation(n) {
  if (v !== ''){
    saveSecond();
    equally();
  }
  v = n;
  saveFirst();
  clear();
}


function workEqually() {
  saveSecond();
  equally();
}

function workMode() {
  const page = document.querySelector('.page')
  page.classList.toggle('page_mode_light');
  buttonMode.classList.toggle('mode_light');
  author.classList.toggle('footer__author_mode_light');
  title.classList.toggle('title_mode_light');
  console.log(buttons)
  buttons.forEach((element) => {
    element.classList.toggle('button_mode_light');
  })
}




/* Слушатели */
buttonClear.addEventListener("click", workClear);
buttonPlusMinus.addEventListener("click", workChangeNumber);
buttonOne.addEventListener('click', () => workAddNumber(1));
buttonTwo.addEventListener('click', () => workAddNumber(2));
buttonThree.addEventListener('click', () => workAddNumber(3));
buttonFour.addEventListener('click', () => workAddNumber(4));
buttonFive.addEventListener('click', () => workAddNumber(5));
buttonSix.addEventListener('click', () => workAddNumber(6));
buttonSeven.addEventListener('click', () => workAddNumber(7));
buttonEight.addEventListener('click', () => workAddNumber(8));
buttonNine.addEventListener('click', () => workAddNumber(9));
buttonZero.addEventListener('click', () => workAddNumber(0));
buttonDivision.addEventListener('click', () => workOperation('/'));
buttonMultiply.addEventListener('click', () => workOperation('*'));
buttonEqually.addEventListener('click', workEqually);
buttonPlus.addEventListener('click', () => workOperation('+'));
buttonMinus.addEventListener('click', () => workOperation('-'));
buttonPercent.addEventListener('click', () => workOperation('%'));
buttonComma.addEventListener('click', workAddComma);
buttonMode.addEventListener('click', workMode);



