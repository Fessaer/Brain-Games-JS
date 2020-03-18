#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { currectFun } from './brain-even.js';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('My I have your name? '); // говорим имя

console.log(`Hello, ${name}`); // приветствие

console.log('Answer "yes" if the number is even, otherwise answer "no"'); // условия игры

currectFun(name);
