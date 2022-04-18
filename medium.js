// Write a program to tell if someone is shouting (typing in all caps), 
//whispering (typing in all lowercase), or neither.
// Use prompt to get user input, and then console 
//log whether the user was shouting, whispering, or talking normally.

let userInput = 'Hello'
// // is someone shouting - all uppercase
// // touppercase method

if (userInput === userInput.toUpperCase()){
    console.log('USER IS SHOUTING')
}
else if(userInput === userInput.toLowerCase()){
    console.log('user is whispering')
}
else {console.log('user is talking normally')}