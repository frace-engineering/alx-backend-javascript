export default function appendToEachArryValue(array, appendString) {
  const newArray = [...array];
  for (const [idx, value] of array.entries()) {
    newArray[idx] = appendString + value;
  }
  return newArray.map((value) => appendString + value);
}
