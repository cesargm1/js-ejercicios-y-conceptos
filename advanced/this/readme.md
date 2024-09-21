# Para que sirve el this

**This** es una palabra clave que se usa mucho en funciones y objetos y arrays por defecto esto lo tiene todas las variables que declaramos **This hace referencia a todas las variables objetos y funciones**.

se usa para que el codigo sea mas limpio. 

Veamos un ejemplo con una función y un objeto.

```js
const coche = {
    marca:"toyota",
    modelo:"corolla",
    año: "2023",
     describir: function(){
        return `Este coche es un ${this.marca} modelo ${this.modelo} y es del año ${this.año}`
    },
};

console.log(coche.describir(this.marca,this.modelo,this.año))
```

### Pasos

1. Definimos el objeto coche.
2. Ponemos todas las claves par valor ejemplo:

   ```js
    marca:"toyota",
    modelo:"corolla",
    año: "2023",
   ```

3. > Podemos poner funciones dentro de objetos omitiendo la palabra clave const y el signo =

```js
 describir: function(){
        return `Este coche es un ${this.marca} modelo ${this.modelo} y es del año ${this.año}`
    }, // Esto dentro del objeto coche
```
## Como usar This

Nosotros en nuestra función de describir queremos acceder al objeto coche para sacar las marcas el modelo y el año para mostrar un mensaje.

### Podemos hacerlo sin this de esta forma.

```js
return `Este coche es un ${coche.marca} modelo ${coche.modelo} y es del año ${coche.año}`
// Esta funcción esta dentro del objeto coche
```
Pero nosotros podemos cambiar el objeto coche por la palabra clave this ya que esta palabra clave hace referencia al objeto coche

### Ejemplo con this

```js
 describir: function(){
    return `Este coche es un ${this.marca} modelo ${this.modelo} y es del año ${this.año}`
    },
    // Esta funcción esta dentro del objeto coche
```

4. Por ultimo hacemos un console log para mostrar el mensaje en consola 

```js
console.log(coche.describir(this.marca,this.modelo,this.año))
```

Hacemos un console.log accedemos al objeto coche 
> para acceder a una propiedad del objeto usamos el punto

#### Ejemplo desglosado

```js
console.log(coche.describir(this.marca,this.modelo,this.año))
```

 - objeto coche accedemos a la propiedad por el punto
  
 - this.marca es igual a coche.marca
  
 - this.modelo es igual a coche.modelo
  
 - this.año es igual a coche.año


## En resumen

this hace referencia a una variable,funcion,objeto u array para que tengamos que escribir menos.