function addition() {
    var num1 = Number(prompt("Enter the first number you would like to add."));
    var sum = num1+num2;
    
    
    if( isNaN(num1) || num1=== "" ){

        alert("Invalid First number");
        
    }

    var num2 = Number(prompt("Enter the second number you would like to add."));
     if (isNaN(num2) || num2=== ""){
        alert("Invalid Second number");
    }

    alert(num1 + "+" +num2+"="+ sum);
}

function subtraction() {
    var num1 = Number(prompt("Enter the First number you want to Subtract."));
     var sum = num1-num2;
    

    if( isNaN(num1) || num1=== "" ){

alert("Invalid First number");
            }

            var num2 = Number(prompt("Enter the Second number you want to Subtract."));
           
            if (isNaN(num2) || num2=== ""){
            alert("Invalid Second number");
                }

    alert(num1+"-"+num2+"="+sum);
}

function multiplication(){
    
    var num1 = Number(prompt("Enter the First number you want to Multiply."));
    var sum = num1*num2;
    

    
    
    if(  isNaN(num1) || num1=== "" ){

    alert("Invalid First number");
        }
    
        var num2 = Number(prompt("Enter the Second number you want to Multiply."));

        if (isNaN(num2) || num2=== ""){
    alert("Invalid Second number");
}

    alert(num1+"*"+num2+"="+sum);
}

function division(){
   

    var num1 = Number(prompt("Enter the First number you want to Divide."));
     var sum = num1/num2;
    

    if(  isNaN(num1) || num1=== "" ){

    alert("Invalid First number");
    }

    var num2 = Number(prompt("Enter the Second number you want to Divide."));

    if (isNaN(num2) || num2=== ""){
    alert("Invalid Second number");
    }

    alert(num1+"/"+num2+"="+sum);
}
