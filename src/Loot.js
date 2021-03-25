import Entity from './Entity.js';

class Loot extends Entity {
  action(verb, world) {
    if(verb === 'bump') {
      console.log('pickup', this);
    }
    if(verb === 'drop') {
      console.log('drop', this);
    }
  }
}

export default Loot;
