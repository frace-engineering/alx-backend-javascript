export default function appendToEachArryValue(array, appendString) {
  const newArray = [];
  for (const value of array.entries()) {
    newArray.push(appendString + value);
  }

  return newArray;
}
