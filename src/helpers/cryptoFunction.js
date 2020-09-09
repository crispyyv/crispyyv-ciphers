export const numbers = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
];

export const encrypt = (string, num) => {
  string = string.toLowerCase();

  return string
    .split("")
    .map((c) => {
      if (c.match(/[a-z]/i)) {
        let code = c.charCodeAt();
        let shift =
          code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
        return String.fromCharCode(((code - shift + num) % 26) + shift);
      }
      return c;
    })
    .join("");
};

export const decrypt = (string) => {
  const decrypted = [];

  for (let i = 0; i < 26; i++) {
    decrypted.push(encrypt(string, i));
  }

  return decrypted;
};
