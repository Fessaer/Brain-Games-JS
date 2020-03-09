#!/usr/bin/env node
import { getRandom } from 'brain-even.js';

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const actual = readlineSync.question('My I have your name? ');

console.log(`Hello, ${actual}`);

console.log('Answer "yes" if the number is even, otherwise answer "no"');

console.log(getRandom(1, 10));
