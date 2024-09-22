const body = document.querySelector("body");
const butonGreen = document.querySelector(".button--green")
const butonBlack = document.querySelector(".button--black")
const butonReset = document.querySelector(".button--reset")
const butonRandom = document.querySelector(".button--random")



const colorsPrimary = ['green','black','white',"blue","pink","gray"];


const green = () => {
    document.body.style.backgroundColor = colorsPrimary[0]
}

const dark = () => {
    document.body.style.backgroundColor = colorsPrimary[1]
}

const white = () => {
    document.body.style.backgroundColor = colorsPrimary[2]
}

const getRandomColor = () => {
 document.body.style.backgroundColor = colorsPrimary[Math.floor(Math.random() * colorsPrimary.length)];
}

// addEventListener("evento ejemplo click toogle",funcion que ejecutara al suceder dicho evento)

// Al hacer chick en un boton llamara a la funcion asociada a dicho evento que tenga el boton por ejemplo la funcion green

// Ejmplos

butonGreen.addEventListener("click",green)

butonBlack.addEventListener("click",dark)

butonReset.addEventListener("click",white)

butonRandom.addEventListener("click",getRandomColor)