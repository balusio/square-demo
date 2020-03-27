/**
 * @return a random Number between ranges
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
export default function getRandomNumber(minRange, maxRange) {
  const min = Math.ceil(minRange);
  const max = Math.floor(maxRange);
  const random = Math.floor(Math.random() * (max - min)) + min;
  return random === 0 ? getRandomNumber(minRange, maxRange) : random;
}
