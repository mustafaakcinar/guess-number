const container = document.querySelector(".container")
const guess = document.querySelector("#guess")
const body = document.querySelector("body")
const game = document.querySelector(".game")
const information = document.querySelector(".information")
const level = document.querySelector(".level")
const hpBar = document.querySelector(".hp-bar")
const checkBtn = document.querySelector("#check-btn")

let hp;
let random;

body.onload = function () {
    game.style.display = "none"
    container.style.justifyContent = "center"
    guess.addEventListener("input", () => guess.value === "" ? 
    checkBtn.disabled = true 
    : checkBtn.disabled = false
)}

const randomNumber = (n) => {
    return Math.floor(Math.random() * (n + 1))
}

const msg = (message) => {
    document.querySelector(".messages").textContent = message
}

document.getElementById("diff-info").onclick = () => {
    document.querySelector(".info-2").classList.toggle("visible")
}

const difficulty = () => {
    random = randomNumber(edge)
    game.style.display = "flex"
    container.style.justifyContent = "space-between"
    information.style.display = "none"
    hpBar.textContent = "❤".repeat(hp)
    msg("Lets Go!!!")
    edge == 20 ? 
    level.textContent = `Level : Easy (0-${edge})` 
    : edge == 50 ? 
    level.textContent = `Level : Medium (0-${edge})`
    : level.textContent = `Level : Hard (0-${edge})`
    guess.focus()

}




document.getElementById("easy-btn").onclick = () => {hp = 4, edge = 20, difficulty() }
document.getElementById("medium-btn").onclick = () => {hp = 6, edge = 50, difficulty() }
document.getElementById("hard-btn").onclick = () => {hp = 8, edge = 100, difficulty() }

const checkNum = () => {
    let number = guess.value
    if (isNaN(number) || number < 0 || number > edge) {
        msg("Invalid entry please try again...")
    } else if (number == random) {
        msg("Congratulations")
    } else {
        number < random ?
            msg(`Higher than ${number}`)
            : msg(`Lower than ${number}`)
        if (hp > 1) {
            hp--
            hpBar.textContent = "❤".repeat(hp)
        } else {
            hpBar.textContent = "💔"
            msg("Game Over...")
            document.querySelectorAll(".begin").forEach((item) => item.disabled = true)
        }
    }
    guess.value = ""
    guess.focus()
}


document.getElementById("check-btn").onclick = () => checkNum()
body.onkeydown = (e) => e.key === "Enter" ? checkNum() : ""


document.querySelector("#reset-btn").onclick = () => {
    msg("New Game Started")
    document.querySelectorAll(".begin").forEach((item) => item.disabled = false)
    game.style.display = "none"
    container.style.justifyContent = "center"
    information.style.display = "block"
    document.querySelector(".diff-btn").style.display = "block"
}


