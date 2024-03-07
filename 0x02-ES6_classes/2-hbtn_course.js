export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'name');
    this._length = this._validateNumber(length, 'length');
    this._students = this._validateArray(students, 'students');
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._validateString(newName, 'name');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this._validateNumber(newLength, 'length');
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this._validateArray(newStudents, 'students');
  }

  _validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string.`);
    }
    return value;
  }

  _validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number.`);
    }
    return value;
  }

  _validateArray(value, attribute) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attribute} must be an array.`);
    }
    return value;
  }
}

