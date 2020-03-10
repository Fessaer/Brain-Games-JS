#!/usr/bin/env node
import { getRandom, currectFun } from "./brain-even.js";
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");

export const name = readlineSync.question("My I have your name? "); // говорим имя

console.log(`Hello, ${name}`); //приветствие

console.log('Answer "yes" if the number is even, otherwise answer "no"'); //условия игры

currectFun(name);
