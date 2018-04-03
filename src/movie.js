module.exports = class Movie {
  static get REGULAR() { return 0; }
  static get NEW_RELEASE() { return 1; }
  static get CHILDRENS() { return 2; }

  constructor(title, priceCode) {
    this._title = title;
    this._priceCode = priceCode;
  }

  getTitle() {
    return this._title;
  }

  getPriceCode() {
    return this._priceCode;
  }
}
