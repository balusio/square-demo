
(function() {
  const SQUARE_LIST = [];
  const SQUARE_SIZE = 50;
  
  /** 
   * @return a random Number between ranges
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  */
  const getRandomPosition = (minRange,maxRange)=> { 
    const min = minRange;
    const max = Math.floor(maxRange);
    const random = Math.floor(Math.random() * (max - min)) + min;
    return random === 0 ? getRandomPosition(minRange,maxRange) : random;
  }

  /**
   * @class Square creates a Square instance into the DOM 
   * add listener to be cloned on click event
   * and animates the square trought the screen 
   * @param {Object} position
   * @param {number} position.x 
   * @param {number} posiition.y
   */
  class Square {
    constructor(position) {
      this.square;
      this.size = SQUARE_SIZE;
      this.x = position.x;
      this.y = position.y;
      this.dx = getRandomPosition(-10,10);
      this.dy = getRandomPosition(-10,10);
      this.bodyWindow = document.body;
      this.initialize();
    }

    /**
     * initialize square and Animation movement
     */
    initialize() {
      this.createSquare();
      this.createMovement();
    }
    /**
     * the square gets created and added to the DOM, is using CSS related to 
     * transform3D for hardware acceleration ( backface-visibility and perspective are related to this based on performance)
     * Background color gets generated based on a random set of numbers and letter with a range of 6 numbers ( with hexa definition for colors)
     */
    createSquare() { 
      this.square = document.createElement('div');
      this.square.setAttribute("style",`
        position:absolute; 
        left:${this.x}px;
        top: ${this.y}px;
        width: ${this.size}px;
        height: ${this.size}px;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000;
        background-color: ${'#'+Math.random().toString(16).substr(2,6)}`
      );
      document.body.append(this.square);
      // use arrow function for the use this inside the scope of the click
      this.square.addEventListener('click',()=> {
        this.duplicate();
      });
    }

    duplicate() {
      SQUARE_LIST.push(
        new Square({
          x: this.x,
          y: this.y
        })
      );
    }
     
    createMovement() {
      const rightBorder = window.innerWidth;
      const bottomBorder = window.innerHeight;
      // handle the movement based on a direction instead of the position
      // this gives you the change to pivot on the desired borders
      if( (this.x + this.size) >= rightBorder - this.dx ||
      this.x + this.dx <= 0){
        this.dx = -this.dx;
      } else {
        this.dx = +this.dx;
      }
      if( (this.y + this.size) >= bottomBorder - this.dy || this.y + this.dy <= 0) {
        this.dy = -this.dy;
      } else {
        this.dy = +this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;
      this.square.style.left = `${this.x}px`;
      this.square.style.top = `${this.y}px`;
      //requestAnimationFrame  use arrow function to use the scope of the class inside the frame animation
      requestAnimationFrame(()=> {
        this.createMovement();
      });
    }
  }
  
  const main = ()=> {
    SQUARE_LIST.push(
      // Draw the squares in a random position but prevent draw it farthest than the borders of the screen, 
      // this will prevent the loop check if the position it's at the same level than the border of the screen and move it on the oposite way
      new Square({
        x: getRandomPosition(0,window.innerWidth - SQUARE_SIZE),
        y: getRandomPosition(0,window.innerHeight - SQUARE_SIZE)
      })
    )
  };

  window.addEventListener('load',main);
})();
