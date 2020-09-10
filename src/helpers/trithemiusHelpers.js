import { alphabet } from "./constants";

const find = (array, value) => {
  if (array.indexOf) {
    return array.indexOf(value);
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  return -1;
};

export const encrypt = (key, string) => {
  const stringMas = [...string.toUpperCase()];
  console.log(key, string);
  let m;
  let outStr = "";
  if (key === 0) return string;
  for (let i = 0; i < stringMas.length; i++) {
    m = alphabet.indexOf(stringMas[i]) + 1;
    console.log(m);
    if (m !== 0) {
      outStr = outStr + alphabet[(m + key) % alphabet.length];
    } else {
      outStr = outStr + " ";
    }
  }
  return outStr;
};
