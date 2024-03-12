export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || set.length === 0 || typeof startString !== 'string' || startString === '') {
    return '';
  }
  const array = Array.from(set);
  const newArray = array.filter((value) => value.startsWith(startString));
  return newArray.map((value) => value.slice(startString.length)).join('-');
}
