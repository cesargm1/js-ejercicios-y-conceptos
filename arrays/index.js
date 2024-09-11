// 1. Crea un array que almacene siete colores.

const colors = ['rojo','verde','azul','amarillo','morado','blanco','negro']
// console.log(colors)

// 2. Añade tres colores más al array. Coloca uno en la primera posición y los otros dos al final.

colors.unshift('rosa')

colors.push("azul claro","marron")

// console.log(colors)

// 3. Elimina el color que está en la cuarta posición del array.

const indice = colors.indexOf("amarillo")

const removeColor = colors.splice(indice,1) 

// console.log(removeColor) // Muestra el color eliminado 

// console.log(colors)


// 4. Crea un set que almacene seis ciudades.

const ciudades = new Set(['Alicante','Paris','Londres',"Barcelona","Monaco"])
// console.log(ciudades)

// 5. Añade tres ciudades más al set, asegurándote de que una de ellas ya esté en el set.

 ciudades.add('Berlin')
 ciudades.add('Paris')
 ciudades.add('Roma')

console.log(ciudades)

const cityHas = ciudades.has('Egipto')

console.log(cityHas)