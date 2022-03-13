const fs=require('fs');

data= fs.readFileSync("user.txt");

console.log(data.toString());