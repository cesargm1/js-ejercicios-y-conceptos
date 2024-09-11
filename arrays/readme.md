# Arrays Ejercicios operaciones y Metodos mas comunes

1. Crea un array que almacene siete colores.

```js
const colors = [
	"rojo",
	"verde",
	"azul",
	"amarillo",
	"morado",
	"blanco",
	"negro",
];

console.log(colors);
```

2. Añade tres colores más al array. Coloca uno en la primera posición y los otros dos al final.

## Medodos importantes

- **Metodo Pop()**: Este método elimina el último elemento de un array mutando su estructura inicial y luego devuelve dicho elemento como respuesta.

- **Método Push()**: Este método agrega los nuevos elementos al final del array y luego nos devuelve una nueva longitud de este array.

- **método shift()** elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

- **método unshift()** agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

### Resumen de metodos

#### Metodos para eliminar elementos

- **Pop()**
- **shift()**

#### Metodos para Agregar elementos

- **Push()**

- **unshift()**

```js
colors.unshift("rosa");

colors.push("azul claro", "marron");
```

3. Elimina el color que está en la cuarta posición del array.

```js
const indice = colors.indexOf("amarillo");

const removeColor = colors.splice(indice, 1);

console.log(removeColor); // Muestra el color eliminado

console.log(colors);
```

> Nota el metodo splice añadir elementos

4. Crea un set que almacene seis ciudades.

> Importante: El set no permite datos repetidos evitando elementos diplicados

```js
const ciudades = new Set([
	"Alicante",
	"Paris",
	"Londres",
	"Barcelona",
	"Monaco",
]);
```

5. Añade tres ciudades más al set, asegurándote de que una de ellas ya esté en el set.

> Nota: Usaremos el codigo del ejercicio 4

> Importante Set es un objeto

```js
ciudades.add("Berlin");
ciudades.add("Paris");
ciudades.add("Roma");

console.log(ciudades);
```

Como podemos ver en la salida del console log no se muestra el valor de paris porque ya esta repetido

> Nota esto se puede hacer mejor con bucles

Podemos ver si un valor esta dondro del objeto set o no con el metodo **has()**

```js
const cityHas = ciudades.has("Egipto");
console.log(cityHas);
```

Como no tenemos ninguna ciudad llamada egipto mostrara falso si tuvieramos la ciudad de egipto en el set mostraria verdadero

6. Elimina una ciudad específica del set a tu elección.
