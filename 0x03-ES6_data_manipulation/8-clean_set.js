export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString === '') {
    return '';
  }
  const array = Array.from(set);
  const newArray = array.filter((value) => value.startsWith(startString));
  return newArray.map((value) => value.slice(startString.length)).join('-');
}
