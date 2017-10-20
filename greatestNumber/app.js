const myGuess = new Guesser (10, 2)

function Guesser(number, lives){
    this.number = number
    this.lives = lives    
}

Guesser.prototype.guess = function(n) {
    if(n > this.number){
        console.log(`${n} is too big.`)
        

        if(this.lives !== 0){
            /// if the user guesses a number too big, subtract one from total lives
            this.lives = this.lives - 1
            console.log(`You have ${this.lives} lives remaining.`)
        }else{
            console.log(`You lose!`)
        }
        
    }else if(n < this.number){
        console.log(`${n} is too small.`)

        if(this.lives !==0){
            /// if the user guesses a number too small, subtract one from total lives
            this.lives = this.lives - 1
            console.log(`You have ${this.lives} lives remaining.`)
        }else{
            console.log(`You lose!`)
        }
        
    }else if(n === this.number){
        console.log(`${n} is the correct guess!`)
    }
}



myGuess.guess(50)
myGuess.guess(7)
myGuess.guess(21)
myGuess.guess(10)
