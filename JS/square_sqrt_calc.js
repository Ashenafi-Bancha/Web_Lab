function calculateResult() {
  let num = parseFloat(document.getElementById("numberInput").value);
  let resultBox = document.getElementById("result");

  if (isNaN(num)) {
      resultBox.innerHTML = "Please enter a valid number!";
      resultBox.style.color = "red";
      return;
  }

  let result;
  if (num < 0) {
      result = `The number is negative. Square: ${num * num}`;
      resultBox.style.color = "#ff3b6e";
  } else {
      result = `The number is positive. Square Root: ${Math.sqrt(num).toFixed(2)}`;
      resultBox.style.color = "#28a745";
  }

  resultBox.innerHTML = result;
}

function resetCalc() {
  document.getElementById("numberInput").value = "";
  document.getElementById("result").innerHTML = "";
}
