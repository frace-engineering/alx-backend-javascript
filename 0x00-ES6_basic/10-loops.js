export default function appendToEachArryValue(array, appendString) {

	for (const [idx, value] of array.entries()) {
		array[idx] = appendString + value;
	}

	return array;
}
