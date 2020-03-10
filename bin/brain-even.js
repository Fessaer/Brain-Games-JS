import readlineSync from "readline-sync";
// import { name } from "./brain-games";
export function getRandom(min, max) {
  //функция создания рандомного числа
  return Math.floor(Math.random() * (max - min)) + min;
}

// говорим имя

// console.log(`Hello, ${name}`); //приветствие

// console.log('Answer "yes" if the number is even, otherwise answer "no"'); //условия игры

export const currectFun = str => {
  const temp = `"yes" is wrong answer ;(. Correct answer was "no".\n Let's try again, ${str}!`;
  let result = "";

  for (let i = 0; i < 5; i++) {
    const num = getRandom(1, 100); //создаем рандомное число число
    console.log(`Question: ${num}`); //выводим рандомное число от 1 до 10
    const string = readlineSync.question("Your answer: "); //вводим число
    if (string !== "yes" && string !== "no") {
      console.log(
        `"yes" is wrong answer ;(. Correct answer was "no".\n Let's try again, ${str}!`
      );
      result = `"yes" is wrong answer ;(. Correct answer was "no".\n Let's try again, ${str}!`;
      break;
    }
    if (string === "yes" && num % 2 === 0) {
      console.log("Correct!");
      result = "Correct!";
      continue;
    }
    if (string === "no" && num % 2 !== 0) {
      console.log("Currect!");
      result = "Correct!";
      continue;
    }
    if (string === "yes" && num % 2 !== 0) {
      console.log(
        `"yes" is wrong answer ;(. Correct answer was "no".\n Let's try again, ${str}!`
      );
      result = `"yes" is wrong answer ;(. Correct answer was "no".\n Let's try again, ${str}!`;
      break;
    }
    if (string === "no" && num % 2 === 0) {
      console.log(
        `"no" is wrong answer ;(. Correct answer was "yes".\n Let's try again, ${str}!`
      );
      result = `"yes" is wrong answer ;(. Correct answer was "no".\n Let's try again, ${str}!`;
      break;
    }
  }
  if (result === temp) {
    return;
  }
  if (result === "Correct!") {
    return console.log(`Congratulations, ${str}!`);
  }
};
