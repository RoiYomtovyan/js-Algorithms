function caesrCipher (str, num) {
    num = num % 26; // to handle cases where the input number is grather than 26
    let lowerCaseString = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('') // the split will convert this string to array
    let newString = '';

    for (let i = 0 ; i <lowerCaseString.length ; i++ ) { // we loop throught all the letters of the str we get
        let currentLetter = lowerCaseString[i]
        if (currentLetter === ' ') { // this handle the case where the input str includs spaces - that will add it with no change
            newString += currentLetter
            continue;
        }
        let currentIndex = alphabet.indexOf(currentLetter)
        let newIndex = currentIndex + num;
        if (newIndex > 25) newIndex = newIndex - 26; // handle the edge case where we are for exmple get the letter z and if we add num to its index its out of boundries 
        if (newIndex < 0) newIndex = 26 + newIndex; // handle the edge case where we get negetive number as input num
        if (str[i] === str[i].toLocaleUpperCase()) {  // this will handle the cases where we get upper case string

            newString += alphabet[newIndex].toLocaleUpperCase();

        } else newString += alphabet[newIndex]

    }

    return newString
}

let roi = caesrCipher ('roi Yomtovyan' , 2)
console.log(roi)

console.log(caesrCipher ('tqk Aqovqxacp' , -2))