import getSquareElem from 'utils/getSquareElem'
import Square from 'components/square'
import { SQUARE_LIST, SQUARE_SIZE } from 'utils/globals'

export default ({ clientX, clientY }, arraySquares, context) => {
  const checkArray = (arraySquares.length >= 25) ? arraySquares.reverse() : arraySquares
  const hittedSquare = getSquareElem(checkArray, {
    x: clientX,
    y: clientY,
  })
  if (hittedSquare) {
    SQUARE_LIST.push(new Square({
      x: hittedSquare.x,
      y: hittedSquare.y,
      size: SQUARE_SIZE,
    }, context))
  }
}
