const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
  };
  
  function decode(expr) {
    const words = expr.split("**********");
    const decoded_sentense = [];
    for (const word of words) {
      let decoded_word = '';
      for (let i = 0; i < word.length; i += 10) {
        const letter = word.slice(i, i + 10);
        let morse_coded_letter = "";
        
        for (let j = 0; j < letter.length; j += 2) {
          if (letter.slice(j, j + 2) === "10") {
            morse_coded_letter += ".";
          } else if (letter.slice(j, j + 2) === "11") {
            morse_coded_letter += "-";
          }
        }
        decoded_word += MORSE_TABLE[morse_coded_letter];
      }
      decoded_sentense.push(decoded_word);
    }
  
    return decoded_sentense.join(' ');
  }
  
  module.exports = {
    decode,
  };
  