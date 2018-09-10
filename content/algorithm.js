function addition(){
    var sum = num1+num2;
    var text = "=";
    var num1 = Number(prompt("Enter the first number you would like to add."));
    
    
    if( isNaN(num1) || num1=="" ){

        alert("Invalid First number")
        
    }

    var num2 = Number(prompt("Enter the second number you would like to add."));
     if (isNaN(num2) || num2==""){
        alert("Invalid Second number")
    }

    alert(num1 + "+" +num2+ text+ sum)
}

function subtraction() {
    var sum = num1-num2;
    var text = "=";

    var num1 = Number(prompt("Enter the First number you want to Subtract."));
    

    if( isNaN(num1) || num1=="" ){

alert("Invalid First number")
            }

            var num2 = Number(prompt("Enter the Second number you want to Subtract."));
           
            if (isNaN(num2) || num2==""){
            alert("Invalid Second number")
                }

    alert(num1+"-"+num2+text+sum)
}

function multiplication(){
    var sum = num1*num2;
    var text = "=";

    var num1 = Number(prompt("Enter the First number you want to Multiply."));
    
    if(  isNaN(num1) || num1=="" ){

    alert("Invalid First number")
        }
    
        var num2 = Number(prompt("Enter the Second number you want to Multiply."));

        if (isNaN(num2) || num2==""){
    alert("Invalid Second number")
}

    alert(num1+"*"+num2+text+sum)
}

function division(){
    var sum = num1/num2;
    var text = "=";

    var num1 = Number(prompt("Enter the First number you want to Divide."));
    

    if(  isNaN(num1) || num1=="" ){

    alert("Invalid First number")
    }

    var num2 = Number(prompt("Enter the Second number you want to Divide."));

    if (isNaN(num2) || num2==""){
    alert("Invalid Second number")
    }

    alert(num1+"/"+num2+text+sum)
}
