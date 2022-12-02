import readlineSync from "readline-sync";
import { countWords, trim } from "./utils.js";

const wordCountTest = readlineSync.question("Input something");
console.log(countWords(wordCountTest));

const trimTest = readlineSync.question("Input something");
console.log(trim(trimTest));
