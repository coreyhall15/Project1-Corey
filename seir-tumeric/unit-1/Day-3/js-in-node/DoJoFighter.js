//Random number function

const randomNum = (num) => {
    return Math.floor(Math.random() * num)
}


//Fighter Class 

class Fighter {
    constructor(name, health, strength, defense) {

        this.name = name,
        this.health = health, randomNum(100),
        this.strength = strength, randomNum(8),
        this.defense = defense, randomNum(5)
        }

    }
    attack(fighter);{
       const move = randomNum(this.moves.length)
        const damage = randomNum(this.health)
        fighter.life -= damage
        console.log(`${this.name} attacked ${fighter.name} who is left with ${this.health}`)
    }


    //Create fighters

    const Ken = new Fighter('Ken', '95', '6', '3')
    const Ryu = new Fighter('Ryu', '100', '7', '2')
     
    //Toggles

    let gameOver = true
    let kenRyu = true
    while(GameOver){

        if (kenRyu){
            Ken.attack(Ryu)

        } else {
            Ryu.attack(Ken)

        }
        kenRyu = ! kenRyu

        if (Ken.life <= 0){
            console.log ('Ken is Dead. Ryu wins!')
            gameOver = false
        }

        if (Ryu.life <= 0){
            console.log ('Ryu is Dead. Ken wins!')
            gameOver = false
        }
    }