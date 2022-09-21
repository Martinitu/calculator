var add = function(a, b) {
return a += b;
}
var subtract = function(a, b) {
    return a - b;
    }
var multiply = function(a, b) {
    return a * b;
    }
var divide = function(a, b) {
        return a / b;
        }

var operate = function(op, a, b) {
    return   op(a, b)
    
     

}


let display = document.getElementById("display")
let displayValue = 0;
let firstValue = 0;
let secondValue = 0
let operator 
let result

let buttons = Array.from(document.getElementsByClassName("button"));

function firstNumber(){
    firstValue = displayValue;
    displayValue = 0;
    display.innerText = "";
} 
function secondNumber(){
    secondValue = displayValue;
    result = operate(operator, firstValue, secondValue);
    let resultrounded = Math.round(result * 1000) /1000;
    display.innerText = resultrounded;
    firstValue = resultrounded
    secondValue = 0;
    displayValue = 0
}

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case "AC": display.innerText = "";
                       displayValue = display.innerText;;
                       firstValue = 0;
                       secondValue = 0;
                       displayValue = 0;
            break
            case "=": 
                    secondValue = displayValue;
                    result = operate(operator, firstValue, secondValue);
                    let resultrounded = Math.round(result * 1000) /1000;
                    display.innerText = resultrounded;
                    firstValue = resultrounded
                    secondValue = 0;
                   
                    displayValue = 0;
                    
                    console.log(firstValue, secondValue, displayValue, operator)
            break
            case "+": 
                        
                    if (firstValue == 0) {
                        operator = add;
                        firstNumber();
                    } else  {
                        operator = add;
                        secondNumber();
                    } 
                    console.log(firstValue, secondValue, displayValue, operator)
            break
            case "-": 
                        
            if (firstValue == 0) {
                operator = subtract;
                firstNumber();
            
            } else  {
                operator = subtract;
                secondNumber();
               
            } 
            console.log(firstValue, secondValue, displayValue, operator)
    break
    case "X": 
                        
            if (firstValue == 0) {
                operator = multiply;
                firstNumber();
    
            } else if (secondValue == 0 && displayValue != 0) {
               operator = multiply;
               secondNumber();
       
    } 
    console.log(firstValue, secondValue, displayValue, operator)
break
   

    case "/": 
                        
    if (firstValue == 0) {
        operator = divide
        firstNumber();
    
    } else if (secondValue == 0 && displayValue != 0) {
        operator = divide
        secondNumber();
       
    } 
    console.log(firstValue, secondValue, displayValue, operator)
break
            default: 
                    if (displayValue == 0 && display.innerText != "" ) {
                        display.innerText = "";
                        display.innerText += e.target.innerText;
                        displayValue = parseInt(display.innerText);

                    } else {
                        display.innerText += e.target.innerText;
                        displayValue = parseInt(display.innerText);
                  
                    }
                    console.log(firstValue, secondValue, displayValue)
                  
        }
    } )
})
