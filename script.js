console.log("Probando con node!")

let myNumber = 5;
let otherNum = 20;

let sum = myNumber + otherNum;
console.log("el resuldado final", sum)


const superheroes = require('superheroes');
// require busca la instalacion del paquete y nos permite el uso desde este archivo de JS

console.log( "superheroe aleatorio", superheroes.random() )


let cool = require('cool-ascii-faces')
console.log("carita", cool())
// console.log(cool.faces[10]) // solo carita index 10


const cows = require('cows');
const cowArr = cows()
// console.log(cowArr[20])


const cowFunction = require("./cows/randomcow")
console.log( cowFunction() )
