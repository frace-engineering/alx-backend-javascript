export default function updateUniqueItems(mapItems) {
  if (!(mapItems instanceof Map) || mapItems === '') {
    throw new Error('Cannot process');
  }
  return mapItems.forEach((value, key) => {
    if (value === 1) {
      mapItems.set(key, 100);
    }
  });
}
