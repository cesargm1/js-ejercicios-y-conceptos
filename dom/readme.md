# Manejar el DOM (Document Object Model)

## Que es el DOM

Es la estructura de nuestro documento html en forma de arbol. Que esta formado por multiples elementos anidados. Anidados significa que las etiquetas **HTML** pueden estar dentro de otras etiquetas HTML esto se puede ver perfectamente desde las devTools en el inspector de elementos

### Ejemplo del DOM

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Usando el DOM</title>
	</head>
	<body>
		<h1>titulo</h1>
		<section>
			<article>
				<h2>titulo del articulo</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
					nisi hic tenetur labore, eos quia, omnis temporibus pariatur neque
					exercitationem quam cum fugit, suscipit possimus! Deleniti accusantium
					blanditiis dolorum quibusdam! Voluptate consequuntur sequi quae error
					ut quasi aliquid! Et placeat cumque offici a quaerat. Repudiandae enim
					corporis unde, dolorum voluptatibus autem expedita ipsum harum quaerat
					nulla ad maxime eos alias aliquid?
				</p>
			</article>
		</section>
	</body>
</html>
```

Como habiamos dicho antes el **DOM** lo conforman elementos anidados

`La etiqueta <body> contiene:
Un <h1>, que representa el título principal.
Una <section>, que a su vez contiene:
Un <article>, dentro del cual hay:
Un <h2>, para el título del artículo.
Un <p>, que contiene el texto del artículo.`

### Veamos este ejemplo de forma mas grafica

![dom tree](/public/img/dom/dom_tree.png)

En javascript cuando hablamos de DOM nos referimos a esta estrictura de arbol.

**podemos hacer muchas cosas con el DOM**

- Crear nuevos elementos
- borrar elementos
- cambiar el estilo de un elemento

y muchas cosas mas.

> Para aceder al DOM usamos un objeto llamado document

Podemos encontrarnos elementos por cada etiqueta HTML. **Aclaración un elemento es una etiqueta HTML**

**Algunos ejemplos son:**

- createComment() crea un nuevo comentario.
- document.title Nos devuelve el titulo
- document.getElementById("url") nos devuelve el ID llamado url

<!-- probar ejemplos -->

## Buscar elementos en js

Si en nuestro codigo de javascript queremos buscar un elemento HTML para hacer modificaciones primero tenemos que buscar ese elemento que nos interesa modificar

Existen varios metodos que nos permiten buscar elementos con **javascript** los dividiremos en 2 secciones los metodos antiguos y los metodos modernos

### Metodos antiguos

- .getElementById(id) busca un elemento por su id devuelve solo 1.

- .getElementsByClassName(class) busca un elemento por su clase y devuelve un array con todas las clases que encontro.

- .getElementsByTagName(tag) busca etiquetas HTML devuelve un array con todos los tag que encontro

#### Veamos ejemplos de todos ellos

##### getElementById(id)

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Usando el DOM</title>
	</head>
	<body>
		<h1 id="dom">titulo</h1>
		<section>
			<article>
				<h2>titulo del articulo</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
					nisi hic tenetur labore, eos quia, omnis temporibus pariatur neque
					exercitationem quam cum fugit, suscipit possimus! Deleniti accusantium
					blanditiis dolorum quibusdam! Voluptate consequuntur sequi quae error
					ut quasi aliquid! Et placeat cumque offici a quaerat. Repudiandae enim
					corporis unde, dolorum voluptatibus autem expedita ipsum harum quaerat
					nulla ad maxime eos alias aliquid?
				</p>
			</article>
		</section>
		<script src="dom.js"></script>
	</body>
</html>
```

> Inportante poner el script al final para que el DOM se carge por completo si no queremos hacer esto tenemos este metodo que carga el DOM **DOMContenLoaded**.
> Si el DOM no se carga no podremos manipularlo por eso es muy importante tener esto en cuenta

```js
const element = document.getElementById("dom");

console.log(element);
```

### Veamos un paso a paso con ejemplos

> Inportante: El paso a paso lo repetire solo una vez porque en todos es muy similar con alguna ligera variacion

1.  primero debemos de crear nuestro documento **HTML** muy importante que el script este al final para que esto funcione ponemos lo que queramos en el documento y creamos un id usaremos los ejemplos de antes para explicarlo.

2.  Creamos un id en nuestra etiqueta h1 con el nombre de dom

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Usando el DOM</title>
	</head>
	<body>
		<h1 id="dom">titulo</h1>
		<section>
			<article>
				<h2>titulo del articulo</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
					nisi hic tenetur labore, eos quia, omnis temporibus pariatur neque
					exercitationem quam cum fugit, suscipit possimus! Deleniti accusantium
					blanditiis dolorum quibusdam! Voluptate consequuntur sequi quae error
					ut quasi aliquid! Et placeat cumque offici a quaerat. Repudiandae enim
					corporis unde, dolorum voluptatibus autem expedita ipsum harum quaerat
					nulla ad maxime eos alias aliquid?
				</p>
			</article>
		</section>
		<script src="dom.js"></script>
	</body>
</html>
```

pasemos a nuestro archivo **js**

3. Definimos una constante **element** accedemos al objeto document dentro tiene un metodo llamado **getElementById** este metodo selecionara el id que pongamos entre parentesis

```js
const element = document.getElementById("dom");

console.log(element);
```

4. Por ultimo realizamos un console.log(variable) para ver que sale por pantalla para ello hacedemos al inspector de elementos.

### Resultado

![getElementById](/public/img/dom/getElementById.png)

Como podemos obserbar en la imagen de abajo sale nuestro elemento **h1** por consola

##### getElementsByClassName

Busca elemntos que tengan una clase determinada

> Inportante este metodo esta en plural lo que significa que nos debolvera un array con todos los elementos que encuentre si no encuentra ninguno devuelve un array vacio no como en el caso de **getElementById(id)** que devuelve solo un elemnto

**Modifiquemos un poco el ejemplo anterior**

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Usando el DOM</title>
	</head>
	<body>
		<h1 id="dom">titulo</h1>
		<section>
			<article>
				<h2>titulo del articulo</h2>
				<p class="section__paragraf">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
					nisi hic tenetur labore, eos quia, omnis temporibus pariatur neque
					exercitationem quam cum fugit, suscipit possimus! Deleniti accusantium
					blanditiis dolorum quibusdam! Voluptate consequuntur sequi quae error
					ut quasi aliquid! Et placeat cumque offici a quaerat. Repudiandae enim
					corporis unde, dolorum voluptatibus autem expedita ipsum harum quaerat
					nulla ad maxime eos alias aliquid?
				</p>
			</article>
		</section>

		<section>
			<article>
				<h2>titulo del articulo</h2>
				<p class="section__paragraf">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
					nisi hic tenetur labore, eos quia, omnis temporibus pariatur neque
					exercitationem quam cum fugit, suscipit possimus! Deleniti accusantium
					blanditiis dolorum quibusdam! Voluptate consequuntur sequi quae error
					ut quasi aliquid! Et placeat cumque offici a quaerat. Repudiandae enim
					corporis unde, dolorum voluptatibus autem expedita ipsum harum quaerat
					nulla ad maxime eos alias aliquid?
				</p>
			</article>
		</section>
		<script src="dom.js"></script>
	</body>
</html>
```

**js**

```js
const element = document.getElementsByClassName("section__paragraf");

console.log(element);
```

Aqui lo unico que hemos cambiado a sido el metodo del DOM que ahora es **getElementsByClassName('clase')** que seleciona la clase entre() por lo demas la logica es la misma que el ejemplo anterior

#### Resultado

![getElementByClassName](/public/img/dom/getElementByClassName.png)

Al final como podemos ver en la imagen devuelve un array con todos los elementos que tengan la clase **section\_\_paragraf** y hasta nos debuelve su tamaño

Tambien si nos interesa podemos coger el elemneto que queramos del array indicando su posicion de esta manera

```js
const element = document.getElementsByClassName("section__paragraf");

console.log(element[0]);
```

En este ejemplo cogemos el primer elemnento del array

![getElementByClassName one](/public/img/dom/getElementByClassNameOne.png)

### getElementsByTagName(tag)

Seleciona la etiqueta HTML que le indiquemos entre parentesis partimos de nuestro ejemplo base

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Usando el DOM</title>
	</head>
	<body>
		<h1 id="dom">titulo</h1>
		<section>
			<article>
				<h2>titulo del articulo</h2>
				<p class="section__paragraf">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
					nisi hic tenetur labore, eos quia, omnis temporibus pariatur neque
					exercitationem quam cum fugit, suscipit possimus! Deleniti accusantium
					blanditiis dolorum quibusdam! Voluptate consequuntur sequi quae error
					ut quasi aliquid! Et placeat cumque offici a quaerat. Repudiandae enim
					corporis unde, dolorum voluptatibus autem expedita ipsum harum quaerat
					nulla ad maxime eos alias aliquid?
				</p>
			</article>
		</section>

		<section>
			<article>
				<h2>titulo del articulo</h2>
				<p class="section__paragraf">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
					nisi hic tenetur labore, eos quia, omnis temporibus pariatur neque
					exercitationem quam cum fugit, suscipit possimus! Deleniti accusantium
					blanditiis dolorum quibusdam! Voluptate consequuntur sequi quae error
					ut quasi aliquid! Et placeat cumque offici a quaerat. Repudiandae enim
					corporis unde, dolorum voluptatibus autem expedita ipsum harum quaerat
					nulla ad maxime eos alias aliquid?
				</p>
			</article>
		</section>
		<script src="dom.js"></script>
	</body>
</html>
```

**js**

```js
const element = document.getElementsByTagName("section");

console.log(element);
```

El metodo **getElementsByTagName('etiqueta')** devuelve un array con las etiquetas que coincidan

![getElementsByTagName](/public/img/dom/getElementByTagName.png)

Como podemos ver en este ejemplo nos devuelve un array con las etiquetas que indiquemos
