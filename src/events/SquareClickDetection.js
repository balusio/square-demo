import getSquareElem from 'utils/getSquareElem'
import Square from 'components/square'
import { SQUARE_LIST, SQUARE_SIZE } from 'utils/globals'

export default ({ clientX, clientY }, array) => {
  const checkArray = (array.length >= 25) ? array.reverse() : array
  const hittedSquare = getSquareElem({
    x: clientX,
    y: clientY,
  }, checkArray)
  if (hittedSquare) {
    SQUARE_LIST.push(new Square({
      x: hittedSquare.x,
      y: hittedSquare.y,
      size: SQUARE_SIZE,
    }))
  }
}
