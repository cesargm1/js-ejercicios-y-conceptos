const putParagrafs = document.querySelector(".section__label__input")
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
  

const generateParafrafs = () => {
    console.log(putParagrafs.value)
    alert(` Generando Lorem Ipsum de ${putParagrafs.value} parrafos`)
}

button.addEventListener("click",generateParafrafs)