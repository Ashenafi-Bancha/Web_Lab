function calculateSum() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let resultBox = document.getElementById("result");

  // Check if the inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
      resultBox.innerHTML = "Please enter valid numbers!";
      resultBox.style.color = "red";
      return;
  }

  // Compute the sum
  let sum = num1 + num2;
  if (num1 === num2) {
      sum *= 3;
  }

  // Display the result
  resultBox.innerHTML = `Result: ${sum}`;
  resultBox.style.color = "#ff3e6b";
}
