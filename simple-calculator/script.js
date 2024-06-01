document.getElementById("add").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const result = add(number1, number2);
  document.getElementById("result").innerText = result;
});

document.getElementById("subtract").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const result = subtract(number1, number2);
  document.getElementById("result").innerText = result;
});

document.getElementById("multiply").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const result = multiply(number1, number2);
  document.getElementById("result").innerText = result;
});

document.getElementById("divide").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const result = divide(number1, number2);
  document.getElementById("result").innerText = result;
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Ділення на нуль!";
  }
  return a / b;
}
