function createDragon(name, rider, temperment) {
  return {
    name,
    rider,
    temperment,
    timesEaten: 0,
    hungry: true
  }
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`;
}

function eat(dragon) {
  dragon.timesEaten += 1;
  if(dragon.timesEaten >= 3) {
    dragon.hungry = false;
  }
  return dragon;
}

function findFireBreathers(dragons) {
  var fireBreathers = [];
  dragons.forEach((dragon) => {
    if(dragon.temperment == 'aggressive') {
      fireBreathers.push(dragon);
    }
  })
  return fireBreathers;
}



module.exports = {
  createDragon,
  greetRider,
  eat, 
  findFireBreathers
}