import Entity from './Entity.js'

class Player extends Entity {
  inventory = [];


  attributes = {
    name: 'Player',
    ascii: '@',
    health: '100'
  }

  add(item) {
    this.inventory.push(item);
  }

  move(dx,dy){
    this.x += dx;
    this.y += dy;
  }

  copyPlayer() {
    let newPlayer = new Player();
    Object.assign(newPlayer, this);
    return newPlayer;
  }

}

export default Player;
