import readlineSync from 'readline-sync';

import { gameCalc } from './brain-even.js';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('My I have your name? '); // говорим имя

console.log(`Hello, ${name}`); // приветствие

console.log('What is the result of the expression?'); // условия игры

gameCalc(name);
