// ejercicio 1 
const coche = {
    marca:"toyota",
    modelo:"corolla",
    año: "2023",
     describir: function(){
        return `Este coche es un ${this.marca} modelo ${this.modelo} y es del año ${this.año}`
    },
};

console.log(coche.describir(this.marca,this.modelo,this.año))



