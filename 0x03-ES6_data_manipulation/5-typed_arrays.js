export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
    throw new TypeError('Length, Position, and Value must be numbers');
  }
  if (position < 0 || position >= length) {
    throw new TypeError('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  int8Array[position] = value;

  return new DataView(buffer);
}
