const readline=require('readline-sync');
console.log("working with user input");

var firstname=readline.question("Enter your first Name");
var lastname=readline.question("Enter your last Name");
var email=readline.question("Enter your email");
var address=readline.question("Enter your address");
var contact=readline.question("Enter your contact");

console.log("user details");
console.log("First Name: "+firstname);
console.log("Last Name: "+lastname);
console.log("Email: "+email);
console.log("Address: "+address);
console.log("Contact: "+contact);

console.log("Kindly check your details are you sure to register?")
var op= readline.question("Enter Y to continue and enter N to discontinue")
