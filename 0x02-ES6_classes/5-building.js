export default class Building {
  constructor(sqft) {
    this._sqft = typeof sqft === 'number' ? sqft : 0;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  get evacuationWarningMessage() {
    return 'Class extending Building must override evacuationWarningMessage';
    }	
}
