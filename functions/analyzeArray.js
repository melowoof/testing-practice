export function analyzeArray(array) {
  const objectReturn = {};

  objectReturn.average =
    array.reduce((sum, current) => sum + current, 0) / array.length;
  objectReturn.max = Math.max(...array);
  objectReturn.min = Math.min(...array);
  objectReturn.length = array.length;

  return objectReturn;
}
