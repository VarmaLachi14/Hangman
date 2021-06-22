class Hangman{
    constructor(word,remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.currentStatus = 'playing'
    }
    calucalteStatus(){
        let finished = true
        this.word.forEach((check) =>{
            if(this.guessedLetters.includes(check) || check === ' '){
                
            }else{
                finished = false
            }
        })
        
        if(this.remainingGuesses === 0){
            this.currentStatus = 'failed'
        }else if(finished){
            this.currentStatus = 'finished'
        }else{
            this.currentStatus = 'playing'
        }        
    }
    get Puzzle(){
        let puzzle = ''
        this.word.forEach((letter) =>{
            if(this.guessedLetters.includes(letter) || letter === ' '){
                puzzle += letter
            }else{
                puzzle += "*"
            }
        })
        return puzzle        
    }
    get StatusMessage(){
        if(this.currentStatus === 'playing'){
            return `Gusses left: ${this.remainingGuesses}`
        }else if(this.currentStatus === 'failed'){
            return `Nice try! The word was "${this.word.join('')}"`
        }else{
            return `Great Work`
        }
    }
    
    makeGuess(guess){
        guess = guess.toLowerCase()
    
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if(this.currentStatus !== 'playing'){
            return
        }
    
        if(isUnique){
            this.guessedLetters = [...this.guessedLetters,guess]
        }
    
        if(isUnique && isBadGuess){
            this.remainingGuesses--
        }
        this.calucalteStatus()
    }    
}

export {Hangman as default}