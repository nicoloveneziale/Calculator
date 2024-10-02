function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function main(){
    let displayValue = "";
    let num1;
    let num2 = "";
    let operator;
    const display = document.getElementById("display");
    const resultDisplay = document.getElementById("result");
    for(let i = 1; i < 10; i++){
        document.getElementById(i).addEventListener("click", () => {
            displayValue += i;
            display.innerHTML = displayValue;
            if(operator != null){
                num2 += i;
            }
        })
    }
    document.getElementById("+").addEventListener("click",() => {
        if(num2 != ""){
            calculate();
        }
        operator = "+";
        num1 = parseInt(displayValue);
        displayValue += " + ";
        display.innerHTML = displayValue;
    })
    document.getElementById("-").addEventListener("click",() => {
        if(num2 != ""){
            calculate();
        }
        operator = "-";
        num1 = parseInt(displayValue);
        displayValue += " - ";
        display.innerHTML = displayValue;
    })
    document.getElementById("x").addEventListener("click",() => {
        if(num2 != ""){
            calculate();
        }
        operator = "x";
        num1 = parseInt(displayValue);
        displayValue += " x ";
        display.innerHTML = displayValue;
    })
    document.getElementById("/").addEventListener("click",() => {
        if(num2 != ""){
            calculate();
        }
        operator = "/";
        num1 = parseInt(displayValue);
        displayValue += " / ";
        display.innerHTML = displayValue;
    })
    document.getElementById("clear").addEventListener("click",() => {
        num1 = null;
        operator = null;
        num2 = "";
        displayValue = "";
        display.innerHTML = "";
    })
        
    function calculate(){
        if(operator == "+"){
            result = add(num1, parseInt(num2));
        }else if(operator == "-"){
            result = subtract(num1, parseInt(num2));
        }else if(operator == "x"){
            result = multiply(num1, parseInt(num2));
        }else if(operator == "/"){
            result = divide(num1, parseInt(num2));
        }else{
            result = num1;
        }
        display.innerHTML = result;
        displayValue = "";
        displayValue += result;
        num1 = result;
        operator = null;
        num2 = null;
    }

    document.getElementById("=").addEventListener("click", calculate);
}

main();