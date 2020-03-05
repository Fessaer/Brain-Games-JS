import readlineSync from 'readline-sync';  
let name = readlineSync.question('May I have your name? ');
console.log('Hello, ' + name);
