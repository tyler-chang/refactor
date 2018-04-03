module.exports = class Rental {
  constructor(movie, daysRented) {
    this._movie = movie;
    this._daysRented = daysRented;
  }

  getMovie() {
    return this._movie;
  }

  getDaysRented() {
    return this._daysRented;
  }
}