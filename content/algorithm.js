function addition()
{
  // initialize variables
  var sum, num1, num2;

  // check for first number
   num1 = parseFloat(prompt("Enter first number",""));
  if (isNaN(num1)) {
        alert("Invalid First number");

  }

  // check for second number
  num2 = parseFloat(prompt("Enter second number",""));
  if (isNaN(num2)) {

    alert("Invalid First number");
  }

  // the operator can be exchanged + - / *
  sum = num1 + num2;

  // alert to user
  alert(num1 + " + " + num2 + " = " + sum);
}


