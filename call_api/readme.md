# Llamadas a una api por javascript

Para entemder por javascript como llamar a una API tenemos que tener antes unos conceptos claros

- Que es la asincronia ?
- Que son las promesas en javascript?
- async await

Empezemos por la asincronia

## Que es la asincronia ?

La **asincronia es uno de los conceptos clave de javascript** cuando nosotros empezamos a programar lo hacemos de forma **sincrona** sincrona significa que el codigo se ejecuta de arriba abajo

### Veamos un ejemplo de codigo sincrono

```js
console.log("codigo sincrono"); // Este console log se ejecuta el 1
console.log("uno detras de otro"); // Este console log se ejecuta el 2
console.log("3"); // Este console log se ejecuta el ultimo
```

### Resultado

![codigo sincrono](/public/api_img/codigo-sincrono.png)

Pero llegara un momento en nuestra aplicacion que queramos ejecutar tareas **asincronas** donde tenemos que **esperar a que ocurra un succeso** como por ejemplo un click una llamada a una API que no depemde de nosotros y luego cuando ocurra ese suceso realizar uma accion concreta por ejemplo hacer un fetch a una URL.

### Lenguaje no bloqueante

Javascript es un lenguaje no bloqueante con esto a lo que nos referimos es que las tareas no se quedan bloqueadas permitiendo a javascript seguir ejecutando sus tareas

#### Vamos a poner un ejemplo de codigo bloqueante

Vamos a partir del ejemplo anterior de console.log

```js
console.log("codigo sincrono");
console.log("uno detras de otro");
console.log("3");
```

Imagina que el primer console log depende de un factor por ejemplo el click de un boton si javscript fuera un lenguaje bloqueante si nosotros no pulsamos el boton el primer console.log no se ejecutara pero tampoco el segundo y el tercer console.log

### Que hace javascript para no bloquearse

Javacript al ser un lenguaje no bloqueante lo que hara es mover esa esa tarea a una **lista de tareas pendientes** a esta tarea javascript le hara caso cuando haga falta en este ejemplo seia al pulsar el boton permitiendo al segundo y tercer console.log ejecutarse

Pueden existir múltiples tareas asíncronas, dichas tareas puede que terminen realizandose correctamente (o puede que no) y ciertas tareas pueden depender de otras, por lo que deben respetar un cierto orden. Además, es muy habitual que no sepamos previamente cuanto tiempo va a tardar en terminar una tarea, por lo que necesitamos un mecanismo para controlar todos estos factores: las promesas.

### Algunos ejemplos de asincronia

- Un fetch() a una URL para obtener un JSON
- un setTimeOut() para un reloj

Esto se hace metiante tareas asincronas ya que podria bloquear nuestro programa tambien influye la belocidad a internet que tengamos

### Gestionar la asincronia

Podemos hacerlo de estas 3 maneras

- Funciones calback sun funciones que se llaman dentro de otras como parametro.

- Promesas.

- Async Await.

## Que Son las promesas en JS?

Las promesas son un concepto un JS para resolver el problema de asincronía esto es mejor que usar calbacks

Las promesas es algo que pensamos que se cumplira

**Tiene 3 estados**

- La promesa se cumple (promesa resuelta)
- La promesa no se cumple (promesa rechazada)
- La promesa se queda pendiente esperando

Para usar las promesas tenemos estos metodos

- **.then(resolve)** Ejecuta la función callback resolve cuando la promesa se cumple.

- **.then(reject)** Ejecuta la función callback resolve cuando la promesa se rechaza.

La forma de consumir una promesa es utilizando el .then()

## async await

Con async/await seguimos manejando promesas, sin embargo, hay ciertos cambios importantes:

- No encadenamos mediante .then(), sino que usamos un sistema más tradicional.
- Abandonamos el modelo no bloqueante y pasamos a uno bloqueante.

### Await

En cualquier promesa que tengamos usaremos la palabra clave await antes

```js
const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=721");
console.log(response);
```

En este ejmplo nuestra promesa es response

> Lo que hace await es detener la ejecución del programa y no continuar. Se espera a que se resuelva la promesa, y hasta que no lo haga, no continua. A diferencia del .then(), aquí tenemos un código bloqueante

**Vamos a meterlo dentro de una funcion**

```js
const callApi =  () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=721')
        console.log(response)}

```

Sin embargo, aquí tenemos un problema. Estamos utilizando await (asíncrono) dentro de request() (síncrono), por lo que antes de ejecutarla da este error

> Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules

Para resolver el problema anterior y poder utilizar el await dentro de nuestra función, sólo tenemos que definir nuestra función como función asíncrona utilizando la palabra clave await:

> Inportante: No puede haber un async sin un await

### LLamando a la PokeApi

**Veamos un paso a paso**

> Inportante: El paso a paso no funciona si lo copias es simplemente para que veas como se hace luego al final dejare el codigo completo

1. Definimos una función callApi() y le decimos que sea asincrona

2. creamos una const response que hara una peticion http a la api por fetch

> Si no ponemos la palabra clave await en nuestra funcion asincrona saldra este error

- Promise {<pending>}
- [[Prototype]]: Promise
- [[PromiseState]]: "fulfilled"
- [[PromiseResult]]: Object

3.  > Importante a la Url que hacemos fetch podemos decirle cuantos pokemon queremos con el parametro limmit = 151 en este caso sacara los primeros 151 pokemos

4.  Sacamos la respuesta de la API por consola

```js
const callApi = async () => {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=721");
	console.log(response);

	// Este ejemplo de codigo son los primeros 4 pasos
};
```

```js
const callApi = async () => {
	// try dentro de el esta  codigo que puede dar un error
	try {
		// hace una peticion http con fetch

		// Importante a la Url que hacemos fetch podemos decirle cuantos pokemon queremos con el parametro limmit = 151 en este caso sacara los primeros 151 pokemos
		const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=721");
		console.log(response);

		// Me saca la respuesta en formato json con  const data = await response.json()

		const data = await response.json();
		/* saca la 4 posicion del los datos optenidos por fetch accediendo a las propiedades de datos y luego a los resultados // Imprime el cuarto Pokémon en la lista que es charmander

        console.log(data.results[3])
        */
		console.log(data);

		// la constante data es toda la informacion de la api

		// Mirar el metodo map y porque no funciona con foreach

		data.results.map((pokemon) => {
			const section = document.querySelector("section");
			const article = document.createElement("article");
			const h2 = document.createElement("h2");
			const pokemonInformation = console.log(pokemon.name, pokemon.url);

			h2.textContent = pokemon.name;
			section.appendChild(article);
			article.appendChild(h2);
			console.log(pokemonInformation);
		});

		// Captura el error del try si ocurre uno y imprime el error por consola
	} catch (error) {
		console.log(error);
	}
};

callApi();

// apenchid inserta un elemento html desde javascript como hijo  section.appendChild(article) en este ejemplo dentro de section habra un article
```
