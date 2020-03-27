import getRandomNumber from 'utils/randomNumber'
import Square from 'components/square'
import { SQUARE_LIST, SQUARE_SIZE } from 'utils/globals'
import SquareClickDetection from 'handlers/squareClickDetection'

console.log('%c BALU WAS HERE', 'color: #FFFFFF; font-style: bold; background-color: #000000;padding: 20px');


const main = () => {
  const canvas = document.getElementById('canvasElem');
  const context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const firstSquare = new Square({
    x: getRandomNumber(0, window.innerWidth - SQUARE_SIZE),
    y: getRandomNumber(0, window.innerHeight - SQUARE_SIZE),
    size: SQUARE_SIZE,
  }, context);
  SQUARE_LIST.push(firstSquare)
  canvas.addEventListener('click', (e) => {
    SquareClickDetection(e, SQUARE_LIST, context)
  })

  const loop = () => {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    SQUARE_LIST.forEach((square) => {
      context.fillStyle = square.color
      square.createMovement()
      square.draw()
    });
    requestAnimationFrame(loop);
  }
  loop()
};

window.addEventListener('load', main);
