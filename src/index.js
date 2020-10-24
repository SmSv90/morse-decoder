const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let words = [],
        morseStr = '',
        messageConverted = [];

    for (let i = 0; i < expr.length-1; i+=10) {
        words.push(expr.substring(i, i+10));
    }

    for (let elem of words) {
        for (let j = 1; j < elem.length; j+=2 ) {
            if (elem[j-1] == 1 && elem[j] == 0) {
                morseStr += '.';
            } else if (elem[j-1] == 1 && elem[j] == 1) {
                morseStr += '-';
            } else if (elem[j-1] == "*" && elem[j] == "*") {
                morseStr += ' ';
            } 
        }
        morseStr += '#';
    }
   
    morseStr.split("     ").map(function (word) {
        word.split("#").map(function (letter) {
            messageConverted.push(MORSE_TABLE[letter]);
        });
        messageConverted.push(" ");
    });
    messageConverted = messageConverted.slice(0, -1);
    return messageConverted.join("");

}

module.exports = {
    decode
}
