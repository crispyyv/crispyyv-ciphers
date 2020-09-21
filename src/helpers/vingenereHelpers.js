export const crypt = (input, key) => {
  let output = "";
  for (let i = 0, j = 0; i < input.length; i++) {
    const c = input.charCodeAt(i);
    if (isUppercase(c)) {
      output += String.fromCharCode(((c - 65 + key[j % key.length]) % 26) + 65);
      j++;
    } else if (isLowercase(c)) {
      output += String.fromCharCode(((c - 97 + key[j % key.length]) % 26) + 97);
      j++;
    } else {
      output += input.charAt(i);
    }
  }
  return output;
};

export const doCrypt = (phraseInput, keyInput, decrypt) => {
  if (keyInput.length === 0) {
    return "";
  }

  let key = filterKey(keyInput);
  if (key.length === 0) {
    return "";
  }
  if (decrypt) {
    for (let i = 0; i < key.length; i++) {
      key[i] = (26 - key[i]) % 26;
    }
  }
  return crypt(phraseInput, key);
};

export const filterKey = (key) => {
  var result = [];
  for (var i = 0; i < key.length; i++) {
    var c = key.charCodeAt(i);
    if (isLetter(c)) result.push((c - 65) % 32);
  }
  return result;
};

// Tests whether the specified character code is a letter.
export const isLetter = (c) => {
  return isUppercase(c) || isLowercase(c);
};

// Tests whether the specified character code is an uppercase letter.
export const isUppercase = (c) => {
  return 65 <= c && c <= 90; // 65 is character code for 'A'. 90 is 'Z'.
};

// Tests whether the specified character code is a lowercase letter.
export const isLowercase = (c) => {
  return 97 <= c && c <= 122; // 97 is character code for 'a'. 122 is 'z'.
};
