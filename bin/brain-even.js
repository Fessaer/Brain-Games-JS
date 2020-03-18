/* eslint-disable no-continue */
import readlineSync from 'readline-sync';

export function getRandom(min, max) {
  // функция создания рандомного числа
  return Math.floor(Math.random() * (max - min)) + min;
}

export const currectFun = (str) => {
  for (let i = 0; i < 3; i += 1) {
    const num = getRandom(1, 100); // создаем рандомное число число
    console.log(`Question: ${num}`); // выводим рандомное число от 1 до 100
    const string = readlineSync.question('Your answer: '); // вводим число
    if (string !== 'yes' && string !== 'no') {
      return console.log(
        `"yes" is wrong answer ;(. Correct answer was "no".\n Let's try again, ${str}!`,
      );
    }
    if (string === 'yes' && num % 2 === 0) {
      console.log('Correct!');
      continue;
    }
    if (string === 'no' && num % 2 !== 0) {
      console.log('Currect!');
      continue;
    }
    if (string === 'yes' && num % 2 !== 0) {
      return console.log(
        `"yes" is wrong answer ;(. Correct answer was "no".\n Let's try again, ${str}!`,
      );
    }
    if (string === 'no' && num % 2 === 0) {
      return console.log(
        `"no" is wrong answer ;(. Correct answer was "yes".\n Let's try again, ${str}!`,
      );
    }
  }

  return console.log(`Congratulations, ${str}!`);
};

// calc random operation;

export const gameCalc = (name) => {
  const str = '+-*';
  const mathOperation = (string) => {
    let word = '';
    for (let i = 0; i < 1; i += 1) {
      word += string[Math.round(Math.random() * (string.length - 1))];
    }
    return word;
  };
  const sign = mathOperation(str);

  const signConverte = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  const randomMathNumber = (num, num2, key) => `${num} ${key} ${num2}`;
  const randomMathNumber2 = (num, num2, key, obj) => obj[key](num, num2);

  for (let i = 0; i < 3; i += 1) {
    const rNO = getRandom(1, 25);
    const rNT = getRandom(1, 25);
    console.log(`Question: ${randomMathNumber(rNO, rNT, sign)}`);
    const currectString = readlineSync.question('Your answer: ');
    if (randomMathNumber2(rNO, rNT, sign, signConverte) === Number(currectString)) {
      console.log('Correct!');
      continue;
    }
    if (randomMathNumber2(rNO, rNT, sign, signConverte) !== Number(currectString)) {
      return console.log(`${Number(currectString)} is wrong answer ;(. Correct answer was ${randomMathNumber2(rNO, rNT, sign, signConverte)}.\n Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
