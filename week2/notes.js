// EXPRESSIONS are statements that evaluates to either true or false (return a boolean).

x = 3;
y = 4;

x == y; // an expression that evaluates to false
result = x==y; //storing the results of the expression in "result"

x>3; // is x greatar than 3? false
x >= 3; // is x greater than or equal to three? true
x != 3; // is x NOT equal to 3? false

(x == 3) && (y == 4); //is x equal to three AND is y equal to four? True
(x == 3) && (y == 3); //is x equal to three AND is y equal to three? false

age = 18;
citizen = true;
can_vote = (age >= 18) && (citizen == true); //Can vote if age is >- 18 AND citizen is true
can_vote = (age >= 18) && (citizen) //shorthand; don't have to state explicitly == true

(x == 3) || (y == 3) //Is x == 3 OR is y == 3? True

if (age >= 18) { //if age >= 18
    console.log("Can vote"); //Can vote
}
else { //If the above isn't true...
    console.log("Can't vote yet"); //Can't vote
}

if (age <= 12) { //Make sure you put these in the correct orders.
    console.log("Kids menu");
}
else if (age >= 65) {
    console.log("Senior menu");
}
else {
    console.log("Regular menu");
}

// SPECIAL JS SHORTHAND
// let variable = (expression 1) ? "true case" : "false case"
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you can't vote.";

// JS Also supports switch statements. Imma be real with you theyre so boring I already know how they work Im not gonna fucking take notes

//Lets look at some string functions that might help us with our pig latin assignment

word = "bus"

word.slice(0); // Slice nothing from this word
word.slice(0,1); //Give us a slice from character 0 to 1
word.charAt(1); //Give us the character at position 1

vowels = "aeiou"; //hint: use a string like this to store vowels and cross reference your strings

//This assignment will run on the console
//You can use a prompt(""); to get the input
