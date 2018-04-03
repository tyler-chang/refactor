const Movie = require('./movie');
const Rental = require('./rental');

module.exports = class Customer {
  constructor(name) {
    this._name = name;
    this._rentals = [];
  }

  getName() {
    return this._name;
  }

  addRental(rental) {
    this._rentals.push(rental);
  }

  statement() {
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${this.getName()} \n`;

    this._rentals.forEach((rental) => {
      let thisAmount = 0;
      // determine amounts for each line
      switch (rental.getMovie().getPriceCode()) {
        case Movie.REGULAR:
          thisAmount += 2;
          if (rental.getDaysRented() > 2)
            thisAmount += (rental.getDaysRented() - 2) * 1.5;
          break;
        case Movie.NEW_RELEASE:
          thisAmount += rental.getDaysRented() * 3;
          break;
        case Movie.CHILDRENS:
          thisAmount += 1.5;
          if (rental.getDaysRented() > 3)
            thisAmount += (rental.getDaysRented() - 3) * 1.5;
          break;
      }

      // add frequent renter points
      frequentRenterPoints++;
      // add bonus for a two day new release rental
      if((rental.getMovie().getPriceCode() === Movie.NEW_RELEASE) && rental.getDaysRented() > 1)
        frequentRenterPoints++;

      // show figures for this rental
      result += `${rental.getMovie().getTitle()}\t${thisAmount}\n`
      totalAmount += thisAmount;
    });

    // add footer lines
    result += `Amount owed is ${totalAmount}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points`;

    return result;
  }
}