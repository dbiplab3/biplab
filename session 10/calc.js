const readline= require('readline-sync');
console.log("Working with user Input");

const {Console}= require ("console");
const fs=require('fs');
const myLogger= new Console({
    stdout: fs.createWriteStream("output.txt",{'flags':'a'}),
    stderr:fs.createWriteStream("output.txt",{'flags':'a'})
})

class NotDivideByZero extends Error{
    constructor(message)
    {
        super(message)
    }
}

var a = readline.question("Enter the first digit");
var b = readline.question("Enter the second digit");

a= parseInt(a);
b= parseInt(b);

function add() {
    console.log('Adding 2 numbers: ' + (a + b));
}
function sub() {
    console.log('Subtract 2 numbers: ' + (a - b));
}
function mul() {
    console.log('Multiply 2 numbers: ' + (a * b));
}
function div() {
    if (b == 0) {
        throw new NotDivideByZero("provide proper value to divide");
    }else{
    console.log('Divide 2 numbers: ' + (a / b))
}

}

add();
sub();
mul();
try{
div();
}
catch(error){
    console.log("Error occured" + error);
}

myLogger.log("Normal Log: "+"log message");
myLogger.error("Error Log: "+"error message");
