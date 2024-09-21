const copyText = document.querySelector(".label__input")
const button = document.querySelector(".button")

const copy = () => {
    // select all text in variable
    copyText.select();
     // Copy the text inside the text field
     navigator.clipboard.writeText(copyText.value)
     alert("text copied successfully")
}

button.addEventListener("click",copy)