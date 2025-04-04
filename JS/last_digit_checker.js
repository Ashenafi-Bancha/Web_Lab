function checkLastDigit() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let num3 = parseInt(document.getElementById("num3").value);
  let resultBox = document.getElementById("result");

  // Input Validation
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      resultBox.innerHTML = "Please enter valid numbers!";
      resultBox.style.color = "red";
      return;
  }

  // Get last digits
  let lastDigit1 = num1 % 10;
  let lastDigit2 = num2 % 10;
  let lastDigit3 = num3 % 10;

  // Check if last digits are the same
  if (lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3) {
      resultBox.innerHTML = "&#x2705; All numbers have the same last digit!";
      resultBox.style.color = "#28a745";
  } else {
      resultBox.innerHTML = "&#x274C; Numbers do NOT have the same last digit.";
      resultBox.style.color = "#dc3545";
  }
}
