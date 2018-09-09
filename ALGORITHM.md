The algorithm we'll be using is the following:
```javascript
//Example for addition, but the operator can
//be swapped out and the alert adjusted.

// initialize variables
function nameOfFunction()
{
  // initialize variables
  var x, y, z;

  // check for first number
  do x = parseFloat(prompt("Enter first number",""));
  while (isNaN(x));

  // check for second number
  do y = parseFloat(prompt("Enter second number",""));
  while (isNaN(y));

  // the operator can be exchanged + - / *
  z = x + y;

  // alert to user
  alert("Addition of " + x + " and " + y + " is " + z);
}
```
