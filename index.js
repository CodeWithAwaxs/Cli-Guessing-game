#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number  -DONE
// 2) User input for guessing number  -DONE 
// 3) Compare user input with computer generated numbers and show result  -DONE
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    }
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulations! You have Guessed the right number");
}
else {
    console.log("You guseed the wrong number");
}
