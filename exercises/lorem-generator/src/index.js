const putParagrafs = document.querySelector(".section__input-paragrafs")
const putWords = document.querySelector(".section__input--words")
const button = document.querySelector(".section__button")
const result = ""

const words = [
    "Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur", "Adipiscing", "Elit",
    "Sed", "Do", "Eiusmod", "Tempor", "Incididunt", "Labore", "Dolore", "Magna",
    "Aliqua", "Ut", "Enim", "Minim", "Veniam", "Nisi", "Ultricies", "Pharetra",
    "Augue", "Faucibus", "Accumsan", "Viverra", "Varius", "Fermentum", "Cursus",
    "Quisque", "Vehicula", "Volutpat", "Elementum", "Pulvinar", "Fringilla",
    "Euismod", "Pellentesque", "Sollicitudin", "Sagittis", "Nibh", "Integer",
    "Mattis", "Commodo", "Ornare", "Risus"
  ]
  

const userParagrafs = () => {
    console.log(putParagrafs.value)
    alert(` Generando Lorem Ipsum de ${putParagrafs.value} parrafos`)
}

const userWords = () => {
  console.log(putWords.value)
  alert(` Generando Lorem Ipsum de ${putWords.value} palabras`)
}

const generateWords = () => {
  
}

button.addEventListener("click",userParagrafs)

button.addEventListener("click",userWords)

button.addEventListener("click",generateWords)