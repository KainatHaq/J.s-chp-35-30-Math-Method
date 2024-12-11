//Q#1
//Write a program that takes a positive integer from user &
    //display the following in your browser.
     //   a.number
//b.round off value of the number
//c.floor value of the number
//d.ceil value of the number
let userNum = +prompt("Enter any positive integer with decimal below");
let number = userNum;

let roundedValue = Math.round(number);
document.write(`roundedValue ${roundedValue} </br>`);
let floorValue = Math.floor(number);
document.write(`floorValue ${floorValue}</br>`);
let ceilValue = Math.ceil(number);
 document.write(`ceilValue ${ceilValue}</br>`);


// Q#2
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a.number
// b.round off value of the number
// c.floor value of the number
// d.ceil value of the number

var numberNegative = parseFloat(prompt("Please enter a negative floating point number:"));

// Checking if the number is negative
if (numberNegative < 0) {
    document.write("Number: " + numberNegative + "<br>");
    document.write("Round off value: " + Math.round(numberNegative) + "<br>");
    document.write("Floor value: " + Math.floor(numberNegative) + "<br>");
    document.write("Ceil value: " + Math.ceil(numberNegative) + "<br><br>");
} else {
    document.write("Please enter a valid negative number.<br>");
}
// Q#3
// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5*/
let value = prompt('Enter number to get Absolute value');
document.write(`Number : ${value} `);
let absoluteValue = Math.abs(value);
document.write(`The Absolute value of ${value} is  ${absoluteValue}`);

// Q#4
//  Write a program that simulates a dice using random()
//  method of JS Math class. Display the value of dice in your
//  browser.:

function showDice() {
    let showNum = document.getElementById("diceNum");
    let dice1Src = "img 1.png";
    let dice2Src = "img 2.png";
    let dice3Src = "img 3.png";
    let dice4Src = "img 4.png";
    let dice5Src = "img 5.png";
    let dice6Src = "img 6.png";
    let randomNum = Math.floor(Math.random() * 6) + 1;
    let image = document.getElementById("dice-image");
    showNum.innerHTML = `Dice Number  <i class="fas fa-dice"></i> : ${randomNum}`;
    if (randomNum == 1) {
        image.src = dice1Src;
    } else if (randomNum == 2) {
        image.src = dice2Src;
    } else if (randomNum == 3) {
        image.src = dice3Src;
    } else if (randomNum == 4) {
        image.src = dice4Src;
    } else if (randomNum == 5) {
        image.src = dice5Src;
    } else {
        image.src = dice6Src;
    }
}

//  Q#5
//   Write a program that simulates a coin toss using random()
//  method of JS Math class. Display the value of coin in your
//  browser

function tossTheCoin() {
    let coin = Math.floor(Math.random() * 2);
    document.getElementById('random').innerHTML = `Your coin number is${coin + 1}`;

    if (coin == 1) {
        document.getElementById('message').innerHTML = `Outcome ofn the Coin is Head`;
    }
    else {
        document.getElementById('message').innerHTML = `Outcome of the Coin is Tail`;
    }
}

//  Q#6
//  Write a program that shows a random number between 1
//  and 100 in your browser
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    let message = document.getElementById('message');
    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the right number ${randomNumber} correctly in ${attempts} attempts.`;
        message.style.color = "blue";
    } else if (userGuess > randomNumber) {
        message.textContent = `Too High! Try Again!`;
        message.style.color = "red";
    } else if (userGuess < randomNumber) {
        message.textContent = `Too Low! Try Again!`;
        message.style.color = "red";
    }

    document.getElementById('Attempts').textContent = `Attempts: ${attempts}`;
}

function resetGames() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = "";
    document.getElementById('message').textContent = "";
    document.getElementById('Attempts').textContent = `Attempts: 0`;
}
//  Q#7
//  Write a program that asks the user about his weight.Parse
//  the user input and display his weight in your browser.
//  Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
function displayWeight() {
    let input = document.getElementById('weightInput').value.trim();
    let weight;


    if (input.endsWith('kgs') || input.endsWith('kilograms')) {
        weight = input.replace(/kgs|kilograms/g, '').trim();
    } else if (!isNaN(input)) {
        weight = input;
    } else {
        weight = "Invalid input. Please enter a valid weight.";
    }


    if (weight && !isNaN(weight)) {
        document.getElementById('result_1').innerHTML = `Your weight is: ${weight} kg;`
    } else {
        document.getElementById('result_1').innerHTML = `weight;`
    }
}

//  Q#8
//  Write a program that stores a random secret number from
// 1 to 10 in a variable.Ask the user to input a number
//  between 1 and 10. If the user input equals the secret
// number, congratulate the user.

function Guess() {
    let correctNum = 5;
    let guess = document.getElementById('GuessNum').value;
    let result_2 = document.getElementById('result_2');

    if (guess == correctNum) {
        result_2.innerHTML = "Congratulations! your guess is correct";
    }
    else {
        result_2.innerHTML = "Sorry, that's not correct. Try again!";
    }


}  