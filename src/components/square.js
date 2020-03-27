import getRandomNumber from 'utils/randomNumber'
import { RANGE_SPEED } from 'utils/globals'

/**
 * @class Square creates a Square instance into the canvas context and
 * make the reposition on the canvas based on the velocity
 * @param {Object} position
 * @param {number} position.x
 * @param {number} posiition.y
 * @param {Object} context canvas API context
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

  /**
   * the direction is the position that sum or rest where the axis of the square will be draw on the canvas
   * if it gets to the boundaries of the page will start to rest the axis position where the square is attached
   */
  createMovement() {
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
