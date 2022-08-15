// For each issue, uncomment the relevant code and fix the code so that it meets the desired functionality.
// Note that it may be helpful to comment out issues you are done with to reduce the number of prompts.

// issue 1
// let username = prompt("Enter a new username:");
// if (username.length > 2) {
//   if (username[0] === "a") {
//     alert("Your username can not start with a");
//   } else {
//     alert("Username successfully created.");
//   }
// } else {
//   alert("Your username needs to be at least 4 letters long");
// }

//Problem Solved
let username = prompt("Enter a new username:");

if (username.length >= 4) {
  if (username[0] === "a") {
    alert("Your username can not start with a");
  } else {
    alert("Username successfully created.");
  }
} else {
  alert("Your username needs to be at least 4 letters long");
}
console.log(username);

// issue 2
// let userAgeAnswer = prompt('Are you older than 21? Answer yes or no.')
// if(userAgeAnswer > 21){
//   alert('Awesome, welcome to our website!')
// } else {
//   alert('Visit us when you are 21!')
// }

//Problem Solved
/*let userAgeAnswer = prompt("Are you older than 21? Answer yes or no.");
if (userAgeAnswer == 21) {
  alert("Awesome, welcome to our website!");
} else {
  alert("Visit us when you are 21!");
}
console.log(userAgeAnswer);
*/
// issue 3
// let defaultValues = {
//   message: 'This department has joined with customer service. Please view the customer service page for more details.',
//   phoneExt: 361
// }
// let userInput = prompt('Please enter the phone extension for the department you want to submit a ticket for.')
// if(defaultValues.phoneExt === userInput){
//   alert(defaultValues.message)
// }

// issue 4
// let firstName = prompt('Enter your first name:')
// let lastName = prompt('Enter your last name:')

// if(firstName || lastName){
//   createUserName(firstName, lastName)
// } else {
//   alert('Please enter a first and last name.')
// }

// function createUserName(name1, name2) {
//   let name = `${name1}  ${name2}`
//   alert(`Thank you ${name}`)
// }

// issue 5
// let userResponse = prompt('Please rate your experience from 1-10.')
// let numValue = Math.round(Number(userResponse))
// if (numValue > 0 && numValue <= 10) {
//   alert(`Thank you for your response.`)
// }
