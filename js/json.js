const fs =require('fs');

let data = fs.readFileSync('./data/personas.json');
console.log(data);
