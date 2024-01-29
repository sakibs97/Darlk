let playeronetext = document.querySelector(".playeronetext")
let playeroneinput = document.querySelector(".playeroneinput")
let playeronebtn = document.querySelector(".playeronebtn")
let playeroneerr = document.querySelector(".playeroneerr")
let playerone = document.querySelector(".playerone")
let playertwo = document.querySelector(".playertwo")
let playertwotext = document.querySelector(".playertwotext")
let playertwoinput = document.querySelector(".playertwoinput")
let playertwobtn = document.querySelector(".playertwobtn")
let playertwoerr = document.querySelector(".playertwoerr")
let chance = document.querySelector(".chance")


let result;
let chancevalue = 3

playeronebtn.addEventListener("click", () => {
    if (playeroneinput.value) {
        if (playeroneinput.value - 21) {
            if (playeroneinput.value >= 0 && playeroneinput.value < 21) {
                result = playeroneinput.value
                playerone.style.display = "none"
                playertwo.style.display = "block"
            } else {
                playeroneerr.innerHTML = "Please give 0 to 20"
            }
        } else {
            playeroneerr.innerHTML = "Please give some Number"
        }
    } else {
        playeroneerr.innerHTML = "Please give some value"
    }
})
playertwobtn.addEventListener("click", () => {
    if (playertwoinput.value) {

        if (playertwoinput.value - 21) {
            if (playertwoinput.value >= 0 && playertwoinput.value < 21) {
                if (playertwoinput.value == result) {
                    chance.innerHTML = "You Win"
                } else {
                    chancevalue--
                    if (chancevalue > 0) {
                        chance.innerHTML = chancevalue
                    } else {
                        chance.innerHTML = "You Los"
                    }
                }
            } else {
                playertwoerr.innerHTML = "Please give 0 to 20"
            }
        } else {
            playertwoerr.innerHTML = "Please give some Number"
        }
    } else {
        playertwoerr.innerHTML = "Please give some value"
    }
})

