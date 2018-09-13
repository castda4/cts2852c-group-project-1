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

// function subtracts two numbers supplied by user
function subtraction(){

  // initialize variables
  var x;
  var y;
  var z;

  // check first number is a number
   x = parseFloat(prompt("Enter first number",""));
  if(isNaN(x)){
    alert("Please enter a number.");
  }

  // check second number is a number
   y = parseFloat(prompt("Enter second number",""));
  if(isNaN(y)){
    alert("Please enter a number.");
  }

  //Doing the math
 z = y - x

  // alert to user to give answer
  alert("subtracting " + x + " from " + y + " equals " + z);
}

function multiplication()
{
  // initialize variables
  var x, y, ans;

  // check for numbers
  do
  {
    x = parseFloat(prompt("Enter first number",""));
    console.log("for x received " + x);
  }
  while (isNaN(x));
  do
  {
    y = parseFloat(prompt("Enter second number",""));
    console.log("for y received " + y);
  }
  while (isNaN(y));

  // math
  ans = x * y;
  console.log("answer is " + ans)

  // alert to user
  alert("Multiplication of " + x + " and " + y + " is " + ans);
}

function division()
{
  // initialize variables
  var x, y, ans;

  // check for number
  do
  {
    x = parseFloat(prompt("Enter first number",""));
    console.log("for x received " + x);
  }
  while (isNaN(x));
  do
  {
    y = parseFloat(prompt("Enter second number",""));
    console.log("for y received " + y);
  }
  while (isNaN(y));

  // math
  ans = x / y;
  console.log("answer is " + ans)

  // alert to user
  alert("Division of " + x + " by " + y + " is " + ans);
}
