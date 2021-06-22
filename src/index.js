import Hangman from "./hangman"
import getPuzzle from "./requests"




const puzzleSel = document.querySelector('#puzzle')
const guessSel = document.querySelector('#guesses')
let game1 



window.addEventListener('keypress',function(e){
    const guess = e.key
    game1.makeGuess(guess)
    render()
})

const render = () =>{
    puzzleSel.innerHTML = ''
    guessSel.textContent = game1.StatusMessage

    game1.Puzzle.split('').forEach((letter)=>{
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleSel.appendChild(letterEl)
    })
}

const startGame = async () =>{
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle,5)
    render()
}

document.querySelector('#button').addEventListener('click',(e)=>{
    startGame()
})

startGame()
