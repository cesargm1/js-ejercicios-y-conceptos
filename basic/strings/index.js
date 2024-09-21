// 1. Concatena dos cadenas de texto

const Name = "dark ";
const lastName = "veider";

const fullName = Name + lastName;

//console.log(fullName);

// 2. Muestra la longitud de una cadena de texto

const string = "hola soy tu padre";

//console.log(string.length); // con el metodo length sacamos la longitud de la cadena empezando por el indice [0] el indice se genera en todo lo que cremos en javascript automaticamente

// 3. Muestra el primer y último carácter de un string

const cadena = "juan pedro";

const character = cadena[0];

const lastCharacter = cadena[cadena.length - 1];
/*
console.log(
	`Estos son el primer y ultimo caracter ${character} ${lastCharacter}`
);
*/

// 4. Convierte a mayúsculas y minúsculas un string

let animal = "pig";

let animalUpercase = animal.toUpperCase();

let animalLowerCase = animal.toLowerCase();

// console.log(animalLowerCase); // metodo que convierte a minisculas
// console.log(animalUpercase); // metodo que convierte a mayusculas

// 5. Crea una cadena de texto en varias líneas

let text = `
hola
que 
tal`;

// console.log(text);

// 6. Interpola el valor de una variable en un string

let age = 10;

// console.log(`hola me llamo lucia y tengo ${age}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let texto = "hola soy alta";

const result = texto.replace(/ /g, "-");
// console.log(result);

// 8. Comprueba si una cadena de texto contiene una palabra concreta

let find = "la ardilla come bellotas";

// console.log(find.includes("ardilla"));

// 9. Comprueba si dos strings son iguales

let text1 = "adios";
let text2 = "adios";

let result2 = text1.localeCompare(text2);

console.log(result2);

// 0 verdaredo
// -1 falso

// 10. Comprueba si dos strings tienen la misma longitud

// let cadena1 = "hola que tal";

// let cadena2 = "hola que tal";

// let resultado =
// 	cadena1.length === cadena2.length
// 		? "la cadena es igual"
// 		: "la cadena no es igual";

// console.log(resultado);
