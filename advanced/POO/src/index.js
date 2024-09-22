class Food {
    constructor(id,name,type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
    
  make(type) {
    return `cogo el ${type} del arbol`
  }
}


const banana = new Food(2, "banana" ,"fruta")

console.log(`este es el pedido ${banana.id} ${banana.name} y es de tipo ${banana.type}`)

console.log(banana.make('fruta'))

const iceCream = new Food (3, "ice cream", "dulce")

console.log(`este es el pedido ${iceCream.id} ${iceCream.name} y es de tipo ${iceCream.type}`)


