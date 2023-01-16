// Program notes
// Made by Eddie Melton, for my IT 121 class
// 1/15/2023
// index.html, located in this folder, will run this script in a browser.

let input = prompt("Please input a word to be translated."); //Gather input from user. Can only take one word, no numbers, spaces or special characters
input = input.toLowerCase();

let vowels = "aeiouy";
let currentVowel = "";
let counter = 0;
let output = "";
let length = input.length;

//First, lets make sure the word is long enough.
if (length > 1) {
//This while loop will go through each vowel in our cycle, checking to see if it is in the first or second position of the string
    while (counter < 6) { 
        currentVowel = vowels.charAt(counter);
        if (input.search(currentVowel) == 0) { //IF the current vowel is found in position 1
            output = input + "way"; //Execute rule for "begins with vowel"
        }
        else if (input.search(currentVowel) == 1 && output == "") { //IF the current vowel is NOT found in position one, and IS found in position 2, AND we don't already have a vowel match
            let movingLetter = input.charAt(0);
            let slicedInput = input.substring(1, length);
            output = slicedInput + movingLetter + "ay"; //Execute rule for "begins with consonant,second is vowel"
        }
        counter++;
    }
    if (output == "") { //If there is no vowel in the first two positions of the string, the output is still blank, then they must both be consonants
        let movingLetters = input.slice(0,2);
        let slicedInput = input.substring(2, length);
        output = slicedInput + movingLetters + "ay";
    }
}
else {
    output = "Invalid word, please try again";
}

alert (output);
