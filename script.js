//  Variable declaration

const container = document.querySelector(".container")
const guess = document.querySelector("#guess")
const body = document.querySelector("body")
const game = document.querySelector(".game")
const information = document.querySelector(".information")
const level = document.querySelector(".level")
const hpBar = document.querySelector(".hp-bar")
const checkBtn = document.querySelector("#check-btn")
const info2 = document.querySelector(".info-2")

let hp;
let random;


// body load event listener for first appearence
body.onload = function () {
    game.style.display = "none"
    container.style.justifyContent = "center"
}

// random number function
const randomNumber = (n) => {
    return Math.floor(Math.random() * (n + 1))
}

// message function for player
const msg = (message) => {
    document.querySelector(".messages").textContent = message
}

// hidden information box click event listener
document.getElementById("diff-info").onclick = () => {
    info2.classList.toggle("visible")
}

// they will be when the game difficulty level is selected 
const difficulty = () => {
    random = randomNumber(edge)
    game.style.display = "flex"
    container.style.justifyContent = "space-between"
    information.style.display = "none"
    document.querySelector(".diff-btn").style.display = "none"
    info2.classList.remove("visible")
    hpBar.textContent = "❤".repeat(hp)
    msg("Lets Go!!!")
    edge == 20 ?
        level.textContent = `Level : Easy (0-${edge})`
        : edge == 50 ?
            level.textContent = `Level : Medium (0-${edge})`
            : level.textContent = `Level : Hard (0-${edge})`
    guess.disabled = false
    guess.addEventListener("input", () => guess.value === "" ?
        checkBtn.disabled = true
        : checkBtn.disabled = false
    )
    guess.focus()
}

// game level settings click listeners
document.getElementById("easy-btn").onclick = () => { hp = 4, edge = 20, difficulty() }
document.getElementById("medium-btn").onclick = () => { hp = 6, edge = 50, difficulty() }
document.getElementById("hard-btn").onclick = () => { hp = 8, edge = 100, difficulty() }

// check button click function
const checkNum = () => {
    let number = guess.value
    checkBtn.disabled = true
    // when input is empty user cant click check button control
    guess.addEventListener("input", () => guess.value === "" ?
        checkBtn.disabled = true
        : checkBtn.disabled = false
    )
    if (isNaN(number) || number < 0 || number > edge) {
        msg("Invalid entry please try again...")
    } else if (number == random) {
        msg("Congratulations...Press Restart for New Game")
        document.querySelectorAll(".begin").forEach((item) => item.disabled = true)
        Swal.fire({
            title: "Good job!",
            text: "You did it well!!",
            imageUrl: "./images/giphy.webp",
            background: "black",
            color: "white"
        });
    } else {
        number < random ?
            msg(`Higher than ${number}`)
            : msg(`Lower than ${number}`)
        if (hp > 1) {
            hp--
            hpBar.textContent = "❤".repeat(hp)
        } else {
            hpBar.textContent = "💔"
            msg("Press Restart for New Game")
            Swal.fire({
                title: "Game Over!",
                text: `You need to work harder😎 Number was ${random}`,
                imageUrl: "./images/pixel-art-13575_256.gif",
                background: "black",
                color: "white",
            });
            document.querySelectorAll(".begin").forEach((item) => item.disabled = true)
        }
    }
    guess.value = ""
    guess.focus()
}

// check button and enter keydown event listeners
document.getElementById("check-btn").onclick = () => checkNum()
body.onkeydown = (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // Formun varsayılan davranışını engelle
        checkNum();
    }
};

// reset button function and event listener
document.querySelector("#reset-btn").onclick = () => {
    msg("New Game Started")
    game.style.display = "none"
    container.style.justifyContent = "center"
    information.style.display = "block"
    document.querySelector(".diff-btn").style.display = "block"
    guess.value = ""
}
