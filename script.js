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

let equals = function() {
    
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
                    result = operate(operator, firstValue, secondValue)
                    display.innerText = result;
                    firstValue = result
                    secondValue = 0;
                   
                    displayValue = 0;
                    
                    console.log(firstValue, secondValue, displayValue, operator)
            break
            case "+": 
                        
                    if (firstValue == 0) {
                        operator = add
                        firstValue = displayValue;
                        displayValue = 0;
                        display.innerText = "";
                    
                    } else  {
                        operator = add
                        secondValue = displayValue;
                        
                        result = operate(operator, firstValue, secondValue)
                        display.innerText = result;
                        firstValue = result
                        secondValue = 0;
                        displayValue = 0
                       
                    } 
                    console.log(firstValue, secondValue, displayValue, operator)
            break
            case "-": 
                        
            if (firstValue == 0) {
                operator = subtract
                firstValue = displayValue;
                displayValue = 0;
                display.innerText = "";
            
            } else  {
                operator = subtract
                secondValue = displayValue;
                
                result = operate(operator, firstValue, secondValue)
                display.innerText = result;
                firstValue = result
                secondValue = 0;
                displayValue = 0
               
            } 
            console.log(firstValue, secondValue, displayValue, operator)
    break
    case "X": 
                        
    if (firstValue == 0) {
        operator = multiply
        firstValue = displayValue;
        displayValue = 0;
        display.innerText = "";
    
    } else if (secondValue == 0 && displayValue != 0) {
        operator = multiply
        secondValue = displayValue;
        
        result = operate(operator, firstValue, secondValue)
        display.innerText = result;
        firstValue = result
        secondValue = 0;
        displayValue = 0
       
    } 
    console.log(firstValue, secondValue, displayValue, operator)
break
   

    case "/": 
                        
    if (firstValue == 0) {
        operator = divide
        firstValue = displayValue;
        displayValue = 0;
        display.innerText = "";
    
    } else if (secondValue == 0 && displayValue != 0) {
        operator = divide
        secondValue = displayValue;
        
        result = operate(operator, firstValue, secondValue)
        display.innerText = result;
        firstValue = result
        secondValue = 0;
        displayValue = 0
       
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
