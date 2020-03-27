/**
 * find first element that match the array criteria,
 * used find because in movement cases the click event could happend over 2 squares, and we need the first one found
 * on the array (wich is passed reversed if theres a big amount of squares to get the latest drawed first,
 * even if it doesnt matter the order and the complexity always will be O(n), more squares more overlapped among them)
 * @return {array || boolean} result of search
*/
export default (arraySquares, clickCoords) => {
  return arraySquares.find((square) => {
    if (
      clickCoords.x >= square.x
      && clickCoords.x <= (square.x + square.size)
      && clickCoords.y >= square.y
      && clickCoords.y <= (square.y + square.size)) {
      return square;
    }
    return false
  })
}
