let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
let list = document.querySelector(".list")
let edithtml = document.querySelector(".edithtml")

let todo = []
let id;

btn.addEventListener("click", () => {
    todo.push(input.value)
    addTodo()
})
edithtml.addEventListener("click", () => {
    todo[id] = input.value
    addTodo()
})

function addTodo() {
    list.innerHTML = ""
    todo.map((item) => {
        list.innerHTML += `<li>${item}<button class="up">Edit</button><button class="dlt">Delete</button></li>`
    })

    let dltrr = document.querySelectorAll(".dlt")
    let uprr = document.querySelectorAll(".up")
    let dltItem = Array.from(dltrr)
    let upItem = Array.from(uprr)

    dltItem.map((dltinn, index) => {
        input.value = ""
        dltinn.addEventListener("click", () => {
            todo.splice(index, 1)
            addTodo()
        })
    })
    upItem.map((upinn, index) => {
        upinn.addEventListener("click", () => {
            input.value = todo[index]
            id = index
        })
    })

}
