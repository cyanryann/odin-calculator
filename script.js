let first = 0;
let second = 0;
let operator = "+";
let answer = 0;
let lastAnswer = 0;
const output = document.querySelector(".output");

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
function operation() {
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
            answer = divide(first, second);
        }
        
    }
    else
    {
        output.innerHTML = "uhhh what the heck";
    }
    lastAnswer = answer;
}