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

En este ejemplo nuestra promesa es response

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

1. Creamos un HTML basico que tendra una seccion con la clase gallery y un script para realizar la logica de javascript.

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

2. Definimos una función callApi() y le decimos que sea asincrona

3. creamos una const response que hara una peticion http a la api por fetch y obtendra todos los datos de la API

> Si no ponemos la palabra clave await en nuestra funcion asincrona saldra este error

- Promise {<pending>}
- [[Prototype]]: Promise
- [[PromiseState]]: "fulfilled"
- [[PromiseResult]]: Object

4.  > Importante a la Url que hacemos fetch podemos decirle cuantos pokemon queremos con el parametro limmit = 151 en este caso sacara los primeros 151 pokemos

5.  Sacamos la respuesta de la API por consola

6.  Llamamos a la funcion para que se ejecute y nos devuelva la respuesta de la API por consola

```js
const callApi = async () => {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=721");
	console.log(response);
};

callApi(); // Lamada a la funcion CallApi

// Este ejemplo de codigo son los pasos del 2 al 6
```

#### Esto es lo que optenemos por consola

![console.log respuesta](/public/api_img/consoleLogRespuesta.png)

Nos devuelve cosas interesantes como porejemplo la URL si has sido redirijido
y el codigo de estado en este caso da 200 quiere decir que ha salido todo bien

5. Podemos usar try y catch para depurar errores simplemente al codigo que tenemos le añadimos los bloques try catch

```js
const callApi = async () => {
	// try dentro de el esta  codigo que puede dar un error
	try {
		const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=721");
		console.log(response);

		// Captura el error del try si ocurre uno y imprime el error por consola
	} catch (error) {
		console.log(error);
	}
};

callApi(); // llamando a la funcion CallApi
```

6. Ahora tenemos que tranformar nuestra respuesta en formato .JSON para poder acceder a los datos que estan en la respuesta y poder verlos por consola, para pintar pokemons Ahora mismo Tenemos unicamente la respuesta pero no la transformamos a formato JSON.

![console.log respuesta](/public/api_img/consoleLogRespuesta.png)

**Transformemos la respuesta a formato .JSON para pintar pokemon por consola veamos como se hace.**

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

> Importante la constante data convierte la respuesta en formato json.

> la constante data es toda la informacion de la api pero tranformada en formato JSON

> Inportante en la constante data debemos poner la palabra clave **await Porque recordemos que nuestra funcion es (async asincrona) y no puede haber un async sin un await todas las constantes que definamos en esta funcion callAPI llevaran la palabra clave await por lo que comentamos antes** porque todo lo que reciba de la API puede tardar un tiempo por mi conexion a internet una pigina lenta ect..

**Si no hacemos esto nos saldra el siguente error**

TypeError: Cannot read properties of undefined (reading 'map')
at callApi (api.js:66:22)

Si ejecutamos este console.log **console.log(data.results[3])** Nos imprimira por pantalla el 4 elemento del objeto que es charmander accediendo a la constante data que tiene la informacón de la API en formato json y al resultado de esa respuesta que contiene charmander se accede con **data.results[3])**

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

Este codigo nos saca todos los pokemon de la constante data que son 721 pokemon

![data Api all pokemon](/public/api_img/data_api.png)

**Que nos devuelve la API?**

- Cuantos elementos tiene el array 1302
- Como limimitamos el array solo nos devolvera 721 elementos
- nos devuelve el nombre del pokemon
- la url asociada a cada pokemon cada pokemon es un objeto

7. Ahora debemos de obtener los resultados dentro de data que es el json pero como lo hacemos existe un metodo que se llama **map()**

Los tipos de dato Map son muy similares a los Objetos de Javascript, ya que estos últimos se pueden usar como estructuras de diccionario mediante pares clave-valor. Sin embargo, los Object tienen algunas diferencias y puedeb recorrer objetos

Las diferencias no las explicare ahora sera en la parte de estructuras de control pero quedarse con que es similar a un objeto

**Vemamos el ejemplo del map() solo nos enfocaremos en la parte del map().**

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

**Veamos paso a paso lo que hay dentro del metodo map()**

1. primero realizamos un map de los resultados del json de data y hacemos una funcion flecha con el parametro pokemon que sera cada uno de los pokemon

```js
data.results.map((pokemon) => {
	// aqui va muestro codigo
});
```

2. Selecionamos muestro elemnto de HTML section con el metodo del dom **document.querySelector()**

3. Tenemos que crear 2 elemntos por javascript que recorran el metodo map() este metodo tiene los resultados del JSON gracias a la variable Response los elementos que crearemos seran un articulo que sera cada carta de pokemon y un titulo con el nombre del pokemon para crear un elemento tenemos este metodo **document.createElement("elemento a crear")** como es un map creara tantos elementos como haya en **data.results**

**Veamos un ejemplo creando estos 2 elementos**

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

![creando elementos en el DOM](/public/api_img/createElements.png)

Como podemos observar en la imagen nos crea los elementos article y h2 por cada elemento del metodo map() que recorre un objeto

Pero como sacamos el nombre del pokemon por consola y la url fuera del array de results

```js
const pokemonInformation = console.log(pokemon.name, pokemon.url);
// añadimos esta linea a lo que ya teniamos en el ejemplo anterior
```

##### Pero como se a que propiedad tengo que acceder?

Es muy sencillo la variable data nos da toda la API en formato JSON esta API
tiene una propiedad llamada results que nos dara todos los resultados de la API
accedemos a ella poniedo un punto y luego hacemos un map de pokemon ,pokemon sera cada uno de los elementos del array de results como comentamos antes.

Entonces para acceder al nombre del pokemon debemos de poner **pokemon.name**

y nos sacara el nombre del pokemon de cada elemento del array si queremos tener la URL hariamos esto **pokemon.url**

![acceder al nombre y a la url ](/public/api_img/name_url.png)

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

![sacar nombre y url por consola fuera del objeto](/public/api_img/conseguir_url_nombre.png)

### Añadir elementos al dom

Para esta parte final de javascript quitemos todos los console.log porque no nos haran falta simplemente eso era para depurar

tenemos que añadir estas 3 nuevas lineas a nuestro codigo de JS que explicaremos ahora.

```js
h2.textContent = pokemon.name;
section.appendChild(article);
article.appendChild(h2);
```

1. La primera linea **h2.textContent = pokemon.name;** en el elemento **h2** que creamos previamente hacedemos a su propiedad **textContent** y le decimos que sera igual al nombre del pokemon que hace textContent? simplemente añade texto por ejemplo el primer pokemon sera bulbasur pero aun no sale nada por pantalla porque no lo hemos añadido a ninguna etiqueta.

2. **section.appendChild(article);** appendChild inserta un elemento html desde javascript como hijo section.appendChild(article) en este ejemplo dentro de section habra un article

3. En la tercera linea es igual pero dentro del article habra un h2

Hemos acabado ahora añadiremos un poco de html css y javascript para ver el codigo completo y ver el resultado final.

### Codigo completo

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

![Poke Api](/public/api_img/pokemon.png)

### Conclusiones

ahora ya sabes como llamar a una API y obtener informacion de ella gracias a la asincronia has aprendido a usar fetch y ya sabes como funciona async await

> Nota esta documentación ira aumentando por ejemplo sacaremos las imagenes de los pokemon ect
