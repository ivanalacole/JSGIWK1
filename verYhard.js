// Create a simple calculator that prompts the user for a number, 
//an operator (either +, -, * or /)
// and another number, and then uses the functions created in the hard challenge to output the value
// in sentence form. Example output: "3 + 4 = 7"


let firstNum = Number(prompt('Please enter number'))

//create prompt to have user select operetor
let operator = prompt('Please pick operator + , - , * , /')

//create a prompt to output second number
let secondNum = Number(prompt('Please enter number'))

let result = prompt('You have your answer')


if(operator === '+' ) {
   let result = firstNum + secondNum
   console.log(`${firstNum} ${operator} ${secondNum} = ${result}`)
}else if(operator === '-') {
   let result = firstNum - secondNum
   console.log(`${firstNum} ${operator} ${secondNum} = ${result}`)
}else if( operator === '*') {
    let result = firstNum * secondNum
    console.log(`${firstNum} ${operator} ${secondNum} = ${result}`)
}else if(operator === '/') {
   let result = firstNum / secondNum
   console.log(`${firstNum} ${operator} ${secondNum} = ${result}`)
}else{
    console.log('Please select valid operator');