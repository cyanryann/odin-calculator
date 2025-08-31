let first = 0;
let second = 0;
let operator = "+";
let answer = 0;
let lastAnswer = 0;
let firstNumberSelected = false;
let completeOperation = false;
const output = document.querySelector(".output");
const operators = document.querySelectorAll(".operations button");
const numbers = document.querySelectorAll(".numbers button");

function add(a,b) {
    return a + b;
}
function subtract(c, d) {
    return c-d;
}
function multiply(e, f) {
    return e*f;
}
function divide(g, h) {
    return g/h;
}
function operate() {
    if (firstNumberSelected && output.innerHTML != "")
    {
        second = parseFloat(output.innerHTML);
        if (operator == "+")
        {
            answer = add(first, second);
        }
        else if (operator == "-")
        {
            answer = subtract(first, second);
        }
        else if (operator == "*")
        {
            answer = multiply(first, second);
        }
        else if (operator == "/")
        {
            if (second == 0)
            {
                answer = 0;
                output.innerHTML = "ERROR: Divide by Zero";
            }
            else
            {
                answer = Math.round(divide(first, second) * 100) / 100;
            }
        
        }
        else
        {
            output.innerHTML = "uhhh what the heck";
        }
        lastAnswer = answer;
        output.innerHTML = first + " " + operator + " " + second + " = " + answer;
        firstNumberSelected = false;
        first = 0;
        second = 0;
        completeOperation = true;
    }
    
}
function changeOperator(op) {
    console.log("operation ran")
    if (firstNumberSelected && output.innerHTML != "")
    {
        operator = op;
        operate();
        firstNumberSelected = true;
        first = lastAnswer;
    }
    else if (!firstNumberSelected && output.innerHTML != "")
    {
        operator = op;
        console.log("operation chosen is " + operator);
        first = parseFloat(output.innerHTML);
        console.log("first number is " + first);
        output.innerHTML = "";
        firstNumberSelected = true;
    }
}
operators.forEach((button) => {
    
    if (button.id != "solve")
    {
        console.log("adding listener " + button.innerHTML);
        button.addEventListener("click", () => changeOperator(button.innerHTML));
    }
    else {
        button.addEventListener("click", () => operate());
    }
})
numbers.forEach((button) => {
    if (button.innerHTML == "CLR")
    {
        button.addEventListener("click", () =>{
            output.innerHTML = "";
            first = 0;
            second = 0; 
            firstNumberSelected = false;
        })
        
    }
    else if (button.innerHTML == "ANS")
    {
        button.addEventListener("click", () => {
            if (completeOperation)
            {
                output.innerHTML = "";
                completeOperation = false;
            }
            output.innerHTML = lastAnswer;
        })
    }
    else {
        button.addEventListener("click", () => {
            if (completeOperation)
            {
                output.innerHTML = "";
                completeOperation = false;
            }
            output.innerHTML += button.innerHTML;
        })
    }
})
