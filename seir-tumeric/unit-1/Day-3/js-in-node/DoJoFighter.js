class Fighter {

    constructor(fightersName) {
      //atributes
      this.fightersName = fightersName;
      this.health = Math.floor(Math.random() * 10) + 10;
      this.strength = Math.floor(Math.random() * 6) + 5; 
      this.defense =  Math.floor(Math.random() * 6) + 5;
    }
    //methods
    attack(theOther) {
      // one fighter (attacker) attacks "theOther" fighter (the defense fighter)
      let damageDealth = this.strength - theOther.defense;
      let theOtherHealth = theOther.health - damageDealth;
      let healthLeft = theOther.health - damageDealth;
  
      if (theOtherHealth > 0) {
        console.log(
          `${this.fightersName} did ${damageDealth} damage to ${theOther.fightersName} who is left with ${healthLeft} health`
        );
      } else if (damageDealth <= 0) {
        console.log(
          `${this.fightersName} did not do any damage to ${theOther.fightersName}`
        );
      } else {
        console.log(
          `${this.fightersName} did ${damageDealth} damage to ${theOther.fightersName} who has no health left.`
        );
      }
    }
  }
  //create instances
  // const fighter1 = new Fighter("Manny");
  // const fighter2 = new Fighter("Carlos");
  
  // console.log(fighter1, fighter2);
  
  const Manny = new Fighter("Manny");
  const Carlos = new Fighter("Carlos");
  
  const gameLogic = (Manny, Carlos) => {
    if (
      Carlos.strength - Manny.defense <= 0 &&
      Manny.strength - Carlos.defense <= 0
    ) {
      console.log(`There is a draw with no winner`);
      //break;
    } else if (Carlos.health > 0 && Manny.health > 0) {
      Carlos.attack(Manny);
      if (Manny.health > 0) {
        Manny.attack(Carlos);
      } else if (Manny.health <= 0) {
        console.log(
          `${Manny.name} has no health remaining. ${Carlos.name} is the winner!`
        );
        //break
      } else if (Carlos.health <= 0) {
        console.log(
          `${Carlos.name} has no health remaining. ${Manny.name} is the winner!`
        );
        //break
      }
    }
  };
  
  console.log(gameLogic(Manny, Carlos));