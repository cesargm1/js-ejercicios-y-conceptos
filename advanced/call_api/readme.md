# Llamadas a una API por JavaScript

Para entender por JavaScript cómo llamar a una API, tenemos que tener antes unos conceptos claros.

- ¿Qué es la asincronía?
- ¿Qué son las promesas en JavaScript?
- async await

Empecemos por la asincronía.

## ¿Qué es la asincronía?

La **asincronía es uno de los conceptos clave de JavaScript**. Cuando nosotros empezamos a programar, lo hacemos de forma **síncrona.** Síncrona significa que el código se ejecuta de arriba a abajo.

### Veamos un ejemplo de código síncrono.

```js
console.log("codigo sincrono"); // Este console log se ejecuta el 1
console.log("uno detras de otro"); // Este console log se ejecuta el 2
console.log("3"); // Este console log se ejecuta el ultimo
```

### Resultado

![Código síncrono.](/advanced/call_api/public/api_img/codigo-sincrono.png)

Pero llegará un momento en nuestra aplicación que queramos ejecutar tareas **asíncronas** donde tenemos que **esperar a que ocurra un suceso** como por ejemplo un click una llamada a una API que no depende de nosotros y luego cuando ocurra ese suceso realizar uma acción concreta por ejemplo hacer un fetch a una URL.

### Lenguaje no bloqueante.

JavaScript es un lenguaje no bloqueante, con esto a lo que nos referimos es que las tareas no se quedan bloqueadas, permitiendo a JavaScript seguir ejecutando sus tareas.

#### Vamos a poner un ejemplo de código bloqueante.

Vamos a partir del ejemplo anterior de console.log

```js
console.log("codigo sincrono");
console.log("uno detras de otro");
console.log("3");
```

Imagina que el primer console.log depende de un factor, por ejemplo: el click de un botón. Si JavaScript fuera un lenguaje bloqueante, si nosotros no pulsamos el botón, el primer console.log no se ejecutará, pero tampoco el segundo y el tercer console.log

### ¿Qué hace JavaScript para no bloquearse?

JavaScript, al ser un lenguaje no bloqueante, lo que hará es mover esa tarea a una **lista de tareas pendientes**. Esta tarea JavaScript le hará caso cuando haga falta. En este ejemplo sería al pulsar el botón, permitiendo al segundo y tercer console.log ejecutarse.

Pueden existir múltiples tareas asíncronas, dichas tareas puede que terminen realizándose correctamente (o puede que no) y ciertas tareas pueden depender de otras, por lo que deben respetar un cierto orden. Además, es muy habitual que **no sepamos previamente cuánto tiempo va a tardar en terminar una tarea**, por lo que necesitamos un mecanismo para controlar todos estos factores: las promesas.

### Algunos ejemplos de asincronía.

- Un fetch() a una URL para obtener un JSON.
- un setTimeOut() para que pase el tiempo en un reloj.

Esto se hace mediante tareas asíncronas, ya que si lo hacemos con tareas síncronas, podría bloquear nuestro programa. También influye la velocidad a internet que tengamos, porque la respuesta podría tardar más tiempo.

### Gestionar la asincronía.

Podemos hacerlo de estas 3 maneras.

- Las funciones calback son funciones que se llaman dentro de otras como parámetro.

- Promesas.

- Async Await.

## ¿Qué son las promesas en JS?

Las promesas son un concepto de JS para resolver el problema de asincronía, esto es mejor que usar calbacks

Las promesas son algo que pensamos que se cumplirá.

** Las promesas tienen 3 estados. **

- La promesa se cumple (promesa resuelta)
- La promesa no se cumple (promesa rechazada)
- La promesa se queda pendiente, esperando.

Para usar las promesas tenemos estos métodos.

- **.then(resolve)** Ejecuta la función callback resolve cuando la promesa se cumple.

- **.then(reject)** Ejecuta la función callback resolve cuando la promesa se rechaza.

La forma de consumir una promesa es utilizando .then()

## async await

Con async/await seguimos manejando promesas; sin embargo, hay ciertos cambios importantes.

- No encadenamos mediante .then(), sino que usamos un sistema más tradicional.
- Abandonamos el modelo no bloqueante y pasamos a un modelo bloqueante.

### Await

En cualquier promesa que tengamos usaremos la palabra clave await antes, como vemos en el ejemplo de abajo.

```js
const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=721");
console.log(response);
```

En este ejemplo, nuestra promesa es response

> Lo que hace await es detener la ejecución del programa y no continuar. Se espera a que se resuelva la promesa, y hasta que no lo haga, no continua. A diferencia del .then(), aquí tenemos un código bloqueante

**Vamos a meterlo dentro de una función.**

```js
const callApi =  () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=721')
        console.log(response)}

```

Sin embargo, aquí tenemos un problema. Estamos utilizando await (asíncrono) dentro de una función callAPI() (síncrona), por lo que antes de ejecutarla da este error.

> Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules

Para resolver el problema anterior y poder utilizar el await dentro de nuestra función, solo tenemos que definir nuestra función como función asíncrona utilizando la palabra clave await.

> Inportante: No puede haber un async sin un await

### Llamando a la PokeApi

**Veamos un paso a paso.**

> Inportante: El paso a paso no funciona si lo copias es simplemente para que veas como se hace luego al final dejare el codigo completo

1. Creamos un HTML básico que tendrá una sección con la clase gallery y un script para realizar la lógica con JavaScript.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>LLamada a una API</title>
		<link rel="stylesheet" href="/call_api/style.css" />
	</head>
	<body>
		<section class="gallery"></section>
		<script src="/call_api/call_api.js"></script>
	</body>
</html>
```

2. Definimos una función callApi() y le decimos que sea asíncrona.

3. creamos una const response que hará una petición HTTP a la API por fetch y obtendrá todos los datos de la API.

> Si no ponemos la palabra clave await en nuestra funcion asincrona saldra este error

- Promise {<pending>}
- [[Prototype]]: Promise
- [[PromiseState]]: "fulfilled"
- [[PromiseResult]]: Object

> Sin la palabra clave await nuestra promesa no se resolverá, quedará como pendiente esperando a que se resuelva esta parte. La vimos en las promesas.

4.  > Importante: a la URL que hacemos fetch podemos decirle cuantos Pokémon queremos con el parámetro limmit = 151. En este caso sacará los primeros 151 Pokémon.

5.  Sacamos la respuesta de la API por consola.

6.  Llamamos a la función para que se ejecute y nos devuelva la respuesta de la API por consola.

```js
const callApi = async () => {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=721");
	console.log(response);
};

callApi(); // Llamamos a la funcion

// Este ejemplo de codigo son los pasos del 2 al 6
```

#### Esto es lo que obtenemos por consola.

![console.log respuesta](/advanced/call_api/public/api_img/consoleLogRespuesta.png)

Nos devuelve cosas interesantes, como, por ejemplo, la URL si has sido redirigido.
El código de estado, en este caso da 200, quiere decir que ha salido todo bien.

5. Podemos usar try y catch para depurar errores simplemente. Al código que tenemos, le añadimos los bloques try catch.

```js
const callApi = async () => {
	// try dentro de el esta  codigo que puede dar un error
	try {
		const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=721");
		console.log(response);

		// Captura el error del try con el parametro error si ocurre uno y imprime el error por consola
	} catch (error) {
		console.log(error);
	}
};

callApi(); // llamando a la funcion CallApi
```

6. Ahora tenemos que transformar nuestra respuesta en formato .JSON para poder acceder a los datos que están en la respuesta y poder verlos por consola, para pintar pokemons Ahora mismo tenemos únicamente la respuesta, pero no tenemos el JSON.

![console.log respuesta](/advanced/call_api/public/api_img/consoleLogRespuesta.png)

**Transformemos la respuesta al formato .JSON para pintar Pokémon por consola. Veamos cómo se hace.**

```js
const callApi = async () => {
	// try dentro de el esta  codigo que puede dar un error
	try {
		// hace una peticion http con fetch

		// Importante a la Url que hacemos fetch podemos decirle cuantos pokemon queremos con el parametro limmit = 151 en este caso sacara los primeros 151 pokemos
		const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=721");
		console.log(response);

		const data = await response.json();
		console.log(data.results[3]);
	} catch (error) {
		console.log(error);
	}
};

callApi(); // LLama a la funcion
```

> Importante el metodo .json() convierte la respuesta de la variable data a formato json.

> la constante data es toda la informacion de la API pero tranformada en formato JSON.

> Inportante en la constante data debemos poner la palabra clave **await Porque recordemos que nuestra funcion es (async asincrona) y no puede haber un async sin un await todas las constantes que definamos en esta funcion callAPI llevaran la palabra clave await por lo que comentamos antes** porque todo lo que reciba de la API puede tardar un tiempo por mi conexion a internet una pigina lenta ect..

**Si no hacemos esto, nos saldrá el siguiente error.**

TypeError: Cannot read properties of undefined (reading 'map')
at callApi (api.js:66:22)

si ejecutamos el siguiente código: **console.log(data.results[3])**; el resultado será el cuarto elemento del array dentro del objeto.data En este caso, imprimirá "Charmander".

Esto ocurre porque estamos accediendo a la constante data, que contiene la información obtenida de la API en formato JSON. Dentro de esa estructura, hay una propiedad llamada results, que es un array con diferentes elementos. Usando data.results[3], estamos seleccionando el cuarto elemento de ese array, que corresponde a "Charmander".

```js
console.log(data.results[3]); // Imprime charmander
```

> Importante: Si quremos ver todos los pokemon tenemos que hacer un console.log a la constante data porque data transforma la respuesta en formato.json.

```js
const callApi = async () => {
	// try dentro de el esta  codigo que puede dar un error
	try {
		// hace una peticion http con fetch

		// Importante a la Url que hacemos fetch podemos decirle cuantos pokemon queremos con el parametro limmit = 151 en este caso sacara los primeros 151 pokemos
		const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=721");
		console.log(response);

		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

callApi(); // LLama a la funcion callApi
```

Este código nos saca todos los Pokémon de la constante data que son 721 Pokémon.

![data API all Pokémon](/advanced/call_api/public/api_img/data_api.png)

**¿Qué nos devuelve la API?**

- Cuántos elementos tiene el array 1302.
- Como limitamos el array solo nos devolverá 721 elementos.
- Nos devuelve el nombre de cada Pokémon.
- La URL asociada a cada Pokémon: cada Pokémon.

7. Ahora debemos de recorrer los resultados dentro de data que es el JSON, pero como lo hacemos, existe un método que se llama **map()**

Los tipos de dato Map son muy similares a los Objetos de JavaScript, ya que estos últimos se pueden usar como estructuras de diccionario mediante pares clave-valor. Sin embargo, los Object tienen algunas diferencias y pueden recorrer objetos.

Las diferencias no las explicaré, ahora será en la parte de estructuras de control, pero quedarse con que es similar a un objeto.

**Veamos el ejemplo del map(). Solo nos enfocaremos en la parte del map().**

```js
const callApi = async () => {
	// try dentro de el esta  codigo que puede dar un error
	try {
		// hace una peticion http con fetch

		// Importante a la Url que hacemos fetch podemos decirle cuantos pokemon queremos con el parametro limmit = 151 en este caso sacara los primeros 151 pokemos
		const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=721");
		console.log(response);

		const data = await response.json();
		console.log(data);

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
	} catch (error) {
		console.log(error);
	}
};
```

**Veamos paso a paso lo que hay dentro del método map()**

1. primero realizamos un map de los resultados del JSON de data y hacemos una función flecha con el parámetro Pokémon que será cada uno de los Pokémon que recorrerá el map().

```js
data.results.map((pokemon) => {
	// aqui va muestro codigo
});
```

2. Seleccionamos nuestro elemento de HTML sección con el método del DOM**document.querySelector()**

3. Tenemos que crear 2 elementos por JavaScript que recorran el método map() este método tiene los resultados del JSON gracias a la variable data los elementos que crearemos serán un artículo que será cada carta de Pokémon y un título con el nombre del Pokémon para crear un elemento tenemos este método **document.createElement("elemento a crear")** como es un map creará tantos elementos como haya en **data.results**

**Veamos un ejemplo creando estos 2 elementos.**

```js
const callApi = async () => {
	try {
		const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=721");
		console.log(response);

		const data = await response.json();
		console.log(data);

		data.results.map((pokemon) => {
			const section = document.querySelector("section"); // seleciona el elemnto secton
			const article = document.createElement("article"); // crea el elemento article
			const h2 = document.createElement("h2"); // crea el elemento h2
			console.log(section);
			console.log(article);
			console.log(h2);
		});
	} catch (error) {
		console.log(error);
	}
};

callApi();
```

### Resultado

![creando elementos en el DOM](/advanced/call_api/public/api_img/createElements.png)

Como podemos observar en la imagen, nos crean los elementos article y h2 por cada elemento del método map() que recorre un objeto.

Importante: no podemos recorrer Pokémon con el buche foreach. Por esta razón foreach no recorre las estructuras de tipo mapa, es decir, las estructuras tipo clave:valor.

#### Por ejemplo:

```js
// Esto se puede recorrer con un map pero no con foreach
const pokemons = {
	name: "bulbasur",
};
console.log(pokemons.name);
```

Pero, ¿cómo sacamos el nombre del Pokémon por consola y la URL fuera del array de results?

```js
const pokemonInformation = console.log(pokemon.name, pokemon.url);
// añadimos esta linea a lo que ya teniamos en el ejemplo anterior
```

##### ¿Pero cómo sé a qué propiedad tengo que acceder?

Para acceder a la información específica dentro de la respuesta de la API, debemos entender la estructura del objeto JSON que obtenemos. En nuestro caso, data es el objeto que contiene toda la información de la API en formato JSON.

    Propiedad results: Dentro de data, encontramos una propiedad llamada results. Esta propiedad es un array que contiene objetos, donde cada objeto representa un Pokémon.

    Acceso a propiedades de los objetos: Cada objeto en el array results tiene varias propiedades. Por ejemplo:
        Nombre del Pokémon: Para acceder al nombre de cada Pokémon, utilizamos pokemon.name, donde Pokémon representa cada objeto del array.
        URL del Pokémon: Para obtener la URL asociada a cada Pokémon, usamos pokemon.url

![acceder al nombre y a la url ](/advanced/call_api/public/api_img/name_url.png)

```js
const callApi = async () => {
	try {
		const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=721");
		console.log(response);

		const data = await response.json();
		console.log(data);

		data.results.map((pokemon) => {
			const section = document.querySelector("section"); // seleciona el elemnto secton
			const article = document.createElement("article"); // crea el elemento article
			const h2 = document.createElement("h2"); // crea el elemento h2
			const pokemonInformation = console.log(pokemon.name, pokemon.url);
			console.log(section);
			console.log(article);
			console.log(h2);
		});
	} catch (error) {
		console.log(error);
	}
};

callApi();
```

#### Resultado

![sacar nombre y URL por consola fuera del objeto.](/advanced/call_api/public/api_img/conseguir_url_nombre.png)

### Añadir elementos al dom

Para esta parte final de JavaScript quitemos todos los console.log porque no nos harán falta, simplemente eso era para depurar el código.

Tenemos que añadir estas 3 nuevas líneas a nuestro código de JS que explicaremos ahora.

```js
h2.textContent = pokemon.name;
section.appendChild(article);
article.appendChild(h2);
```

    h2.textContent = pokemon.name;: En esta línea, estamos usando  la propiedad textContent del elemento h2 que creamos previamente con CreateElement. La propiedad textContent se utiliza para establecer el texto que se mostrará dentro del elemento HTML. Al asignar pokemon.name a textContent, estamos insertando el nombre del Pokémon en el elemento h2. Por ejemplo, si el nombre del primer Pokémon es "Bulbasaur", se mostrará "Bulbasaur" dentro del elemento.h2 Aunque aún no veremos el nombre en la página, porque el elemento h2 no ha sido agregado al DOM.

2. **section.appendChild(article);** appendChild inserta un elemento HTML desde JavaScript como hijo section.appendChild(article). En este ejemplo, dentro de sección habrá un article

3. En la tercera línea es igual, pero dentro del article habrá un h2

> Nota appendChild inserta el elemento en el DOM

Hemos acabado, ahora añadiremos un poco de HTML, CSS y JavaScript para ver el código completo y ver el resultado final.

### Código completo

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>LLamada a una API</title>
		<link rel="stylesheet" href="/style.css" />
	</head>
	<body>
		<section class="gallery"></section>
		<script src="call_api.js"></script>
	</body>
</html>
```

```css
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}
body {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100dvh;
}
.gallery {
	max-width: 800px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 2em;
}

article {
	background: -webkit-linear-gradient(
		114deg,
		#42b1c8,
		#9d8dcf,
		#13132a
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		114deg,
		#42b1c8,
		#9d8dcf,
		#13132a
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	padding: 1em;
	display: flex;
}

h2 {
	width: 100%;
	text-align: center;
}
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

> Nota si no te funciona el html y javascript del codigo tienes que cambiar las rutas en el archivo html del script y la hoja de estilos esto pasa porque estas dentro de una carpeta Aqui te dejo el codigo HTML adaptalo a las carpetas que tu tengas

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>LLamada a una API</title>
		<link rel="stylesheet" href="/call_api/style.css" />
	</head>
	<body>
		<section class="gallery"></section>
		<script src="/call_api/call_api.js"></script>
	</body>
</html>
```

#### Resultado

![Poke Api](/advanced/call_api/public/api_img/pokemon.png)

### Conclusiones

Ahora ya sabes cómo llamar a una API y obtener información de ella gracias a la asincronía. Has aprendido a usar fetch y ya sabes cómo funciona async await. También sabes qué es una promesa y cómo funciona.

> Nota esta documentación ira aumentando por ejemplo sacaremos las imagenes de los pokemon ect
