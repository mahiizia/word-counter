import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        message: "enter your sentence to count the word:",
        type: "input"
    }
]);
const words = answers.sentence.split(" ");
console.log(words);
console.log(`your sentence word count is ${words.length}`);
