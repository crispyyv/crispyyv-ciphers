import { alphabet } from "./constants";

const n = alphabet.length;

export const trithemiusHelper = (string, a, b, c, encrypt = true) => {
  const stringMas = [...string];
  let key;
  let p;
  let m;
  let outStr = "";
  let L;
  for (let i = 0; i < stringMas.length; i++) {
    p = i;
    if (c) {
      key = a * p ** 2 + b * p + c;
    } else {
      key = a * p + b;
    }
    m = alphabet.indexOf(stringMas[i]);
    L = alphabet[(m + key) % n];
    outStr += encrypt ? L : alphabet[recurs(m, key) % n];
  }

  return outStr;
};

const recurs = (m, key) => {
  let i = 0;
  let res;
  while (m - key + n * i < 0) {
    i++;
    res = m - key + n * i;
  }
  return m - key > 0 ? m - key : res;
};

export const findConstHelper = (plain, encrypted) => {
  let a;
  let b;
  let forTest = "";
  for (a = 0; a < 10; a++) {
    for (b = 0; b < 10; b++) {
      console.log(`a: ${a}, b:${b}`);
      forTest = trithemiusHelper(plain, a, b);
      console.log(forTest, forTest === encrypted);
      if (trithemiusHelper(plain, a, b) === encrypted) {
        console.log(a, b);
        return [a, b];
      }
    }
  }
};
