# POO

## conceptos clave 

### Que es una clase 

- clases Es como un plano o una plantilla por ejemplo nosotros creamos una casa esta casa tiene propiedades comunes con todas las casas ladrilo cemento paredes suelo

> Los nombres de las clases siempre van en mayuscula

> Constructor contruye nuestros objetos atraves de la plantilla o o clase con esto podemos crear muchos objetos facilmnte plantilla y clase es lo mismo

**Asi creamos un nuevo objeto banana a partir de la clase Food.**

```js
const banana = new Food() // creamos el objeto banana que pertenece a la clase food

console.log(`este es el pedido ${banana.id} ${banana.name} y es de tipo ${banana.type}`)
```

Si queremos crear otro objeto es asi de simple

```js
const iceCream = new Food (3, "ice cream", "dulce")
console.log(`este es el pedido ${iceCream.id} ${iceCream.name} y es de tipo ${iceCream.type}`)
```


 se puede acceder a las  propiedades del objeto 
 
 #### Ejemplo el id de la manzana 

```js
console.log(banana.id)
```

### Podemos pasar parametros

```js
class Food {
    constructor(id,name,type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
    
}


const banana = new Food(2,"hamburger","meat")

console.log(`este es el pedido ${banana.id} ${banana.name} de ${banana.type}`)
```