export function caesarCipher(string, shiftFactor) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (/^\s$|^[^\w\s]$/.test(string.charAt(i))) {
      result += string.charAt(i);
      continue;
    }
    result += shiftLetter(string.charAt(i), shiftFactor);
  }

  return result;
}

function shiftLetter(letter, shift) {
  if (letter >= "a" && letter <= "z") {
    const newCharCode =
      ((letter.charCodeAt(0) - "a".charCodeAt(0) + shift) % 26) +
      "a".charCodeAt(0);
    return String.fromCharCode(newCharCode);
  } else if (letter >= "A" && letter <= "Z") {
    const newCharCode =
      ((letter.charCodeAt(0) - "A".charCodeAt(0) + shift) % 26) +
      "A".charCodeAt(0);
    return String.fromCharCode(newCharCode);
  }
  return letter;
}
