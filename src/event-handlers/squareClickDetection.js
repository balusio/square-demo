import getSquareElem from 'utils/getSquareElem'
import Square from 'components/square'
import { SQUARE_LIST, SQUARE_SIZE } from 'utils/globals'
import getRandomNumber from 'utils/randomNumber'

/**
 * this functions handles the click event and if a square has been clicked (hitted)
 * it will add it to the global SQUARE_LIST array to be draw it on the main loop
*/
export default ({ clientX, clientY }, arraySquares, context) => {
  const hittedSquare = getSquareElem(arraySquares, {
    x: clientX,
    y: clientY,
  })
  if (hittedSquare) {
    SQUARE_LIST.push(new Square({
      x: hittedSquare.x,
      y: hittedSquare.y,
      size: getRandomNumber(1, SQUARE_SIZE),
    }, context))
  }
}
