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
    console.log("m:", m, "p:", p, "key:", key, "L:", L);
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
