# Utilizando strings

## Que es un string ?

Una secuencuencia de caracteres que se usan para reprensentar texto

## Ejemplo

```js
const Name = "dark";
```

> Inportante: Podemos usar las cadenas de texto con commillas dobles o simples

### Ejercicios

1.  Concatena dos cadenas de texto

- Podemos (concatenar unir) cadenas de texto con el simbolo + en js

```js
const Name = "dark ";
const lastName = "veider";

const fullName = Name + lastName;

console.log(fullName);
```

### Explicación

Definimos 2 constantes nombre y apellido con sus respectivos valores Creamos una constante fullName
que concatenara el nombre con el apellido usando el signo + y imprimara por consola el valor del nombre completo

2.  Muestra la longitud de una cadena de texto

- length Muestra la longitud de una cadena

```js
const string = "hola soy tu padre";
console.log(string.length);
```

con el metodo length sacamos la longitud de la cadena empezando por el indice [0] el indice se genera en todo lo que cremos en javascript automaticamente funciona en cadenas arrays objetos ect

3.  Muestra el primer y último carácter de un string

```js
const cadena = "juan pedro";

const character = cadena[0];

const lastCharacter = cadena[cadena.length - 1];

console.log(
	`Estos son el primer y ultimo caracter ${character} ${lastCharacter}`
);
```

En los string se cuenta del numero 1 al 9 en este ejemplo pero al ser un indice se le resta 1 porque usamos los [] cada posicion es un numero de indice los indices empiezan desde el 0 por ejemplo la posicion 0 es la letra j y la 1 es la letra u

4.  Convierte a mayúsculas y minúsculas un string

Para hacer este ejercicio necesitamos estos metodos

- toUpperCase() Metodo que convierte a mayusculas
- toLowerCase() Metodo que convierte a minisculas

```js
let animal = "pig";

let animalUpercase = animal.toUpperCase();

let animalLowerCase = animal.toLowerCase();

console.log(animalLowerCase);
console.log(animalUpercase);
```

5.  Crea una cadena de texto en varias líneas

con las `` podemos crear una variable multilinea

```js
let text = `
hola
que 
tal`;

console.log(text);
```

6.  Interpola el valor de una variable en un string

- Para interpolar una variable a un string usamos `` estas commilas invertidas y encerramos la variable de esta forma

```js
${ejemplo}
```

```js
let age = 10;
console.log(`hola me llamo lucia y tengo ${age}`);
```

7.  Reemplaza todos los espacios en blanco de un string por guiones

- Con el metodo replace() podemos remplazar uno o mas caracteres por otros

### Sitaxis

```js
replace("texto a remplazar", "remplazo");
```

```js
let texto = "hola soy alta";

const result = texto.replace(/ /g, "-");
console.log(result);
```

Podemos utilizar expresiones regulares en este ejemplo usamos la expreion regular / /g que viene de global que remplazara todos los espacios por guiomes

8. Comprueba si una cadena de texto contiene una palabra concreta

- Con el metodo includes() comprueba si el string contiene la palabra buscada si la encuentra devuelve true y si no false

```js
let find = "la ardilla come bellotas";

console.log(find.includes("ardilla"));
```

9.  Comprueba si dos strings son iguales

```js
let text1 = "adios";
let text2 = "adios";

let result2 = text1.localeCompare(text2);

console.log(result2);
```

10. Comprueba si dos strings tienen la misma longitud

```js
let cadena1 = "hola que tal";

let cadena2 = "hola que tal";

let resultado =
	cadena1.length === cadena2.length
		? "la cadena es igual"
		: "la cadena no es igual";

console.log(resultado);
```

Ejercicios obtenidos del repositorio de MoureDev:

[Ejercicios strings curso de JS moureDev](https://github.com/mouredev/hello-javascript/blob/main/Basic/07-strings-exercises.js)
