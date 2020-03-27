import getRandomNumber from 'utils/randomNumber'
import { SQUARE_LIST, RANGE_SPEED } from 'utils/globals'

/**
 * @class Square creates a Square instance into the DOM
 * add listener to be cloned on click event
 * and animates the square trought the screen
 * @param {Object} position
 * @param {number} position.x
 * @param {number} posiition.y
 */
export default class Square {
  constructor(position, context) {
    this.square = null;
    this.size = position.size;
    this.x = position.x;
    this.y = position.y;
    this.rightBorder = window.innerWidth;
    this.bottomBorder = window.innerHeight;
    this.dx = getRandomNumber(-RANGE_SPEED, RANGE_SPEED);
    this.dy = getRandomNumber(-RANGE_SPEED, RANGE_SPEED);
    this.context = context;
    this.color = `#${Math.random().toString(16).substr(2, 6)}`
  }

  /**
   * initialize square and Animation movement
   */
  initialize() {
    this.createSquare();
    this.createMovement();
  }

  /**
   * the square gets created and added to the global SQUARE_LIST array,
   * and draw on the main loop
   */
  draw() {
    this.context.fillRect(
      this.x,
      this.y,
      this.size,
      this.size,
    )
  }

  duplicate() {
    SQUARE_LIST.push(
      new Square({
        x: this.x,
        y: this.y,
      }),
    );
  }

  createMovement() {
    // handle the movement based on a direction instead of the position
    // this gives you the change to pivot on the desired borders
    if ((this.x + this.size) >= this.rightBorder - this.dx
    || this.x + this.dx <= 0) {
      this.dx = -this.dx;
    } else {
      this.dx = +this.dx;
    }
    if ((this.y + this.size) >= this.bottomBorder - this.dy || this.y + this.dy <= 0) {
      this.dy = -this.dy;
    } else {
      this.dy = +this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}
