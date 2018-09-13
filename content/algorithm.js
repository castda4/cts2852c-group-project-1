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


