

class SnakeCell {
  constructor(position) {
    this.position = {
      x: position.x, 
      y: position.y
    };
  }

  setPosition(position){
    this.position = {
      x: position.x, 
      y: position.y
    };
  }  

}

class SnakeHead extends SnakeCell {
  constructor(position, direction) {
    super(position);
    this.direction = direction;
  }

  setDirection(direction){
    this.direction = direction;
  }

  setPosition(position){
    this.position = position;
  }
}

export {SnakeCell, SnakeHead};
