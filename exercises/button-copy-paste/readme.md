# Copy paste

## Todo el código

```js
const copyText = document.querySelector(".label__input");
const button = document.querySelector(".button");

const copy = () => {
	// select all text in variable
	copyText.select();
	// Copy the text inside the text field
	navigator.clipboard.writeText(copyText.value);
	alert("text copied successfully");
};

button.addEventListener("click", copy);
```

Seleccionamos los elementos del label e input por sus selectores

```js
const copyText = document.querySelector(".label__input");
const button = document.querySelector(".button");
```

## Veamos la función paso a paso

1. creamos una función flecha que se llamará copy

```js
const copy = () => {};
```

2. Seleccionamos la variable del input y accedemos al método **select()**

- El método **select()** selecciona todo el texto de un imput o textarea

```js
const copy = () => {
	copyText.select();
};
```

### Navigator.clipboard

La API del Portapapeles se puede utilizar para usar funciones de cortar, copiar y pegar dentro de una web

> Importante: la propiedad clipboard es de solo lectura.

El objeto Clipboard se usa para acceder al portapapeles del ordenador.

```js
const copy = () => {
	copyText.select();
	navigator.clipboard.writeText(copyText.value);
};
```

De esta forma accedemos al objeto Navegador que añadirá la función de portapapeles accediendo al objeto clipboard y a partir de este accederá a un método **writeText(variable)** que copiará el texto de nuestra variable **copyText** que es nuestro elemento input.

```js
const copy = () => {
	copyText.select();
	navigator.clipboard.writeText(copyText.value);
	alert("text copied successfully");
};
```

### Alert + add.Event.Listener

1. Creamos una alerta para que, cuando se llame a la función copy, pulsando el botón, se escriba el mensaje text copied successfully.

```js
button.addEventListener("click", copy);
```

2. cuando pulsemos el botón haciendo un click llamará a la función copy y ejecutará el código que está entre llaves.
