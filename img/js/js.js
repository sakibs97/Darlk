// let back = document.querySelector(".top")
// back.addEventListener("click",()=>{
//     window.scrollTo({top: 0, behavior: "smooth"})
// })

// window.addEventListener("scroll",()=>{
//     let scrolling = document.scrollingElement.scrollTop
//     if(scrolling > 100){
//         back.style.display = "block" 
//     }else{
//         back.style.display = "none"
//     }

// })

let body = document.querySelector("body")
let main = document.querySelector(".main")

body.addEventListener("click",(e)=>{
    if(e.target.classList[0] == "image"){
        main.innerHTML = `<img src=${e.target.dataset.url} alt=""> <i>icon</i>`
        main.classList.add("main2")
    }else{
        main.innerHTML = ""
        main.classList.remove("main2")
    }
})