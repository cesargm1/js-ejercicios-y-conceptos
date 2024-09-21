# POO

## conceptos clave

### Que es una clase

Una clase es una plantilla o plano a partir del cual podemos crear objetos. Piensa en una clase como el diseño de una casa: especifica las características que una casa puede tener (como paredes, techos, puertas, color, etc.) apartir de este plano de la casa podemos crear muchas casas que tengan la misma estructura

## Ejemplo:

Supongamos que tienes una clase llamada Casa. Esta clase define propiedades como:

- Materiales: ladrillo, cemento
- Color: rojo, azul, etc.
- Tamaño: grande, pequeño, etc.

> Inportante: Cuando nosotros creamos una nueva casa apartir de una clase significa que estamos creando un objeto
> Resumiendo una clase contiene objetos que se crean apartir de una clase

Si Clara quiere añadir una piscina a su casa Craera el objeto casaPiscina que parte de la clase casa cogera las propiedades y valores de la clase casa y añadira una nueva propiedad a su casa esta propiedad sera piscina

```js
const pisina = true;
```

Esta nueva propiedad pertenece al objeto casaPiscina

> Los nombres de las clases siempre van en mayuscula

> Constructor contruye nuestros objetos atraves de la plantilla o o clase con esto podemos crear muchos objetos facilmnte plantilla y clase es lo mismo

**Asi creamos un nuevo objeto banana a partir de la clase Food.**

```js
const banana = new Food(); // creamos el objeto banana que pertenece a la clase food

console.log(
	`este es el pedido ${banana.id} ${banana.name} y es de tipo ${banana.type}`
);
```

Si queremos crear otro objeto es asi de simple

```js
const iceCream = new Food(3, "ice cream", "dulce");
console.log(
	`este es el pedido ${iceCream.id} ${iceCream.name} y es de tipo ${iceCream.type}`
);
```

### asi se puede acceder a las propiedades del objeto

#### Ejemplo el id de la manzana

```js
console.log(banana.id);
```

### Podemos pasar parametros

```js
class Food {
	constructor(id, name, type) {
		this.id = id;
		this.name = name;
		this.type = type;
	}
}

const banana = new Food(2, "hamburger", "meat");

console.log(`este es el pedido ${banana.id} ${banana.name} de ${banana.type}`);
```

Si no sabes que es el this mira este documento [This js](/this/readme.md)
