// let counter = document.querySelectorAll(".counter")
// let countArr = Array.from(counter)
let type = document.querySelector(".type")
let typetext = type.innerHTML
type.innerHTML = ""
let typeDis = typetext.split("")
let typing = 0


function typedJs() {
    if (typing < typetext.length) {
        type.innerHTML += typetext.charAt(typing)
        typing++
    }
}
setInterval(() => {
    typedJs()
}, 100)
