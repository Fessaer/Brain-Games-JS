#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const actual = readlineSync.question('My I have your name? ');

console.log(`Hello, ${actual}`);
