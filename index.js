import { suma, multiplicar } from "./controller.js";
import chalk from "chalk";

// Using chalk to color the text
const log = console.log;
log(
  chalk.green(
    "I am a green line " +
      chalk.green.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);

// Operaciones
const sum = suma(1, 2);
console.log(sum);

const multi = multiplicar(4, 5);
console.log(multi);
