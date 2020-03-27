import getSquareElem from 'utils/getSquareElem'
import Square from 'components/square'
import { SQUARE_LIST, SQUARE_SIZE } from 'utils/globals'
import getRandomNumber from 'utils/randomNumber'

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
