// Variables

const themeBtn = document.querySelectorAll(".theme");
const numberKeys = document.querySelectorAll(".number-keys");
const operationKeys = document.querySelectorAll(".operation-keys");
const display = document.querySelector("#display");
const equalKey = document.querySelector(".keys[value='equal']");
const resetKey = document.querySelector(".keys[value='reset']");
const deleteKey = document.querySelector(".keys[value='del']");
let firstNumber = "";
let operation = "";
let secondNumber = "";
let result = "";

// EventListeners
numberKeys.forEach((key) => {
  key.addEventListener("click", takingInput);
});

operationKeys.forEach((key) => {
  key.addEventListener("click", operationKeysHandler);
});

equalKey.addEventListener("click", calculation);

deleteKey.addEventListener("click", deleteKeyHandler);

resetKey.addEventListener("click", reset);

themeBtn.forEach((themeToggle) => {
  themeToggle.addEventListener("change", themeShift);
});

// window.addEventListener("click", () => {
//   console.log(`first no ${firstNumber}`);
//   console.log(`operation ${operation}`);
//   console.log(`second no ${secondNumber}`);
//   console.log(`result ${result}`);
// });

// Functions
function takingInput(event) {
  let key = event.target.value;
  if (operation === "") {
    if (result != "") {
      reset();
    }
    firstNumber = firstNumber.concat(key);
    display.innerText = firstNumber;
  } else {
    secondNumber = secondNumber.concat(key);
    display.innerText = secondNumber;
  }
}

function calculation() {
  if (result != "") {
    firstNumber = result;
  }
  let numberOne = Number(firstNumber);
  let numberTwo = Number(secondNumber);
  if (operation === "+") {
    result = numberOne + numberTwo;
  } else if (operation === "-") {
    result = numberOne - numberTwo;
  } else if (operation === "*") {
    result = numberOne * numberTwo;
  } else if (operation === "/") {
    result = numberOne / numberTwo;
  }
  firstNumber = "";
  secondNumber = "";
  operation = "";
  display.innerText = result;
}

function operationKeysHandler(event) {
  if (result != "") {
    firstNumber = result;
  }
  if (firstNumber != "" && secondNumber != "") {
    calculation();
    operation = event.target.value;
  }
  operation = event.target.value;
}

function reset() {
  firstNumber = "";
  secondNumber = "";
  operation = "";
  result = "";
  display.innerText = "";
}

function deleteKeyHandler() {
  if (display.innerText == firstNumber && result == "") {
    firstNumber = firstNumber.substring(0, firstNumber.length - 1);
    display.innerText = firstNumber;
  } else if (display.innerText == secondNumber && operation != "") {
    secondNumber = secondNumber.substring(0, secondNumber.length - 1);
    display.innerText = secondNumber;
  }
}

function themeShift() {
  if (document.querySelector(".theme[value='theme-1']").checked) {
    document.body.classList.remove("theme-2");
    document.body.classList.remove("theme-3");
  } else if (document.querySelector(".theme[value='theme-2']").checked) {
    document.body.classList.add("theme-2");
    document.body.classList.remove("theme-3");
  } else if (document.querySelector(".theme[value='theme-3']").checked) {
    document.body.classList.remove("theme-2");
    document.body.classList.add("theme-3");
  }
}
